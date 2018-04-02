'use strict';

function isNice(arr) {
  //2, 10, 9, 3
  if (arr.length < 1) {
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let hasLesser = false;
    let lesserNum = num - 1

    if (arr.indexOf(lesserNum) !== -1) {
      hasLesser = true;
    }

    let hasGreater = false;
    let greaterNum = num + 1;

    if (arr.includes(greaterNum)) {
      hasGreater = true
    }

    if (hasLesser || hasGreater) {
    } else {

      return false;
    }
  }
  return true;
}
