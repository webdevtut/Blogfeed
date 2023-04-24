const mongoose = require("mongoose");
const redis = require("redis");
const util = require('util');
const redisUrl = "redis://127.0.0.1:6379";
const client = redis.createClient(redisUrl);
client.get = util.promisify(client.get);

const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.exec = async function () {

  const key = JSON.stringify(Object.assign({}, this.getQuery(), {
    collection: this.mongooseCollection.name
  }));

  // See if we have value for 'key' in redis

  const cacheValue = await client.get(key);

  // If Yes, return that

  if(cacheValue) {
    console.log(cacheValue);    
    // return cacheValue
}

  // Otherwise issue the query and store result in redis
   result = await exec.apply(this, arguments);
   console.log(result);

};