const mongoose = require('mongoose');
const { Schema } = mongoose;


const blogSchema = new Schema({
  title: String,
  content: String,
  description: String,
  imageUrl: String,
  createdAt: { type: Date, default: Date.now },
  blogType: {
    type: String,
    enum: ['private', 'public'],
    default: 'private',
  },
  likes: [
    {
      type: mongoose.Schema.ObjectId,
      ref : 'User',
      unique: true
    }
  ],
  _user: { type: Schema.ObjectId, ref: 'User' },
},
{
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

blogSchema.virtual('likesCount').get(function () {
  return this.likes.length
});

blogSchema.pre(/^find/, function (next) {
  this.populate({
    path: '_user',
    select: 'displayName photoUrl'
  });
  next();
  });


mongoose.model('Blog', blogSchema);
