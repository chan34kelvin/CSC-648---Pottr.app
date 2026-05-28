const e = require("express");
var db = require("../conf/database");
const PostModel = {};

//creates a post 
PostModel.createPost = (userId, videoPath, title, categoryId, competitionId) => {
  return db
    .execute(
      `INSERT INTO posts(userId, videoPath, title, categoryId, competitionId)
        VALUES(?,?,?,?,?)`,
      [userId, videoPath, title, categoryId, competitionId]
    )
    .then(([results, fields]) => {
      if (results && results.affectedRows) {
        return Promise.resolve(results.insertId);
      } else {
        return Promise.resolve(-1);
      }
    })
    .catch((err) => Promise.reject(err));
};

PostModel.getPostByCompetitionId = (competitionId) => {
  return db.execute(
    `SELECT * FROM posts where competitionId=?`,
    [competitionId]
  )
  .then(([results, fields]) => {
    return Promise.resolve(results);
  })
  .catch((err) => Promise.reject(err));
}

PostModel.getPost = (postId) => {
  return db.execute(
    `SELECT * FROM posts where postId=?`,
    [postId]
  )
  .then(([results, fields]) => {
    return Promise.resolve(results);
  })
  .catch((err) => Promise.reject(err));
}

PostModel.getAllPost = () => {
  return db.execute(
    `SELECT * FROM posts`
  )
  .then(([results, fields]) => {
    return Promise.resolve(results);
  })
  .catch((err) => Promise.reject(err));
}

module.exports = PostModel;