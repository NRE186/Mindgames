/* Connection all libraries for backend */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const history = require('connect-history-api-fallback');
const path = require('path');
const serveStatic = require('serve-static');
const config = require('./config/config');

const app = express();
/* Main port for backend server */
const port = process.env.PORT || config.port;

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
/* Without this line reload page doesn't work */
app.use(history());
/* This line need for heroku */
app.use(serveStatic(path.join(__dirname, '..')))


/* Routes */
app.get('/auth', (req, res) => {
    console.log('/posts working')
    res.send(
      [{
        title: "Hello World!",
        description: "Hi there! How are you?"
      }]
    )
  })


  app.listen(process.env.PORT || config.port,
    () => console.log(`Server start on port ${config.port} ...`))