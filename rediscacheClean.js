const redis = require("redis");
const redisUrl = "redis://127.0.0.1:6379";
const client = redis.createClient(redisUrl);
client.flushall("ASYNC", (err, status) => {
  if (!err) {
    console.log(status + "🚮");
    process.exit(0);
  }
});