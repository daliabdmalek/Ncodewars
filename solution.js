'use strict';
function abbrevName(name) {
  var dot = name.split(' ');
  console.log(name)
  console.log(name[0][0])
  return (dot[0][0] + '.' + dot[1][0]).toUpperCase();
}