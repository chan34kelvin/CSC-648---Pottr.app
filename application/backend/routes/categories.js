const express = require("express");
const router = express.Router();
const CategoryModel = require('../models/Categories.js')
const CategoryError = require('../helpers/error/CategoryError.js');

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get('/getCategories', (req, res, next) => {
    CategoryModel.getCategories()
        .then((results) => {
            res.json(results)
        })
        .catch((err) => res.status(500).send(err.message));
})

module.exports = router;