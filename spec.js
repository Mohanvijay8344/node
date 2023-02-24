const os = require("os");

console.log(`free Memory in: ${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB`)
console.log(`free Memory in: ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`)

console.log("version", os.version())
console.log("cpu", os.cpus())