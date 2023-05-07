const keys = require('../config/keys');
const requireLogin = require('../middlewares/requireLogin');
var cloudinary = require("cloudinary").v2;


cloudinary.config({
  cloud_name: keys.cloud_name,
  api_key: keys.api_key,
  api_secret: keys.api_secret,
});

const opts = {
  overwrite: true,
  invalidate: true,
  resource_type: "auto",
  folder: "blogfeed"
};

const uploadImage = (image) => {
    //imgage = > base64
    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload(image, opts, (error, result) => {
        if (result && result.secure_url) {
          console.log(result.secure_url);
          return resolve(result.secure_url);
        }
        console.log(error.message);
        return reject({ message: error.message });
      });
    });
  };


module.exports = (app) => {
  app.post("/api/uploadImage", requireLogin, (req, res) => {
    uploadImage(req.body.image)
      .then((url) => res.send(url))
      .catch((err) => res.status(500).send(err));
  });
};