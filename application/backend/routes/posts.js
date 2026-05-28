const express = require("express");
const router = express.Router();
const PostModel = require('../models/Posts.js')
const PostError = require('../helpers/error/PostError.js')

var multer = require('multer');
var path = require('path')
var crypto = require('crypto');

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../frontend/build/");
    },
    filename: function (req, file, cb) {
        let fileExt = path.extname(file.originalname);
        let randomName = crypto.randomBytes(22).toString("hex");
        cb(null, `${randomName}${fileExt}`);
    }
});

var limits = {
    fileSize: 100000000,
    files: 1
};

var uploader = multer({
    storage: storage,
    limits: limits,
    fileFilter(req, file, cb) {
        let fileType = file.mimetype.split('/')[0];
        if (fileType != 'video') {
            return cb(new Error('Please upload a video'))
        }
        cb(undefined, true)
    }
});

router.get('/get/:postId(\\d+)', (req, res, next) => {
    let postId = req.params.postId;

    PostModel.getPost(postId)
        .then((results) => {
            res.json(results);
        })
        .catch((err) => res.status(500).send(err.message));
})

// get posts that have that competitionid 
router.get('/getByCompId/:compId(\\d+)', (req, res, next) => {
    let competitionId = req.params.compId;

    PostModel.getPostByCompetitionId(competitionId)
        .then((results) => {
            res.json(results)
        })
        .catch((err) => res.status(500).send(err.message));
})

router.get('/getAll', (req, res, next) => {

    PostModel.getAllPost()
        .then((results) => {
            res.json(results)
        })
        .catch((err) => res.status(500).send(err.message));
})

router.post('/create', uploader.single('video'), (req, res, next) => {

    let userId = req.session.userId

    if (userId) {
        let videoPath = req.file.filename;
        let title = req.body.title;
        let competitionId = req.body.competitionId;
        let categoryId = req.body.categoryId;

        PostModel.createPost(userId, videoPath, title, categoryId, competitionId)
            .then((createdPostId) => {
                if (createdPostId > 0) {
                    res.json(createdPostId);
                    // res.redirect("/post/" + createdPostId)
                } else {
                    throw new PostError('Post could not be created', '/postimage', 200)
                }
            })
            .catch((err) => {
                console.log("err", err);
                if (err instanceof PostError) {
                    res.status(err.getStatus());
                    //res.redirect(err.getRedirectURL());
                } else {
                    next(err);
                }
            });
    }else{
        res.redirect("/login")
    }
});

module.exports = router;
