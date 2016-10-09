var fs = require('fs');
var path = require('path');

var target = path.resolve(__dirname, './models');
var output = path.resolve(__dirname, './static/models.js');

var files = [];
var isJS = /(.js)$/;

console.log('\nReading model files...');
fs.readdirSync(target).forEach(function (filename) {
  if (isJS.test(filename)) {
    files.push(target + '/' + filename);
    console.log(filename);
  }
});

var data = files.map(function (file) {
  var filepath = file.split('/');
  var name = filepath[filepath.length - 1].replace('.js', '');
  return {
    name: name,
    model: require(file)
  };
});

fs.writeFile(output, 'window.models = ' + JSON.stringify(data) + ';');
console.log('Models built to ' + output + '\n');
