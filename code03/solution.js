'use strict';

function insertDash(num) {
  var str = num.toString();
  var regex = /([13579])([13579])/g;
  while (str.match(regex)) {
    str = str.replace(regex, '$1-$2');
  }
  return str;
}