// written with AI to test/showcase the Box and Book classes
// along with their validation and functionalities.

import Box from "./Box.js";

// 1. Initialize a Box with a capacity of 3 books
const libraryBox = new Box(30, 30, 30, 3, "Polished Oak");

console.log("--- Initial State ---");
console.log(`Material: ${libraryBox.material}`);
console.log(`Total Volume: ${libraryBox.volume} cubic units`);

// 2. Add Books to the Box
try {
    console.log("\n--- Adding Books ---");
    libraryBox.addBook("The Great Gatsby", "F. Scott Fitzgerald", 9, 180, 1, "Scribner");
    libraryBox.addBook("1984", "George Orwell", 3, 328, 5, "Secker & Warburg");
    
    console.log(`Books in box: ${libraryBox.booksCount()}`);
} catch (error) {
    console.error(`Error: ${error.message}`);
}

// 3. Showcase valueOf (Adding two boxes)
const storageBox = new Box(20, 20, 20, 10, "Cardboard");
storageBox.addBook("The Hobbit", "J.R.R. Tolkien", 19, 310, 1, "Allen & Unwin");

console.log("\n--- Showcasing valueOf ---");
// This uses the valueOf() method implicitly
const totalBooksAcrossBoxes = libraryBox + storageBox;
console.log(`Total books in both boxes: ${totalBooksAcrossBoxes}`); // Expected: 3

// 4. Showcase Validation (Triggering an Error)
console.log("\n--- Testing Validation ---");
try {
    // Attempting to add a book with an invalid number of pages (-50)
    libraryBox.addBook("Ghost Book", "Anonymous", 1, -50, 1, "Phantom Press");
} catch (error) {
    console.log(`Caught expected error: ${error.message}`);
}

// 5. Final Box Report
console.log("\n--- Full Box Report ---");
console.log(libraryBox.toString());