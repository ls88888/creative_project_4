const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/cp4', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


// Configure multer so that it will upload to '../front-end/public/images'
const multer = require('multer')
const upload = multer({
    dest: '../front-end/public/images/',
    limits: {
        fileSize: 10000000
    }
});

// Create a scheme for items in the museum: a title and a path to an image.
const itemSchema = new mongoose.Schema({
    title: String,
    path: String,
    price: Number,
    quantity: Number,
});

// Create a model for items in the museum.
const Item = mongoose.model('Item', itemSchema);

// Upload a photo. Uses the multer middleware for the upload and then returns
// the path where the photo is stored in the file system.
app.post('/api/photos', upload.single('photo'), async (req, res) => {
    console.log("post/api/photos");
    // Just a safety check
    if (!req.file) {
        return res.sendStatus(400);
    }
    res.send({
        path: "/images/" + req.file.filename
    });
});

// Create a new item in the store: takes a title and a path to an image.
app.post('/api/items', async (req, res) => {
    console.log("post/api/items");
    const item = new Item({
        title: req.body.title,
        path: req.body.path,
        price: req.body.price,
        quantity: req.body.quantity,
    });
    try {
        await item.save();
        res.send(item);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// Get a list of all of the items in the store.
app.get('/api/items', async (req, res) => {
    console.log("get/api/items");
    try {
        let items = await Item.find();
        res.send(items);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.delete('/api/items/:id', async (req, res) => {
    console.log("delete/api/items");
    try {
        await Item.deleteOne({
            _id: req.params.id
        });
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.put('/api/items/:id', async (req, res) => {
    console.log("put/api/items");
    try {
        let item = await Item.findOne({
            _id: req.params.id
        });
        item.title = req.body.title;
        item.price = req.body.price;
        item.quantity = req.body.quantity;
        await item.save();
        res.send(item);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});



app.listen(3000, () => console.log('Server listening on port 3000!'));
