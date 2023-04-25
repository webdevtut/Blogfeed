const mongoose = require("mongoose");
const redis = require("redis");
const util = require('util');
const redisUrl = "redis://127.0.0.1:6379";
const client = redis.createClient(redisUrl);
client.hget = util.promisify(client.hget);

const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.cache = function (options = {}) {
  this.useCache = true;
  this.hashKey = JSON.stringify(options.key || '');
  return this; // required for creating chain function
}

mongoose.Query.prototype.exec = async function () {

  if(!this.useCache) {
    console.log("uncached Query", this.getQuery(),"Collection:", this.mongooseCollection.name);
    return exec.apply(this, arguments);
  }

  const key = JSON.stringify(Object.assign({}, this.getQuery(), {
    collection: this.mongooseCollection.name
  }));

  // See if we have value for 'key' in redis

  const cacheValue = await client.hget(this.hashKey, key);

  // If Yes, return that

  if (cacheValue) {
    console.log("Cached 💰");
    const doc = JSON.parse(cacheValue);
    return Array.isArray(doc)
      ? doc.map((d) => new this.model(d))
      : new this.model(doc);    // returning cached value
  }

  // Otherwise issue the query and store result in redis
   result = await exec.apply(this, arguments);
   // .validate shows that returned result is function and not plain JSON Object in order to store in redis we have to convert into JSON
    //  console.log(result.validate); 

    client.hset(this.hashKey, key, JSON.stringify(result), 'EX', 60); // storing cache value

    console.log("Uncached ♠");

    return result;

};