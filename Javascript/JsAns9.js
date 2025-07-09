function Book(title, author) {
    this.title = title;
    this.author = author;
}

Book.prototype.getSummary = function () {
    return `${this.title} by ${this.author}`;
};

const book1 = new Book("1984", "George Orwell");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee");

console.log(book1.getSummary());
console.log(book2.getSummary());
