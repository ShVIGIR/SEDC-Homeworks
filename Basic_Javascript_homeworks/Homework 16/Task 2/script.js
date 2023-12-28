
// Task 2
// Write a JavaScript program to display the reading status of some book. The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g.
// Already read 'The Robots of dawn' by Isaac Asimov. (if true)
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
// BONUS: ENTER THE VALUES FROM PROMPT() OR READ THEM FROM HTML


class Book {
    constructor(title, author, readingStatus) {
        this.title = title,
            this.author = author,
            this.readingStatus = readingStatus
    }
    getReadingStatus() {
        if (this.readingStatus === 'true') {
            document.write (`Already read "${this.title}" by "${this.author}".`);     //alert ili console.log za opcijata so prompt
        }
        else {
            document.write(`You still need to read "${this.title}" by "${this.author}."`);
        }
    }
}
//with prompt
// function book() {
//     let title = prompt(`Vnesete ime na knigata: `);
//     let author = prompt(`Vnesete ime na avtorot: `);
//     let readingStatus = prompt(`Dali ja imate procitano ${title}, by ${author}?`, `true/false`);
//     let book = new Book(title, author, readingStatus);
//     book.getReadingStatus();
// }
// book();



let bookBtn = document.getElementById("bookBtn");

bookBtn.addEventListener('click', function () {

    let title = document.getElementById("bookTitle").value;
    let author = document.getElementById("bookAuthor").value;
    let readingStatus = document.getElementById("readingStatus").value;
    let container = document.getElementById("container");

    let book = new Book(title, author, readingStatus);
    container.innerHTML = book.getReadingStatus();

});






