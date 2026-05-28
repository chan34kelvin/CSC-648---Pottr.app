const express = require("express");
const router = express.Router();
const db = require("../conf/database");
const InsertModel = require("../models/Insert");
const InsertError = require("../helpers/error/InsertError");

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.post("/users", (req, res, next) => {
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;

  InsertModel.users(username, email, password)
    .then((insertionSuccessful) => {
      if (insertionSuccessful) {
        res.status(200).send("Insertion Successful");
      } else {
        throw new InsertError(
          "Server Error, user could not be created",
          "/",
          500
        );
      }
    })
    .catch((err) => {
      if (err instanceof InsertError) {
        res.status(err.getStatus());
        res.send(err.getMessage());
      } else {
        next(err);
      }
    });
});

router.post("/categories", (req, res, next) => {
  var name = req.body.name;
  var picturepath = req.body.picturepath;

  InsertModel.categories(name, picturepath)
    .then((insertionSuccessful) => {
      if (insertionSuccessful) {
        res.status(200).send("Insertion Successful");
      } else {
        throw new InsertError(
          "Server Error, user could not be created",
          "/",
          500
        );
      }
    })
    .catch((err) => {
      if (err instanceof InsertError) {
        res.status(err.getStatus());
        res.send(err.getMessage());
      } else {
        next(err);
      }
    });
});

router.post("/posts", (req, res, next) => {
  var title = req.body.title;
  var clippath = req.body.clippath;
  var userid = req.body.userid;
  var categoryid = req.body.categoryid;

  InsertModel.posts(title, clippath, userid, categoryid)
    .then((insertionSuccessful) => {
      if (insertionSuccessful) {
        res.status(200).send("Insertion Successful");
      } else {
        throw new InsertError(
          "Server Error, user could not be created",
          "/",
          500
        );
      }
    })
    .catch((err) => {
      if (err instanceof InsertError) {
        res.status(err.getStatus());
        res.send(err.getMessage());
      } else {
        next(err);
      }
    });
});

router.post("/subscriptions", (req, res, next) => {
  var userid = req.body.userid;
  var categoryid = req.body.categoryid;

  InsertModel.subscriptions(userid, categoryid)
    .then((insertionSuccessful) => {
      if (insertionSuccessful) {
        res.status(200).send("Insertion Successful");
      } else {
        throw new InsertError(
          "Server Error, user could not be created",
          "/",
          500
        );
      }
    })
    .catch((err) => {
      if (err instanceof InsertError) {
        res.status(err.getStatus());
        res.send(err.getMessage());
      } else {
        next(err);
      }
    });
});

router.post("/views", (req, res, next) => {
  var userid = req.body.userid;
  var postid = req.body.postid;

  InsertModel.views(userid, postid)
    .then((insertionSuccessful) => {
      if (insertionSuccessful) {
        res.status(200).send("Insertion Successful");
      } else {
        throw new InsertError(
          "Server Error, user could not be created",
          "/",
          500
        );
      }
    })
    .catch((err) => {
      if (err instanceof InsertError) {
        res.status(err.getStatus());
        res.send(err.getMessage());
      } else {
        next(err);
      }
    });
});

router.post("/comments", (req, res, next) => {
  var text = req.body.text;
  var postid = req.body.postid;
  var userid = req.body.userid;

  InsertModel.comments(text, postid, userid)
    .then((insertionSuccessful) => {
      if (insertionSuccessful) {
        res.status(200).send("Insertion Successful");
      } else {
        throw new InsertError(
          "Server Error, user could not be created",
          "/",
          500
        );
      }
    })
    .catch((err) => {
      if (err instanceof InsertError) {
        res.status(err.getStatus());
        res.send(err.getMessage());
      } else {
        next(err);
      }
    });
});

router.post("/replies", (req, res, next) => {
  var replyid = req.body.replyid;
  var commentid = req.body.commentid;

  InsertModel.replies(replyid, commentid)
    .then((insertionSuccessful) => {
      if (insertionSuccessful) {
        res.status(200).send("Insertion Successful");
      } else {
        throw new InsertError(
          "Server Error, user could not be created",
          "/",
          500
        );
      }
    })
    .catch((err) => {
      if (err instanceof InsertError) {
        res.status(err.getStatus());
        res.send(err.getMessage());
      } else {
        next(err);
      }
    });
});

router.post("/competitions", (req, res, next) => {
  var starttime = req.body.starttime;
  var endtime = req.body.endtime;
  var prizepool = req.body.prizepool;
  var maxcompetitors = req.body.maxcompetitors;
  var entryfee = req.body.entryfee;
  var name = req.body.name;
  var fk_categories_competitions_categoryid =
    req.body.fk_categories_competitions_categoryid;
  var picturepath = req.body.picturepath;

  InsertModel.competitions(
    starttime,
    endtime,
    prizepool,
    maxcompetitors,
    entryfee,
    name,
    fk_categories_competitions_categoryid,
    picturepath
  )
    .then((insertionSuccessful) => {
      if (insertionSuccessful) {
        res.status(200).send("Insertion Successful");
      } else {
        throw new InsertError(
          "Server Error, user could not be created",
          "/",
          500
        );
      }
    })
    .catch((err) => {
      if (err instanceof InsertError) {
        res.status(err.getStatus());
        res.send(err.getMessage());
      } else {
        next(err);
      }
    });
});

router.post("/entries", (req, res, next) => {
  var postid = req.body.postid;
  var compid = req.body.compid;

  InsertModel.entries(postid, compid)
    .then((insertionSuccessful) => {
      if (insertionSuccessful) {
        res.status(200).send("Insertion Successful");
      } else {
        throw new InsertError(
          "Server Error, user could not be created",
          "/",
          500
        );
      }
    })
    .catch((err) => {
      if (err instanceof InsertError) {
        res.status(err.getStatus());
        res.send(err.getMessage());
      } else {
        next(err);
      }
    });
});

router.post("/votes", (req, res, next) => {
  var postid = req.body.postid;
  var userid = req.body.userid;
  var compid = req.body.compid;

  InsertModel.votes(postid, userid, compid)
    .then((insertionSuccessful) => {
      if (insertionSuccessful) {
        res.status(200).send("Insertion Successful");
      } else {
        throw new InsertError(
          "Server Error, user could not be created",
          "/",
          500
        );
      }
    })
    .catch((err) => {
      if (err instanceof InsertError) {
        res.status(err.getStatus());
        res.send(err.getMessage());
      } else {
        next(err);
      }
    });
});

module.exports = router;
