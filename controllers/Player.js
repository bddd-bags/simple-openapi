'use strict';

var utils = require('../utils/writer.js');
var Player = require('../service/PlayerService');

module.exports.v1GameidRoundGET = function v1GameidRoundGET (req, res, next, getIdPlayer) {
  Player.v1GameidRoundGET(getIdPlayer)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1GamesroomIdPOST = function v1GamesroomIdPOST (req, res, next, body, getRoomId) {
  Player.v1GamesroomIdPOST(body, getRoomId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1Join_roomroomIdPOST = function v1Join_roomroomIdPOST (req, res, next, getRoomId) {
  Player.v1Join_roomroomIdPOST(getRoomId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1PlayersGET = function v1PlayersGET (req, res, next, point, level) {
  Player.v1PlayersGET(point, level)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1RoomInvitingPOST = function v1RoomInvitingPOST (req, res, next, body) {
  Player.v1RoomInvitingPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1RoomroomIdDELETE = function v1RoomroomIdDELETE (req, res, next, getRoomId) {
  Player.v1RoomroomIdDELETE(getRoomId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1RoomsGET = function v1RoomsGET (req, res, next, isActive) {
  Player.v1RoomsGET(isActive)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1RoomsPOST = function v1RoomsPOST (req, res, next, body) {
  Player.v1RoomsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
