const express = require('express');
const router = express.Router();

const app = express();
app.use(express.json());
const port = 3333;

const books = [
    {
        id: "1",
        title: 'Game of Thrones',
        author: 'R. R. Martin',
        editor: 'IDK',
        coverUrl: ''
    },
    {
        id: "2",
        title: 'Percy Jackson and the Lightning Thief',
        author: 'Rick Riordan',
        editor: 'IDK',
        coverUrl: ''
    }
]

const showBooks = (request, response) => {
    response.json(books);
}

const createBook = (request, response) => {
    const newBook = {
        id: request.body.id,
        title: request.body.title,
        author: request.body.author,
        editor: request.body.editor,
        coverUrl: request.body.editor
    }

    books.push(newBook);

    response.json(books);
}

const editBook = (request, response) => {
    const findBook = (book) => {
        if (book.id === request.params.id){
            return book;
        }
    }

    const currentBook = books.find(findBook);

    if(request.body.title) {
        currentBook.title = request.body.title;
    }
    if(request.body.author) {
        currentBook.author = request.body.author;
    }
    if(request.body.editor) {
        currentBook.editor = request.body.editor;
    }
    if(request.body.coverUrl) {
        currentBook.coverUrl = request.body.coverUrl;
    }

    response.json(books);
}

const deleteBook = (request, response) => {
    const allButBookToDelete = (book) => {
        if (book.id !== request.params.id){
            return book; 
        }
    }

    const booksToKeep = books.filter(allButBookToDelete);

    response.json(booksToKeep);
}

const showPort = () => {
    console.log(`Server created and running on port ${port}`);
}

app.use(router.get('/books', showBooks));
app.use(router.post('/books', createBook));
app.use(router.patch('/books/:id', editBook));
app.use(router.delete('/books/:id', deleteBook));
app.listen(port, showPort);
