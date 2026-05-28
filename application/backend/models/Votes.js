var db = require("../conf/database");
const VoteModel = {};

VoteModel.getVotesInComp = (compId) => {
    return db.execute(
        `SELECT postId, COUNT(*) as c \
            FROM votes WHERE competitionId=? \
            GROUP BY postId;`,
        [compId]
    )
        .then(([results, fields]) => {
            return Promise.resolve(results);
        })
        .catch((err) => Promise.reject(err));
}

VoteModel.getWinningPostIdInComp = (compId) => {
    return db.execute(
        `SELECT postId, COUNT(*) as c \
            FROM votes WHERE competitionId=? \
            GROUP BY postId \
            ORDER BY c DESC;`,
        [compId]
    )
        .then(([results, fields]) => {
            if (results.length) {
                return Promise.resolve(results[0].postId);
            } else {
                return Promise.resolve(null);
            }
        })
        .catch((err) => Promise.reject(err));
}

VoteModel.getVotesForPost = (postId) => {
    return db.execute(
        `SELECT COUNT(*) \
            FROM votes WHERE postId=?;`,
        [postId]
    )
        .then(([results, fields]) => {
            return Promise.resolve(results);
        })
        .catch((err) => Promise.reject(err));
}

VoteModel.vote = (userId, postId, competitionId) => {
    return db.execute(
        `INSERT INTO votes \
            (userId, postId, competitionId) \
            VALUES (?,?,?)`,
        [userId, postId, competitionId]
    )
        .then(([results, fields]) => {
            return Promise.resolve(results);
        })
        .catch((err) => Promise.reject(err));
}

VoteModel.checkVote = (userId, postId, competitionId) => {
    return db.execute(
        `SELECT * FROM votes \
            where userId=? and postId=? and competitionId=?`,
        [userId, postId, competitionId]
    )
        .then(([results, fields]) => {
            return Promise.resolve(results && results.length);
        })
        .catch((err) => Promise.reject(err));
}



module.exports = VoteModel;