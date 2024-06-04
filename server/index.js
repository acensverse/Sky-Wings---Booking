const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/User.js');
const app = express();

app.use(express.json());

const allowedOrigins = ['https://sky-wings-booking.vercel.app']; // Add the domain where your React app is hosted
app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    // Check if the origin is allowed
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = `This site is not allowed to access the resource`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

mongoose.connect("mongodb+srv://Ace:Ace123@cluster0.y5dyrlw.mongodb.net/user", {
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(err => {
  console.error('Error connecting to MongoDB', err);
});

app.post('/Signup', (req, res) => {
  const {email} = req.body
  UserModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json({ error: err.message }));
});


app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
