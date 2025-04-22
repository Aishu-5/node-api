const express = require('express');
const app = express()
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route');
const userRoute = require('./routes/user.route');
const dotenv = require('dotenv');

dotenv.config();

//middlewear to convert to json
app.use(express.json());

//Test api
app.get('/testapi', (req, res) => {
  res.send('Hello Worlddddd')
})
//port number 3000
app.listen(3000);

//routes
app.use('/api/products',productRoute);
app.use('/api/users',userRoute);


//mongodb connection
mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => console.log('Connected!'))
  .catch((error) => console.log('Connection error',error))