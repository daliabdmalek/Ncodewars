//solution for .map
'use strict';

function double(array) {
  const map1 = array.map(x => x * 2);
  return map1;
}


//solution for .filter
'use strict';

function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter(function (item) {
    return typeof item == "number";
  });
  return (filter_list)
}

//solution for .reduce
'use strict';

function find_average(array) {
  return array.reduce((a, b) => a + b) / array.length
};