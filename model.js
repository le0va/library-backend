const pool = require("./database");

class AuthorsModel {
    static getAllAuthors = async () => {
        return await pool.query('SELECT * FROM authors');
    }
    static getAuthor = async (name) => {
        return await pool.query('SELECT * FROM authors WHERE name=$1', [name]);
    }
    static createAuthor = async (name) => {
        return await pool.query('INSERT INTO authors (name) VALUES ($1)', [name]);
    }
    static updateAuthor = async (oldName, newName) => {
        return await pool.query('UPDATE authors SET name = $1 WHERE name = $2', [newName, oldName]);
    }
    static deleteAuthor = async (name) => {
        return await pool.query('DELETE FROM authors WHERE name = $1', [name]);
    }
}

class BooksModel {
    static getAllBooks = async () => {
        return await pool.query('SELECT * FROM books');
    }
    static getBookByName = async (name) => {
        return await pool.query('SELECT * FROM books WHERE name = $1', [name]);
    }
    static createBook = async (name, genre, authorId) => {
        return await pool.query('INSERT INTO books (name, genre, author_id) VALUES ($1, $2, $3)', [name, genre, authorId]);
    }
    static updateBook = async (oldName, newName, newGenre, newAuthorId) => {
        return await pool.query('UPDATE books SET name = $1, genre = $2, author_id = $3 WHERE name = $4', [newName, newGenre, newAuthorId, oldName]);
    }
    static deleteBook = async (name) => {
        return await pool.query('DELETE FROM books WHERE name = $1', [name]);
    }
}

class ReadersModel {
    static getAllReaders = async () => {
        return await pool.query('SELECT * FROM readers');
    }
    static getReaderByName = async (name) => {
        return await pool.query('SELECT * FROM readers WHERE name = $1', [name]);
    }
    static createReader = async (name, phone, address) => {
        return await pool.query('INSERT INTO readers (name, phone, address) VALUES ($1, $2, $3)', [name, phone, address]);
    }
    static updateReader = async (oldName, newName, newPhone, newAddress) => {
        return await pool.query('UPDATE readers SET name = $1, phone = $2, address = $3 WHERE name = $4', [newName, newPhone, newAddress, oldName]);
    }
    static deleteReader = async (name) => {
        return await pool.query('DELETE FROM readers WHERE name = $1', [name]);
    }
}

class SubscriptionsModel {
    static getAllSubscriptions = async () => {
        return await pool.query('SELECT * FROM subscriptions');
    }
    static getSubscriptionById = async (id) => {
        return await pool.query('SELECT * FROM subscriptions WHERE subscription_id = $1', [id]);
    }
    static createSubscription = async (issueDate, delayDate, readerId) => {
        return await pool.query('INSERT INTO subscriptions (issue_date, delay_date, reader_id) VALUES ($1, $2, $3)', [issueDate, delayDate, readerId]);
    }
    static updateSubscription = async (id, newDelayDate) => {
        return await pool.query('UPDATE subscriptions SET delay_date = $1 WHERE subscription_id = $2', [newDelayDate, id]);
    }
    static deleteSubscription = async (id) => {
        return await pool.query('DELETE FROM subscriptions WHERE subscription_id = $1', [id]);
    }
}

class BorrowedModel {
    static getAllBorrowed = async () => {
        return await pool.query('SELECT * FROM borrowed');
    }
    static getBorrowedById = async (readerId, bookId) => {
        return await pool.query('SELECT * FROM borrowed WHERE reader_id = $1 AND book_id = $2', [readerId, bookId]);
    }
    static createBorrowed = async (readerId, bookId, borrowDate, returnDate) => {
        return await pool.query('INSERT INTO borrowed (reader_id, book_id, borrow_date, return_date) VALUES ($1, $2, $3, $4)', [readerId, bookId, borrowDate, returnDate]);
    }
    static updateBorrowed = async (bookId, newReturnDate) => {
        return await pool.query('UPDATE borrowed SET return_date = $1 WHERE book_id = $2', [newReturnDate, bookId]);
    }
    static deleteBorrowed = async (bookId) => {
        return await pool.query('DELETE FROM borrowed WHERE book_id = $1', [bookId]);
    }
}



module.exports.AuthorsModel = AuthorsModel;
module.exports.BooksModel = BooksModel;
module.exports.ReadersModel = ReadersModel;
module.exports.SubscriptionsModel = SubscriptionsModel;
module.exports.BorrowedModel = BorrowedModel;