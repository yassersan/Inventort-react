var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
const mongoose = require('mongoose')
const { error } = require('console');
const Item = require('./models/itemsModel')

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

const corsOptions = {
  origin: "https://inventory-manager-front-end.onrender.com", // frontend URI (ReactJS)
}

app.use(cors(corsOptions));

mongoose.connect('mongodb+srv://m001-student:m001-mongodb-basics@sandbox.cwczcnp.mongodb.net/Items?retryWrites=true&w=majority')
.then(() => {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
      console.log(`App is Listening on PORT ${PORT}`);
  })
  console.log("conntected to db")
}).catch((error) => {
  console.log(error)
})


  
  app.get('/api/items', async (req, res) => {
    try {
      const items = await Item.find({});
      res.status(200).json(items)
    } catch (error) {
      res.status(500).json({message: error.message})
    }
  });

  app.post('/api/items/add', async (req, res) => {
    // const item = {id: uuid(), itemName: req.body.itemName, description: req.body.description, price: req.body.price, image: req.body.image};
    // items.push(item);
    try {
      const item = await Item.create(req.body)
      res.status(200).json(item)
    } catch (error) {
      console.log(error.message)
      res.status(500).json({message: error.message})
    }
    
  });

  app.delete('/api/items/:name', async (req, res) => {
    try {
     const name = req.params.name
    
     const item = await Item.deleteOne({itemName: name})
   
     if(!item){
       return res.status(404).json({message: "can not find specified item"});
     }
     res.status(200).json(item);
    } catch (error) {
     res.status(500).json({message: error.message})
    }
   });
  

   app.patch('/api/edit/:itemID', async (req, res) => {
    const itemID = req.params.itemID;
    try {
      const item = await Item.find({itemName: itemID});
      if (!item) {
        return res.status(404).json({ message: 'Item not found' });
      }
      item.quantity += 1;
      // await item.save()
      res.status(200).json(item);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  app.patch('/api/items/:itemID/decreaseQuantity', async (req, res) => {
    const itemID = req.params.itemID;
    try {
      const item = await Item.find(itemID);
      if (!item) {
        return res.status(404).json({ message: 'Item not found' });
      }
      item.quantity -= 1;
      await item.save();
      res.status(200).json(item);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  


module.exports = app;