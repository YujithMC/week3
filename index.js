
const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
const PORT = 8080;
const route = require('./routes/router')

mongoose.connect('mongodb+srv://bitlegion101:day7@cluster0.yofilbz.mongodb.net/database1', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Database connected');
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });

app.use('/', route);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
