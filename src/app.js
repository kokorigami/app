
var KokorigamiViewer = require('kokorigami-viewer');

var el = document.createElement('div');
var viewer = new KokorigamiViewer();
var actionBar = new KokorigamiViewer.ActionBar(viewer);

var data = {
  selected: 0,
  models: window.models,
  textures: [null, null],
  background: [200, 200, 200, 255],
};

function start() {
  KokorigamiViewer.style();
  document.body.appendChild(el);
  el.classList.add('app');
  el.appendChild(viewer.el);
  el.appendChild(actionBar.el);

  viewer.model = data.models[0].model;
  viewer.render();
}

function render(data) {
  viewer.model = data.models[data.selected].model;
  viewer.textures = data.textures;
  viewer.background = data.background;
}

start();
render(data);
