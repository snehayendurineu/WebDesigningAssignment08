const mongoose = require('mongoose');
const  dotenv  = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const mongodb = mongoose.connection;
mongodb.on('error', console.error.bind(console, 'error while connecting to MongoDB:'));
mongodb.once('open', function() {
  console.log('Connected to MongoDB successfully');
});

const userSchema = mongoose.Schema( {
    fullName: {
        type: String,
        required: true,
        validate: /^[a-zA-Z]+(?:[\s.'-][a-zA-Z]+)*$/,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: /^[a-zA-Z0-9.]+@northeastern\.edu$/,
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    imagePath: {
        type: String
    }
});

const user = mongoose.model('user', userSchema);

module.exports = user;
