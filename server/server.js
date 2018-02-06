const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const history = require('connect-history-api-fallback');
const path = require('path');
const serveStatic = require('serve-static');

const app = express();
const port = process.env.PORT || 1488;

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
app.use(history());
app.use(serveStatic(path.join(__dirname, '..')))


app.post('/api/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.email}! Your user was registered! Have fun!`
    })
})

app.listen(port);
console.log('Backend worked '+ port);