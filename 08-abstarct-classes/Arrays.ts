import {Circle} from './Circle';
import {Shape} from './Shape';
import {Rectangle} from './Rectangle';



let myCircle= new Circle(10,4,5);
console.log(myCircle.getInfo());
let rectangle= new Rectangle(10,10,0,0);
console.log(rectangle.getinfo());
let arrShapes:Shape[]=[];

arrShapes.push(myCircle);
arrShapes.push(rectangle);

for(let myShape of arrShapes)
    {
        console.log(myShape.getinfo());
        console.log(myShape.claculateArea());
    }





