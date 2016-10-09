
var Kokorigami = require('kokorigami');
var Animation = Kokorigami.Animation;
var publish = Kokorigami.publish;

var heart = new Animation(6, 0.01)
      .basic([0,0,0], [1,1,0]).fold()
      .undo()
      .basic([1,0,0], [0,1,0]).fold()
      .undo()
      .basic([1,0.5,0], [0.5,1,0]).fold()
      .basic([0,0.75,0], [0.75,0,0]).fold()
      .basic([0.375,0.375,0], [1,0.375,0]).fold()
      .basic([0.375,1,0], [0.375,0.375,0]).fold()
      .basic([0.5,1,0],[0,0.5,0],[-1,0]).fold()
      .basic([0.5,0,0],[1,0.5,0],[-1,0]).fold()
      .basic([1.05,0.6,0],[0.6,1.05,0],[-1,0]).fold();

module.exports = publish(heart);
