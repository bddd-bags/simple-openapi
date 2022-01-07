'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.v1UsersidBiodataGET = function v1UsersidBiodataGET (req, res, next, getUserId) {
  User.v1UsersidBiodataGET(getUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1UsersidBiodataPUT = function v1UsersidBiodataPUT (req, res, next, body, getUserId) {
  User.v1UsersidBiodataPUT(body, getUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
