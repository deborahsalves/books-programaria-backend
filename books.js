const express = require('express');
const router = express.Router();
const cors = require('cors');

const dbConnect = require('./booksDatabase');
dbConnect();

const Book = require('./bookModel');

const app = express();
app.use(express.json());
app.use(cors());
const port = 3333;

const showBooks = async (request, response) => {
    try {
        const booksFromDb = await Book.find();
        response.json(booksFromDb);
    } catch (err) {
        console.log(err);
    }
}

const createBook = async (request, response) => {
    const newBook = new Book({
        title: request.body.title,
        author: request.body.author,
        editor: request.body.editor,
        coverUrl: request.body.coverUrl
    });

    try {
        const createdBook = await newBook.save()
        response.status(201).json(createdBook);

    } catch (err) {
        console.log(err)
    }

}

const updateBook = async (request, response) => {
    try {
        const currentBook = await Book.findById(request.params.id);
    
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
    
        const updatedBook = await currentBook.save();
        response.json(updatedBook);
    } catch (err) {
        console.log(err)
    }
}

const deleteBook = async (request, response) => {
    try {
        await Book.findByIdAndDelete(request.params.id);
        response.json({ message: 'Book successfully deleted'})
    } catch (err) {
        console.log(err);
    }
}

const showPort = () => {
    console.log(`Server created and running on port ${port}`);
}

app.use(router.get('/books', showBooks));
app.use(router.post('/books', createBook));
app.use(router.patch('/books/:id', updateBook));
app.use(router.delete('/books/:id', deleteBook));
app.listen(port, showPort);
