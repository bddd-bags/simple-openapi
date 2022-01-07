'use strict';


/**
 * Get all Games
 * Endpoint to get all Games
 *
 * returns userRounds
 **/
exports.v1GamesGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "createdAt",
  "gameOptionId" : {
    "inferiorId" : 7,
    "createdAt" : "createdAt",
    "name" : "ROCK",
    "id" : 5,
    "superiorId" : 2,
    "updatedAt" : "updatedAt"
  },
  "roundId" : {
    "createdAt" : "createdAt",
    "winnerId" : {
      "createdAt" : "createdAt",
      "roleId" : 6,
      "id" : 0,
      "username" : "username",
      "encryptedPassword" : "encryptedPassword",
      "updatedAt" : "updatedAt"
    },
    "id" : 0,
    "roomId" : {
      "roundCount" : 5,
      "createdAt" : "createdAt",
      "winnerId" : 1,
      "name" : "name",
      "id" : 6,
      "isActive" : true,
      "updatedAt" : "updatedAt"
    },
    "status" : "PLAYER_1_TURN",
    "updatedAt" : "updatedAt"
  },
  "updatedAt" : "updatedAt"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all Rooms and active Room
 * Endpoint to get all rooms and Get an active room
 *
 * isActive Boolean Get active room (optional)
 * returns RoomEntity
 **/
exports.v1RoomsGET = function(isActive) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "roundCount" : 5,
  "createdAt" : "createdAt",
  "winnerId" : 1,
  "name" : "name",
  "id" : 6,
  "isActive" : true,
  "updatedAt" : "updatedAt"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all rounds
 * Endpoint to get all rounds
 *
 * returns RoundEntity
 **/
exports.v1RoundsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "createdAt",
  "winnerId" : {
    "createdAt" : "createdAt",
    "roleId" : 6,
    "id" : 0,
    "username" : "username",
    "encryptedPassword" : "encryptedPassword",
    "updatedAt" : "updatedAt"
  },
  "id" : 0,
  "roomId" : {
    "roundCount" : 5,
    "createdAt" : "createdAt",
    "winnerId" : 1,
    "name" : "name",
    "id" : 6,
    "isActive" : true,
    "updatedAt" : "updatedAt"
  },
  "status" : "PLAYER_1_TURN",
  "updatedAt" : "updatedAt"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete User
 * Endpoint to delete user
 *
 * getUserId String getId for update Biodata
 * returns inline_response_200_2
 **/
exports.v1UseridDELETE = function(getUserId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "SUCCESS_DELETED",
  "status" : "OK"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all Users
 * Endpoint to get all users
 *
 * returns BiodataEntity
 **/
exports.v1UsersGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "createdAt",
  "phoneNumber" : 0,
  "address" : "address",
  "avatarUrl" : "avatarUrl",
  "bio" : "bio",
  "userId" : {
    "createdAt" : "createdAt",
    "roleId" : 6,
    "id" : 0,
    "username" : "username",
    "encryptedPassword" : "encryptedPassword",
    "updatedAt" : "updatedAt"
  },
  "updatedAt" : "updatedAt"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

