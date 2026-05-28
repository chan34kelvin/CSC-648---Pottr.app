var db = require("../conf/database");
const CompetitionModel = {};

CompetitionModel.search = (search) => {
  let baseSQL =
    "SELECT *, CONCAT(A.competitionName, B.categoryName) AS SearchTerm FROM \
    competitions AS A JOIN categories AS B \
    WHERE A.categoryId=B.categoryId \
    HAVING SearchTerm like ?;";
  let searchTerm = "%" + search + "%"
  return db.execute(baseSQL, [searchTerm])
    .then(([results, fields]) => {
      return Promise.resolve(results);
    })
    .catch((err) => Promise.reject(err));
};

CompetitionModel.getCompetitions = () => {
  return db.execute(
    `SELECT * FROM \
      competitions AS A JOIN categories AS B \
      WHERE A.categoryId=B.categoryId;`)
    .then(([results, fields]) => {
      return Promise.resolve(results);
    })
    .catch((err) => Promise.reject(err));
}

CompetitionModel.getCompetition = (compId) => {
  return db.execute(
    `SELECT * FROM competitions AS A JOIN categories AS B \
      WHERE A.categoryId=B.categoryId and A.competitionId=?`,
    [compId]
  )
    .then(([results, fields]) => {
      return Promise.resolve(results);
    })
    .catch((err) => Promise.reject(err));
}

CompetitionModel.getCompetitionByCategoryId = (categoryId) => {
  return db.execute(
    `SELECT * FROM \
      competitions AS A JOIN categories AS B \
      WHERE A.categoryId=B.categoryId and A.categoryId=?`,
    [categoryId]
  )
    .then(([results, fields]) => {
      return Promise.resolve(results);
    })
    .catch((err) => Promise.reject(err));
}

CompetitionModel.setWinnerPostId = (postId, compId) => {
  return db.execute(
    `UPDATE competitions 
      SET winningPost = ? 
      WHERE competitionId = ?`,
      [postId, compId]
  )
    .then(([results, fields]) => {
      return Promise.resolve(results);
    })
    .catch((err) => Promise.reject(err));
}

module.exports = CompetitionModel;
