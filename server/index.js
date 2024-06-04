const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/User.js');
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://Ace:Ace123@cluster0.y5dyrlw.mongodb.net/user", {
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(err => {
  console.error('Error connecting to MongoDB', err);
});

app.post('/Signup', (req, res) => {
  res.send("Working")
  UserModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json({ error: err.message }));
});


app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
