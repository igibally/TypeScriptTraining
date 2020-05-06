"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myCircle = new Circle_1.Circle(10, 4, 5);
console.log(myCircle.getInfo());
var rectangle = new Rectangle_1.Rectangle(10, 10, 0, 0);
console.log(rectangle.getinfo());
var arrShapes = [];
arrShapes.push(myCircle);
arrShapes.push(rectangle);
for (var _i = 0, arrShapes_1 = arrShapes; _i < arrShapes_1.length; _i++) {
    var myShape = arrShapes_1[_i];
    console.log(myShape.getinfo());
    console.log(myShape.claculateArea());
}
