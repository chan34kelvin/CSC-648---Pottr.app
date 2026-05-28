var db = require("../conf/database");
const UserModel = {};

UserModel.doesEmailExist = (email) => {
  return db
    .execute("SELECT * FROM users WHERE email=?", [email])
    .then(([results, fields]) => {
      return Promise.resolve(!(results && results.length == 0));
    })
    .catch((err) => Promise.reject(err));
};

UserModel.authenticate = (email, password) => {
  return db
    .execute(
      "SELECT userId, email FROM users WHERE email=? AND password=?",
      [email, password]
    )
    .then(([results, fields]) => {
      if (results && results.length == 1) {
        return Promise.resolve(results[0].userId);
      } else {
        return Promise.resolve(-1);
      }
    })
    .catch((err) => Promise.reject(err));
};

UserModel.create = (email, password) => {
  return db
    .execute(
      `INSERT INTO users (email, password)
        VALUES (?, ?)`,
      [email, password]
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

UserModel.addBalance = (amount, userId) => {
  return db
    .execute(
      `UPDATE users \
        SET balance = balance + ? \
        WHERE userId = ?;`,
      [amount, userId]
    )
}

module.exports = UserModel;