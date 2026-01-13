import { SingletonShape } from "./SingletonShape.js";

export default class Square extends SingletonShape {
    constructor(dim) {
        const C = new.target;

        // Check singleton map first
        if (Square._instances?.has?.(C)) {
            return Square._instances.get(C);
        }

        super(); // first instance

        if (!Number.isFinite(dim) || dim <= 0) {
            throw new TypeError("Side must be a positive number");
        }

        this.dim = dim;
    }

    perimeter() {
        return this.dim * 4;
    }

    area() {
        return this.dim ** 2;
    }
}
