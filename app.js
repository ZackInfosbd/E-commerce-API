require('dotenv').config();
require('express-async-errors');

// express
const express = require('express');
const app = express();

// rest of the packages
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');

// database
const connectDB = require('./db/connect');

// routers
const authRoute = require('./routes/authRoute');
const userRoute = require('./routes/userRoute');
const productRoute = require('./routes/productRoute');
const reviewRoute = require('./routes/reviewsRoute');

// middlewares
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(morgan('tiny'));
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));
app.use(express.static('./public'));
app.use(fileUpload());

app.get('/', (req, res) => {
  res.send('e-commerce api');
});

app.get('/api/v1', (req, res) => {
  // console.log(req.cookies);
  console.log(req.signedCookies);
  res.send('e-commerce api cookie check');
});

app.use('/api/v1/auth', authRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/products', productRoute);
app.use('/api/v1/reviews', reviewRoute);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`🚀 Server is running on port : ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
