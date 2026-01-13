import { Validator } from "./validators.js";

export default class Book {
    constructor(title, author, numOfChapters, numOfPages, numOfCopies, publisher) {
        if (arguments.length !== 6) {
            throw new Error("Arguments length do not match. Expected 6 arguments.");
        }

        Validator.isNonEmptyString(title, author, publisher);
        Validator.isPositiveInteger(numOfChapters, numOfPages, numOfCopies);

        this.title = title.trim();
        this.author = author.trim();
        this.numOfChapters = numOfChapters;
        this.numOfPages = numOfPages;
        this.numOfCopies = numOfCopies;
        this.publisher = publisher.trim();
    }

    toString(){
        return (`Book with the following properties: \n
            Title: ${this.title}\n
            Author: ${this.author}\n
            Number Of Chapters: ${this.numOfChapters}\n
            Number Of Copies: ${this.numOfCopies}\n
            Publisher: ${this.publisher}`);
    }

}