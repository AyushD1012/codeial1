const kue = require("kue");
kue.app.set("kue redis url", process.env.REDIS_URL);

const queue = kue.createQueue();

module.exports = queue;
