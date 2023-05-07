const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const cors = require('cors');

require('./models/User');
require('./models/Blog');
require('./services/passport');
require('./services/cache');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(cors());

app.use(bodyParser.json({ limit: "25mb" }));
app.use(bodyParser.urlencoded({
  extended: true,
  limit: "25mb"
}));
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use((req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
})

require('./routes/authRoutes')(app);
require('./routes/blogRoutes')(app);
require('./routes/uploadRoutes')(app);

if (['production','ci'].includes(process.env.NODE_ENV)) {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});
