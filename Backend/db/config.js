const mongoose = require("mongoose");
// Middleware
const MONGO_URI = 'mongodb+srv://devendraajsheth:RE5vEmfVLIW6wV1c@book-store.yk6ka.mongodb.net/?retryWrites=true&w=majority&appName=Book-Store'
// Connect to MongoDB using the connection string
mongoose.connect(MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
}).then(() => {
  console.log(`Connection successful`);
}).catch((e) => {
  console.log(`No connection: ${e}`);
});

// mongodb://localhost:27017 



// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/BookStore', {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// });
