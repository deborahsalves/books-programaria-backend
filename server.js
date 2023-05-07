const express = require('express');

const app = express();
const port = 3333;

const showPort = () => {
    console.log(`Server created and running on port ${port}`);
}

app.listen(port, showPort);
