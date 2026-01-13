import Book from "./Book.js";
import { Validator } from "./validators.js";

export default class Box {
    volume;
    listOfBooks = [];

    constructor(length, width, height, capacity, material) {
        if (arguments.length !== 5) {
            throw new Error("Arguments length do not match. Expected 5 arguments.");
        }

        Validator.isNonEmptyString(material);
        Validator.isNumber(length, width, height);
        Validator.isPositiveInteger(capacity);

        this.length = length;
        this.width = width;
        this.height = height;
        this.volume = length * width * height;
        this.capacity = capacity;
        this.material = material;
    }

    booksCount() {
        return this.listOfBooks.length;
    }

    addBook(title, author, numOfChapters, numOfPages, numOfCopies, publisher) {
        if (this.booksCount() === this.capacity) {
            throw new Error("Box is full");
        }
        let book = new Book(title, author, numOfChapters, numOfPages, numOfCopies, publisher);
        this.listOfBooks.push(book);
    }

    removeBook(title) {
        Validator.isNonEmptyString(title);
        
        if (this.booksCount() === 0) {
            throw new Error("Box is empty");
        }

        const oldLength = this.listOfBooks.length;
        this.listOfBooks = this.listOfBooks.filter(b => b.title !== title);
        
        if (oldLength === this.listOfBooks.length) {
            throw new Error(`Book with title "${title}" not found in the box.`);
        }
    }

    toString() {
        let booksInfo = this.listOfBooks.map(book => book.toString()).join('\n---\n');
        return `Box Info:
Dimensions: ${this.length}x${this.width}x${this.height} (Vol: ${this.volume})
Material: ${this.material}
Capacity: ${this.booksCount()}/${this.capacity}
Books List:
${booksInfo}`;
    }
    
    valueOf() {
        return this.booksCount();
    }
}