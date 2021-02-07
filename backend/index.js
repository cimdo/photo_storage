const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const expressMinio = require('express-middleware-minio')
const minioMiddleware = expressMinio.middleware();


app.post('/uploadImages', minioMiddleware({op: expressMinio.Ops.post}), (req, res) => {
    
    if (req.minio.error) {
      console.log(req.minio.error)
      res.status(400).json({ error: req.minio.error })
    } else {
      res.send({ filename: req.minio.post.filename })
    }
  })

app.get('/ping', (req, res)=> {
    res.send({
        data: 'pong'
    })
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=> {
    console.log(`Server listens on ${PORT}`);
})