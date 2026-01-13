import { Shape } from "./Shape.js";

export class SingletonShape extends Shape {
    static _instances = new Map();

    constructor() {
        const C = new.target;

        // Return existing instance if it exists
        if (SingletonShape._instances.has(C)) {
            return SingletonShape._instances.get(C);
        }

        super(); // first-time creation
        SingletonShape._instances.set(C, this);
    }
}
