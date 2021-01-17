const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=> {
    console.log(`Server listens on ${PORT}`);
})