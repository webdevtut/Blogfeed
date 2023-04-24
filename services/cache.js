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
    console.log(this); // "this" will have access to current query and thus model on which it is performing operation
    const doc = new this.model(JSON.parse(cacheValue));
    return doc;
}

  // Otherwise issue the query and store result in redis
   result = await exec.apply(this, arguments);
   // .validate shows that returned result is function and not plain JSON Object in order to store in redis we have to convert into JSON
    //  console.log(result.validate); 

    client.set(key, JSON.stringify(result));

    return result;

};