const express = require('express');
const router = express.Router();

const app = express();
const port = 3333;

const books = [
    {
        title: 'Game of Thrones',
        author: 'R. R. Martin',
        editor: 'IDK',
        coverUrl: ''
    },
    {
        title: 'Percy Jackson and the Lightning Thief',
        author: 'Rick Riordan',
        editor: 'IDK',
        coverUrl: ''
    }
]

const showBooks = (request, response) => {
    response.json(books);
}
const showPort = () => {
    console.log(`Server created and running on port ${port}`);
}

app.use(router.get('/books', showBooks));
app.listen(port, showPort);
