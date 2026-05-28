const express = require("express");
const router = express.Router();
const CompetitionModel = require('../models/Competitions.js')
const PostModel = require('../models/Posts.js')
const CompetitionError = require('../helpers/error/CompetitionError.js');
const VoteModel = require("../models/Votes.js");
const UserModel = require("../models/Users.js");

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get('/search', async (req, res, next) => {
    try {
        let searchTerm = req.query.search || "";
        let results = await CompetitionModel.search(searchTerm);
        res.send({
            message: `${results.length} result(s) found`,
            results: results
        });
    } catch (err) {
        next(err);
    }
});

router.get('/getAll', (req, res, next) => {
    CompetitionModel.getCompetitions()
        .then((results) => {
            res.json(results)
        })
        .catch((err) => res.status(500).send(err.message));
}
)



router.get('/getCompetition/:compId(\\d+)', (req, res, next) => {
    let compId = req.params.compId;
    CompetitionModel.getCompetition(compId)
        .then((results) => {
            function checkCompetitionNeedsToBePaidOut(results) {
                let endTime = new Date(results[0].endTime)
                return endTime < Date.now() && !results[0].winningPost
            }
            if (checkCompetitionNeedsToBePaidOut(results)) {
                VoteModel.getWinningPostIdInComp(compId)
                    .then((winningPostId) => {
                        if (winningPostId) {
                            CompetitionModel.setWinnerPostId(winningPostId, compId)
                            PostModel.getPost(winningPostId)
                                .then((post) => {
                                    return post[0].userId
                                })
                                .then((winningUserId) => {
                                    let payout = results[0].prizePool
                                    UserModel.addBalance(payout, winningUserId)
                                })
                                .catch((err) => res.status(500).send(err.message));
                        }
                    })
                    .catch((err) => res.status(500).send(err.message));
            }
            res.json(results)
        })
        .catch((err) => res.status(500).send(err.message));
})

router.get('/getByCategoryId/:categoryId(\\d+)', (req, res, next) => {
    let categoryId = req.params.categoryId;
    CompetitionModel.getCompetitionByCategoryId(categoryId)
        .then((results) => {
            res.json(results)
        })
        .catch((err) => res.status(500).send(err.message));
});

module.exports = router;