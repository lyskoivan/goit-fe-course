"use strict";

var uuidv1 = require('uuid/v1');

var shortid = require('shortid');

var sId = shortid.generate();
var id = uuidv1();

var generateId = function generateId() {
  console.log(id);
  console.log(sId);
};

generateId();