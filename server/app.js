var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


let items = [
    // Example item data
    {
      id: '1',
      itemName: 'Item 1',
      description: 'Description for Item 1',
      price: 10,
      image: 'item1.jpg',
    },
    {
      id: '2',
      itemName: 'Item 2',
      description: 'Description for Item 2',
      price: 15,
      image: 'item2.jpg',
    },
  ];
  
  app.get('/api/items', (req, res) => {
    res.json(items);
  });

  app.post('/api/items', (req, res) => {
    items.push(req.body);
    res.send(items);
  });


module.exports = app;
