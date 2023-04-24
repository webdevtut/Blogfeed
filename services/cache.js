const mongoose = require("mongoose");

const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.exec = function () {
  console.log("I am about to run Query");
  console.log(this.getQuery()); // Query information (Query Params: find, where, _id, aggregate, group etc)
  console.log(this.mongooseCollection.name);// Collection (Model) name : Users / Blogs
  return exec.apply(this, arguments);
};