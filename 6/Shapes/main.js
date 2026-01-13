import Circle from "./Circle.js";
import Rectangle from "./Rectangle.js";
import Square from "./Square.js";

const circle1 = new Circle(23);
console.log(circle1.toString());
const circle2 = new Circle(10);

console.log(circle2.toString());

const rec1 = new Rectangle(4, 10);
console.log(rec1.toString());

const rec2 = new Rectangle(5, 20);
console.log(rec2.toString());

const square1 = new Square(2);
console.log(square1.toString());

const square2 = new Square(5);
console.log(square2.toString());