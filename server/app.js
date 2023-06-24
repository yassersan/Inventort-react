var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { v4: uuid } = require('uuid');
var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/users', usersRouter);


let items = [
    // Example item data
    {
      id: uuid(),
      itemName: 'Item 1',
      description: 'Description for Item 1',
      price: 10,
      image: 'item1.jpg',
    },
    {
      id: uuid(),
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
    const item = {id: uuid(), itemName: req.body.itemName, description: req.body.description, price: req.body.price, image: req.body.image};
    items.push(item);
    return res.send(item);
  });

  app.delete('/api/items/:itemID', (req, res) => {
    const itemID = req.params.itemID;
  
    const foundItem= items.find((item) => item.id === itemID);

    const index = items.indexOf(foundItem)
    items.splice(index, 1)
    // if (foundItemIndex === -1) {
    //   return res.status(404).json({ message: 'not here' });
    // }
  
    // items.filter((item) => item.id !== itemID)
  
    // Send a success message or the updated list of items
    res.json({ message: 'Item deleted successfully'});
  });
  

  app.patch('/api/items/:itemID', (req, res) => {
    const itemID = req.params.itemID;
    const foundItem = items.find((item) => item.id === itemID);
  
    if (!foundItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
  
    foundItem.price = req.body.price; // Assuming the request body contains the new price as "newPrice"
    res.json(foundItem);
  });
  


module.exports = app;
