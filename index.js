//index.js
var tools = {};

tools.string = require('./src/string/index');
tools.valid = require('./src/valid/index');
tools.array = require('./src/array/index');
tools.json = require('./src/json/index');

module.exports = tools;