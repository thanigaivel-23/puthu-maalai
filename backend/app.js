const express = require("express");
const dotenv = require("dotenv")
const app = express();
const path = require('path')

const cookieParser = require('cookie-parser')
const products = require("./routes/products");
const auth = require("./routes/auth");
const order = require("./routes/order");

dotenv.config({ path: path.join(__dirname, "config", ".env") });


app.use(express.json());
app.use(cookieParser());
app.use('/uploads',express.static(path.join(__dirname,'uploads')))


app.use("/api", products);
app.use("/api", auth);
app.use("/api", order);

// if(process.env.NODE_ENV == "production"){
//     app.use(express.static(path.join(__dirname,'../front-end/create-react/build')))
//     app.get('*',(req,res)=>{
//         res.sendFile(path.resolve(__dirname,'../front-end/create-react/build/index.html'))
//     })
// }

app.use(require('./middleware/error'));

module.exports = app;
