var db = require("../models");

module.exports = function (app) {
  app.get("/api/authors", function (req, res) {
    db.Author.findAll({
      include: [db.Post],
    }).then(function (dbAuthor) {
      res.json(dbAuthor);
    });
  });
};
