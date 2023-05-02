const keys = require('./config/keys');
const redis = require("redis");
const redisUrl = keys.redisURI;
const client = redis.createClient(redisUrl);
client.flushall("ASYNC", (err, status) => {
  if (!err) {
    console.log(status + "🚮");
    process.exit(0);
  }
});