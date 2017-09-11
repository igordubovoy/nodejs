var db = require('../db');
var ObjectID = require('mongodb').ObjectID;

exports.all = function (callback) {
  db.get().collection('artists').find().toArray(function (err, docs) {
    callback(err, docs);
  });
};

exports.add = function (artist, callback) {
  db.get().collection('artists').insert(artist, function(err, result) {
    callback(err, result);
  });
};

exports.update = function (artist, callback) {
  db.get().collection('artists').updateOne(
    { _id: ObjectID(artist.id) },
    { name: artist.name },
    function(err, result) {
      callback(err, result);
    });
};

exports.delete = function (id, callback) {
  db.get().collection('artists').deleteOne(
    { _id: ObjectID(id) },
    function (err, result) { callback(err, result); }
  );
};

exports.getById = function (id, callback) {
  db.get().collection('artists').findOne(
    { _id: ObjectID(id) },
    function (err, doc) { callback(err, doc); }
  );
};
