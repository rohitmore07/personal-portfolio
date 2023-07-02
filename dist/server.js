const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/contact-form-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define a schema for the contact form data
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

// Create a model based on the schema
const Contact = mongoose.model('Contact', contactSchema);

// Handle the form submission
app.post('/submit', (req, res) => {
  const { name, email, message } = req.body;

  // Create a new instance of the Contact model
  const newContact = new Contact({
    first-name,
    last-name,
    email,
    message,
  });

  // Save the new contact to the database
  newContact.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to save contact' });
    } else {
      res.json({ message: 'Contact saved successfully' });
    }
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
