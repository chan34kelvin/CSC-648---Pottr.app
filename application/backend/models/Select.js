var db = require("../conf/database");
const SelectModel = {};

SelectModel.select = (table) => {
  return db
    .execute("SELECT * FROM ".concat(table))
    .then(([results, fields]) => {
      return Promise.resolve(results);
    })
    .catch((err) => Promise.reject(err));
};

module.exports = SelectModel;
