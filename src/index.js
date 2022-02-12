const express = require('express');
const mongoose = require('mongoose');

const userRoute = require('./routes/user');

mongoose.connect(process.env.MONGO_URI);

const app = express();
app.use(express.json());

app.use(userRoute);

app.listen(process.env.PORT, () => console.log(`Listening on port: ${process.env.PORT}`));