const mongoose = require("mongoose");
const Product = require("./models/Product"); // Убедитесь, что путь к модели правильный

// Подключение к базе данных MongoDB
mongoose
  .connect(
    "mongodb+srv://tkazdayev:viIGHWUwjjq9Fszl@cluster0.sjzyuu9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/test",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

// Моковые данные
const mockProducts = [
  {
    name: "Negr",
    image:
      "https://static.zara.net/assets/public/b44f/d92b/4b85472493ba/c815591000ed/01887450250-p/01887450250-p.jpg?ts=1705564335543&w=824",
    price: 150.0,
    category: "Shoes",
    size: "10",
    color: "Black",
  },
  {
    name: "Adidas Ultraboost 21",
    image:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/4f98e8c7a3a34d2c8c7eab8a014e2e97_9366/Ultraboost_21_Shoes_White_FY0377_01_standard.jpg",
    price: 180.0,
    category: "Shoes",
    size: "9",
    color: "White",
  },
  {
    name: "Zara Basic T-Shirt",
    image:
      "https://static.zara.net/photos///2021/V/0/2/p/3256/302/800/2/w/750/3256302800_6_1_1.jpg?ts=1619175627966",
    price: 19.99,
    category: "Clothing",
    size: "M",
    color: "Black",
  },
  {
    name: "H&M Slim Fit Jeans",
    image:
      "https://img01.ztat.net/article/spp-media-p1/1a5c7c1c8e9340d0a8b4dff6b9a7f3e8/7f5f3f8d6a4b4f6b9a8b7a5b9a7f3e8.jpg?imwidth=762",
    price: 39.99,
    category: "Clothing",
    size: "32",
    color: "Blue",
  },
  {
    name: "Nike Sportswear Club Fleece",
    image:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/2d1a8b9c-4d3a-4b9a-bb3b-5a3d3b5e5b1e/sportswear-club-fleece-mens-crew-sweatshirt-3XhG5k.png",
    price: 55.0,
    category: "Clothing",
    size: "L",
    color: "Grey",
  },
];

// Вставка моковых данных
Product.insertMany(mockProducts)
  .then(() => {
    console.log("Mock data inserted successfully");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error inserting mock data:", err.message);
  });
