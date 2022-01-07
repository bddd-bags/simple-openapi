'use strict';


/**
 * Login to get access token
 * Endpoint to get accessToken
 *
 * body UserEntity 
 * returns UserEntity
 **/
exports.v1LoginPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "createdAt",
  "roleId" : 6,
  "id" : 0,
  "username" : "username",
  "encryptedPassword" : "encryptedPassword",
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
 * Create new account
 * Endpoint to create Account
 *
 * body UserEntity 
 * returns UserEntity
 **/
exports.v1RegisterPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "createdAt",
  "roleId" : 6,
  "id" : 0,
  "username" : "username",
  "encryptedPassword" : "encryptedPassword",
  "updatedAt" : "updatedAt"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

