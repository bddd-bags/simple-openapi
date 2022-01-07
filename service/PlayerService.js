'use strict';


/**
 * Get game and round byId player
 * Endpoint to get game and room byId player
 *
 * getIdPlayer String getId for update Biodata
 * returns userRounds
 **/
exports.v1GameidRoundGET = function(getIdPlayer) {
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
 * the player chooses his choice
 * Endpoint player chooses his choice
 *
 * body UserRounds 
 * getRoomId String getId Room
 * returns userRounds
 **/
exports.v1GamesroomIdPOST = function(body,getRoomId) {
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
 * Join in the room
 * Endpoint to join in the room
 *
 * getRoomId String getId Room
 * returns inline_response_200_1
 **/
exports.v1Join_roomroomIdPOST = function(getRoomId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "createdAt",
  "data" : {
    "createdAt" : "createdAt",
    "userId" : {
      "createdAt" : "createdAt",
      "roleId" : 6,
      "id" : 0,
      "username" : "username",
      "encryptedPassword" : "encryptedPassword",
      "updatedAt" : "updatedAt"
    },
    "updatedAt" : "updatedAt"
  },
  "status" : "status",
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
 * Get player by Point and Level
 * Endpoint to get player by Point and level
 *
 * point Integer get point player (optional)
 * level Integer get level player (optional)
 * returns inline_response_200
 **/
exports.v1PlayersGET = function(point,level) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "createdAt",
  "level" : "level",
  "id" : 0,
  "point" : 6,
  "username" : "username",
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
 * Inviting player 2
 * Endpoint to inviting player 2
 *
 * body Room_inviting_body 
 * returns inline_response_201
 **/
exports.v1RoomInvitingPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "masterId" : 1,
  "roundCount" : 5,
  "winnerId" : 5,
  "name" : "name",
  "id" : 0,
  "isActive" : true,
  "userId" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete Room
 * Endpoint to delete room
 *
 * getRoomId String getId Room
 * returns inline_response_200_2
 **/
exports.v1RoomroomIdDELETE = function(getRoomId) {
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
 * Create a new room
 * Endpoint to create a new room
 *
 * body RoomEntity 
 * returns inline_response_200_1
 **/
exports.v1RoomsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "createdAt",
  "data" : {
    "createdAt" : "createdAt",
    "userId" : {
      "createdAt" : "createdAt",
      "roleId" : 6,
      "id" : 0,
      "username" : "username",
      "encryptedPassword" : "encryptedPassword",
      "updatedAt" : "updatedAt"
    },
    "updatedAt" : "updatedAt"
  },
  "status" : "status",
  "updatedAt" : "updatedAt"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

