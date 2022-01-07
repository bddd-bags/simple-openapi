'use strict';

var utils = require('../utils/writer.js');
var Admin = require('../service/AdminService');

module.exports.v1GamesGET = function v1GamesGET (req, res, next) {
  Admin.v1GamesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1RoomsGET = function v1RoomsGET (req, res, next, isActive) {
  Admin.v1RoomsGET(isActive)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1RoundsGET = function v1RoundsGET (req, res, next) {
  Admin.v1RoundsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1UseridDELETE = function v1UseridDELETE (req, res, next, getUserId) {
  Admin.v1UseridDELETE(getUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1UsersGET = function v1UsersGET (req, res, next) {
  Admin.v1UsersGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
