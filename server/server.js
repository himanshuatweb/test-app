const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect(
      //yaha par apna database ka uri dal diyo bhai.
      `mongodb+srv://HimanshuDB:1234@organicproduct.s6ohd.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

connectDB();

const userRouter = require('./routes/userRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use('/user', userRouter);

app.get('/', (req, res) => {
  res.status(200).json({ msg: 'Hello From / Route' });
});

const PORT = 5000;
app.listen(PORT, function () {
  console.log(`Server is running on PORT : ${PORT}`);
});
