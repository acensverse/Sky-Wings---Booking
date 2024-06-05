const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/User');
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://Ace:Ace123@cluster0.y5dyrlw.mongodb.net/user", {})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(err => {
  console.error('Error connecting to MongoDB', err);
});

app.post('/Signup', async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'email is not defined' });
  }
  try {
    const existingUser = await UserModel.findOne({ email })
    if (existingUser) {
      res.json({message: "Email Already exists", user: existingUser})
    } else {
      const newUser = await UserModel.create(req.body);
      res.json(newUser);
    }
  } catch (err) {
    res.json({ error: err.message });
  }
});

app.post('/Login', async (req, res) => {
  const { email, pass } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user && user.pass === pass) {
      res.json("Success");
    } else {
      res.json("The Password is incorrect");
    }
  } catch (err) {
    res.json({ error: "User not found" });
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
