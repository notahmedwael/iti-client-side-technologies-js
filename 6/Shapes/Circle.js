import { Shape } from "./Shape.js";

export default class Circle extends Shape{
    constructor(radius){
        super();

        if (!Number.isFinite(radius) || radius <= 0) {
            throw new TypeError("Radius must be a positive number");
        }

        this.radius = radius;
    }

    perimeter(){
        return (2 * Math.PI * this.radius);
    }

    area(){
        return (Math.PI * (this.radius ** 2))
    }
}