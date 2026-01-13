import { SingletonShape } from "./SingletonShape.js";

export default class Rectangle extends SingletonShape {
    constructor(length, width) {
        const C = new.target;

        if (Rectangle._instances?.has?.(C)) {
            return Rectangle._instances.get(C);
        }

        super(); // first instance

        if (!Number.isFinite(length) || length <= 0) {
            throw new TypeError("Length must be a positive number");
        }

        if (!Number.isFinite(width) || width <= 0) {
            throw new TypeError("Width must be a positive number");
        }

        this.length = length;
        this.width = width;
    }

    perimeter() {
        return 2 * (this.length + this.width);
    }

    area() {
        return this.length * this.width;
    }
}
