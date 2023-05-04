const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  displayName: String,
  email: String,
  photoUrl: String
},
{
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

mongoose.model('User', userSchema);
