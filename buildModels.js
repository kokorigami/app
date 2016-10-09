var fs = require('fs');
var path = require('path');

var target = path.resolve(__dirname, './models');
var output = path.resolve(__dirname, './static/models.js');

if (process.argv[2]) {
  target = path.resolve(process.cwd(), process.argv[2]);
}

var files = [];
if (fs.lstatSync(target).isDirectory()) {
  files = fs.readdirSync(target).map(function (filename) {
    return target + '/' + filename;
  });
} else {
  files.push(target);
}

var data = files.map(function (file) {
  var filepath = file.split('/');
  var name = filepath[filepath.length - 1].replace('.js', '');
  return {
    name: name,
    model: require(file)
  };
});

fs.writeFile(output, 'window.models = ' + JSON.stringify(data) + ';');
