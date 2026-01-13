export class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new Error("Abstract class can't be instantiated");
        }
        const C = this.constructor;
        C.count = (C.count ?? 0) + 1;
    }

    perimeter() {
        throw new Error("Must implement perimeter()")
    }

    area() {
        throw new Error("Must implement area()");
    }

    get count(){
        return this.constructor.count;
    }

    toString() {
    return `${this.constructor.name} (instances: ${this.count}) \n Area: ${this.area()}, Perimeter: ${this.perimeter()}`;
    }
}
