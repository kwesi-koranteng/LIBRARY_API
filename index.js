const express = require('express');
const server = express();
const fs = require('fs');
const PORT = 5000;


server.use(express.json()); // Middleware to parse JSON


// Logging middleware
server.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});


// Read books data from file
const getBooks = () => {
    return JSON.parse(fs.readFileSync('books.json', 'utf8'));
};


// Write books data to file
const saveBooks = (books) => {
    fs.writeFileSync('books.json', JSON.stringify(books, null, 2));
};

// GET all books
server.get('/books', (req, res) => {
    res.json(getBooks());
});

// GET a book by ID
server.get('/books/:id', (req, res) => {
    const books = getBooks();
    const book = books.find(b => b.id === req.params.id);
    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});


// POST a new book
server.post('/books', (req, res) => {
    const { id, title, author, year } = req.body;
    if (!id || !title || !author || !year) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    const books = getBooks();
    books.push({ id, title, author, year });
    saveBooks(books);
    res.status(201).json({ message: 'Book added successfully' });
});


// PUT (update) a book
server.put('/books/:id', (req, res) => {
    const { title, author, year } = req.body;
    if (!title || !author || !year) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    let books = getBooks();
    const index = books.findIndex(b => b.id === req.params.id);
    if (index === -1) {
        return res.status(404).json({ message: 'Book not found' });
    }
    books[index] = { id: req.params.id, title, author, year };
    saveBooks(books);
    res.json({ message: 'Book updated successfully' });
});


// DELETE a book
server.delete('/books/:id', (req, res) => {
    let books = getBooks();
    books = books.filter(b => b.id !== req.params.id);
    saveBooks(books);
    res.json({ message: 'Book deleted successfully' });
});


server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
