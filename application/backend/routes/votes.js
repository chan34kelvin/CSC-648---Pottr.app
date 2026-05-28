const express = require("express");
const router = express.Router();
const VoteModel = require('../models/Votes')
const VoteError = require('../helpers/error/VoteError.js')

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get('/getAllInCompetition/:compId(\\d+)', (req, res, next) => {
    let compId = req.params.compId;
    VoteModel.getVotesInComp(compId)
        .then((results) => {
            res.json(results)
        })
        .catch((err) => res.status(500).send(err.message));
})

router.get('/getVotesForPost/:postId(\\d+)', (req, res, next) => {
    let postId = req.params.postId;
    VoteModel.getVotesForPost(postId)
        .then((results) => {
            res.json(results)
        })
        .catch((err) => res.status(500).send(err.message));
})

router.post('/vote', (req, res, next) => {
    let userId = req.session.userId;
    let postId = req.body.postId;
    let competitionId = req.body.competitionId;
    VoteModel.vote(userId, postId, competitionId)
        .then((results) => {
            res.json(results);
        })
        .catch((err) => {
            if (err instanceof VoteError) {
                res.status(err.getStatus());
            } else {
                next(err);
            }
        });
})

router.post('/hasVoted', (req, res, next) => {
    let userId = req.session.userId;
    console.log(userId)

    if (userId) {
        let postId = req.body.postId;
        let competitionId = req.body.competitionId;

        VoteModel.checkVote(userId, postId, competitionId)
            .then((hasVoted) => {
                res.json({ voted: hasVoted })
            })
            .catch((err) => {
                if (err instanceof VoteError) {
                    res.status(err.getStatus());
                } else {
                    next(err);
                }
            });
    }
})

module.exports = router;