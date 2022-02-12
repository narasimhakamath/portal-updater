const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI);

const app = express();
app.use(express.json());

app.listen(process.env.PORT, () => console.log(`Listening on port: ${process.env.PORT}`));