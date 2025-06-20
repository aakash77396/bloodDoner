require('dotenv').config(); 
const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5050;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

//routes
app.use('/api/doner',require("./routes/bloodDoner"));
app.use('/api',require("./routes/bloodDoner"));



app.listen(PORT,()=>{
    console.log(`Server is running on port : ${PORT} `)
})