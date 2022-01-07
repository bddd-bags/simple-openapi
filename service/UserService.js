'use strict';


/**
 * View biodata byId
 * Endpoint to view biodata byId
 *
 * getUserId String getId for update Biodata
 * returns BiodataEntity
 **/
exports.v1UsersidBiodataGET = function(getUserId) {
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


/**
 * Edit userBiodata
 * Endpoint to edit userBiodata
 *
 * body BiodataEntity 
 * getUserId String getId for update Biodata
 * returns BiodataEntity
 **/
exports.v1UsersidBiodataPUT = function(body,getUserId) {
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

