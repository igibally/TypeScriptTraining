import {Circle} from './Circle';
import {Shape} from './Shape';
import {Rectangle} from './Rectangle';

let myShape= new Shape(5,5);
console.log(myShape.getinfo());
let myCircle= new Circle(10,4,5);
console.log(myCircle.getInfo());
let rectangle= new Rectangle(10,10,0,0);
console.log(rectangle.getinfo());


