'use strict';

function high(x) {
  var result = "";
  var max = 0;
  var alphabet = "abcdefghijklmnopqrstuvwxyz"
  var arr = x.split(" ");
  arr.forEach((item, index) => {
    var i = 0;
    var count = 0;
    while (i < item.length) {
      count = count + alphabet.indexOf(item[i]);
      i++;
    }
    if (count > max) {
      result = item;
      max = count;
    }
  });
  return result;
}