"use strict";

const category = require("../models").category;

exports.list = function(req, res) {
  category
    .findAll()
    .then(category => {
      res.jsonp(category);
    })
    .catch(error => res.status(400).send(error));
};

exports.create = function(req, res) {
  res.jsonp(category.create(req.body));
};

exports.update = function(req, res) {
  let id = req.params.id;
  category
    .findById(req.params.id)
    .then(category => {
      if (!category) {
        return res.status(400).send({
          message: "category Not Found"
        });
      }
      return category
        .update()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};

exports.findById = function(req, res) {
  let id = req.params.id;
  category.findById(id).then(category => {
    if (!category) {
      return res.status(400).send({
        message: "category Not Found"
      });
    }
    res.jsonp(category);
  });
};

exports.delete = function(req, res) {
  let id = req.params.id;
  category
    .findById(req.params.id)
    .then(category => {
      if (!category) {
        return res.status(400).send({
          message: "category Not Found"
        });
      }
      return category
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};
