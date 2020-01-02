let mongoose = require("mongoose");

const username = 'alyates123';
const password = 'alyates123';

const uri = `mongodb+srv://${username}:${password}@rest-api01-ffgat.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.connect(uri);

let CustomerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    require: true,
    unique: true
  }
});

module.exports = mongoose.model('Customer', CustomerSchema)