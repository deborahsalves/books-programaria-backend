const express = require('express');
const router = express.Router();

const app = express();
const port = 3333;

const showBook = (request, response) => {
    const book = {
        title: 'Game of Thrones',
        author: 'R. R. Martin',
        editor: 'IDK',
        coverUrl: ''
    }
    response.json(book);
}
const showPort = () => {
    console.log(`Server created and running on port ${port}`);
}

app.use(router.get('/book', showBook));
app.listen(port, showPort);
