const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = () => {
    return new User({}).save(); // Will not work here as it it in test environment and DATABASE is not connected in Test env
};