const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

const dbURI = process.env.MONGODB_URI;

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error(err));

const products = [
    {
        name: "Черная футболка",
        image: "/images/black_tshirt.jpeg",
        price: 12000,
        category: "Мужская одежда",
        size: "M",
        color: "Черный"
    },
    {
        name: "Белая футболка",
        image: "/images/white_tshirt.jpeg",
        price: 11000,
        category: "Женская одежда",
        size: "S",
        color: "Белый"
    },
    {
        name: "Джинсы",
        image: "/images/jeans.jpeg",
        price: 25000,
        category: "Мужская одежда",
        size: "L",
        color: "Синий"
    },
    {
        name: "Платье",
        image: "/images/dress.jpeg",
        price: 32000,
        category: "Женская одежда",
        size: "M",
        color: "Красный"
    }
];

Product.insertMany(products)
.then(() => {
    console.log("Data inserted");
    mongoose.connection.close();
})
.catch(err => {
    console.error(err);
    mongoose.connection.close();
});
