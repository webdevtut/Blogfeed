const mongoose = require("mongoose");
const redis = require("redis");
const util = require('util');
const redisUrl = "redis://127.0.0.1:6379";
const client = redis.createClient(redisUrl);
client.get = util.promisify(client.get);

const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.exec = function () {
  console.log("I am about to run Query");
//   console.log(this.getQuery()); // Query information (Query Params: find, where, _id, aggregate, group etc)
//   console.log(this.mongooseCollection.name);// Collection (Model) name : Users / Blogs

// Creating Unique key for Unique Queries
  const key = Object.assign({}, this.getQuery(), {
    collection: this.mongooseCollection.name
  });

  console.log(key);
  return exec.apply(this, arguments);
};