"use strict";

const note = require("../models").note;

exports.list = function(req, res) {
  note
    .findAll()
    .then(note => {
      res.jsonp(note);
    })
    .catch(error => res.status(400).send(error));
};

exports.create = function(req, res) {
  res.jsonp(note.create(req.body));
};

exports.update = function(req, res) {
  let id = req.params.id;
  note
    .findById(req.params.id)
    .then(note => {
      if (!note) {
        return res.status(400).send({
          message: "note Not Found"
        });
      }
      return note
        .update()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};

exports.findById = function(req, res) {
  let id = req.params.id;
  note.findById(id).then(note => {
    if (!note) {
      return res.status(400).send({
        message: "note Not Found"
      });
    }
    res.jsonp(note);
  });
};

exports.delete = function(req, res) {
  let id = req.params.id;
  note
    .findById(req.params.id)
    .then(note => {
      if (!note) {
        return res.status(400).send({
          message: "note Not Found"
        });
      }
      return note
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};
