var db = require("../conf/database");
const CategoryModel = {};

CategoryModel.getCategories = () => {
    return db
      .execute("SELECT * FROM categories")
      .then(([results, fields]) => {
        return Promise.resolve(results);
      })
      .catch((err) => Promise.reject(err));
  };

module.exports = CategoryModel;