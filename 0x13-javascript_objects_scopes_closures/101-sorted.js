#!/usr/bin/node
const dict = require('./101-data.js').dict;
let dict_2 = {};
for (let key in dict) {
  if (dict_2[dict[key]] === undefined) {
    dict_2[dict[key]] = [key];
  } else {
    dict_2[dict[key]].push(key);
  }
}
console.log(dict_2);
