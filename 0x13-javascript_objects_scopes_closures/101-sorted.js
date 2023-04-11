#!/usr/bin/node
const dict = require('./101-data.js').dict;
let updateDict = {};
for (let key in dict) {
  if (updateDict[dict[key]] === undefined) {
    updateDict[dict[key]] = [key];
  } else {
    updateDict[dict[key]].push(key);
  }
}
console.log(updateDict);
