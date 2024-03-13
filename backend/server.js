const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const { dbConnect } = require('./utils/db');
const authRoutes = require('./routes/authRoutes');

require('dotenv').config();
const app = express();

const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: ['http://localhost:5173'],
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/api', authRoutes);

app.get('/', (req, res) => res.send('Hello world'));

dbConnect();
app.listen(port, (req, res) => console.log(`App listening on PORT ${port}`));
