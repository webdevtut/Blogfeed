const mongoose = require('mongoose');
const { Schema } = mongoose;


const blogSchema = new Schema({
  title: String,
  content: String,
  createdAt: { type: Date, default: Date.now },
  blogType: {
    type: String,
    enum: ['private', 'public'],
    default: 'private',
  },
  _user: { type: Schema.ObjectId, ref: 'User' }
},
{
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

blogSchema.pre(/^find/, function (next) {
  this.populate({
    path: '_user',
    select: 'photoUrl'
  });
  next();
  });


mongoose.model('Blog', blogSchema);
