/* Connection all libraries for backend */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const history = require('connect-history-api-fallback');
const path = require('path');
const serveStatic = require('serve-static');

const app = express();
/* Main port for backend server */
const port = process.env.PORT || 5000;

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
/* Without this line reload page doesn't work */
app.use(history());
/* This line need for heroku */
app.use(serveStatic(path.join(__dirname, '..')))

/* TODO:
    Remove api routes in othe directory
*/

/* Routes */
app.post('/api/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.email}! Your user was registered! Have fun!`
    })
})

app.listen(port);
console.log('Backend worked '+ port);