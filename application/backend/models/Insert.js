var db = require("../conf/database");
const InsertModel = {};

InsertModel.users = (username, email, password) => {
  return db
    .execute(
      `INSERT INTO users (username, email, password) 
            VALUES (?, ?, ?)`,
      [username, email, password]
    )
    .then(([results, fields]) => {
      return Promise.resolve(results && results.affectedRows);
    })
    .catch((err) => Promise.reject(err));
};

InsertModel.categories = (name, picturepath) => {
  return db
    .execute(
      `INSERT INTO categories (name, picturepath) 
            VALUES (?, ?)`,
      [name, picturepath]
    )
    .then(([results, fields]) => {
      return Promise.resolve(results && results.affectedRows);
    })
    .catch((err) => Promise.reject(err));
};

InsertModel.posts = (title, clippath, userid, categoryid) => {
  return db
    .execute(
      `INSERT INTO posts (title, clippath, fk_users_posts_userid, fk_categories_posts_categoryid) 
            VALUES (?, ?, ?, ?)`,
      [title, clippath, userid, categoryid]
    )
    .then(([results, fields]) => {
      return Promise.resolve(results && results.affectedRows);
    })
    .catch((err) => Promise.reject(err));
};

InsertModel.subscriptions = (userid, categoryid) => {
  return db
    .execute(
      `INSERT INTO subscriptions (fk_users_subscriptions_userid, fk_categories_subscriptions_categoryid) 
            VALUES (?, ?)`,
      [userid, categoryid]
    )
    .then(([results, fields]) => {
      return Promise.resolve(results && results.affectedRows);
    })
    .catch((err) => Promise.reject(err));
};

InsertModel.views = (userid, postid) => {
  return db
    .execute(
      `INSERT INTO views (fk_users_views_userid, fk_posts_views_postid) 
            VALUES (?, ?)`,
      [userid, postid]
    )
    .then(([results, fields]) => {
      return Promise.resolve(results && results.affectedRows);
    })
    .catch((err) => Promise.reject(err));
};

InsertModel.comments = (text, postid, userid) => {
  return db
    .execute(
      `INSERT INTO comments (text, fk_posts_comments_postid, fk_users_comments_userid) 
            VALUES (?, ?, ?)`,
      [text, postid, userid]
    )
    .then(([results, fields]) => {
      return Promise.resolve(results && results.affectedRows);
    })
    .catch((err) => Promise.reject(err));
};

InsertModel.replies = (replyid, commentid) => {
  return db
    .execute(
      `INSERT INTO replies (fk_comments_replies_replyid, fk_comments_replies_commentid) 
            VALUES (?, ?)`,
      [replyid, commentid]
    )
    .then(([results, fields]) => {
      return Promise.resolve(results && results.affectedRows);
    })
    .catch((err) => Promise.reject(err));
};

//i change categoryid bc it crashing from diff naming
InsertModel.competitions = (
  starttime,
  endtime,
  prizepool,
  maxcompetitors,
  entryfee,
  name,
  categoryid,
  picturepath
) => {
  return db
    .execute(
      `INSERT INTO competitions (starttime, endtime, prizepool, maxcompetitors, entryfee, name, fk_categories_competitions_categoryid, picturepath)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        starttime,
        endtime,
        prizepool,
        maxcompetitors,
        entryfee,
        name,
        categoryid,
        picturepath,
      ]
    )
    .then(([results, fields]) => {
      return Promise.resolve(results && results.affectedRows);
    })
    .catch((err) => Promise.reject(err));
};

InsertModel.entries = (postid, compid) => {
  return db
    .execute(
      `INSERT INTO entries (fk_posts_entries_postid, fk_competitions_entries_compid) 
            VALUES (?, ?)`,
      [postid, compid]
    )
    .then(([results, fields]) => {
      return Promise.resolve(results && results.affectedRows);
    })
    .catch((err) => Promise.reject(err));
};

InsertModel.votes = (postid, userid, compid) => {
  return db
    .execute(
      `INSERT INTO votes (fk_posts_votes_postid, fk_users_votes_userid, fk_competitions_votes_compid) 
            VALUES (?, ?, ?)`,
      [postid, userid, compid]
    )
    .then(([results, fields]) => {
      return Promise.resolve(results && results.affectedRows);
    })
    .catch((err) => Promise.reject(err));
};

module.exports = InsertModel;
