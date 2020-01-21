/////////////Реализация метода массива////////////////
//////////////forEach/////////////////

/* const array = ['JavaScript', 'is', 'awesome'];

array.forEach(function (item, index, arr) {
  console.log(item, index, arr);
});

function each(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
};
each(array, (item, i, arr) => console.log(item, i, arr)) */

////////////////////////////map//////////////////////////////

/* function map (arr, callback) {
    let results = [];

  for (let i = 0; i < arr.length; i++) {
    results.push(callback(arr[i], i, arr));
  }
  return results;
};

const q = [1, 2, 3, 4, 5];

const a = map(q, ( n ) =>  n + 10);
console.log(a) */

//////////////////////////filter/////////////////////////////////////

/* function filter(arr, callback) {
  let results = [];

  for (let i = 0; i < arr.length; i++) {
    if(callback(arr[i], i, arr)) {
      results.push(arr[i])
    }
  }
  return results;
}

const q = [1, 2, 3, 4, 5];

const a = filter(q, (n) => n <= 3)
console.log(a) */

//////////////////////////reducer/////////////////////////////////////

function reduce(arr, callback, startValue) {
  var result = startValue;
  for (let i = 0; i < arr.length; i++) {
    result = callback(result, arr[i], i, arr);
  }
  return result;
};

const arrs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const strs = ['JavaScript', 'is', 'awesome'];

const strResults = reduce(strs, function (currentValue, nextValue, index) {
  return (index === 0) ? currentValue + nextValue : currentValue + ' ' + nextValue;
}, '');

const arrResults = reduce(arrs, function (result, current) {
  return result.concat(current);
}, []);

console.log(strResults);
console.log(arrResults);

///////////////////////////deepClone////////////////////////////////////

function deepClon(dest, obj) {
  for (let key in obj) {
    if ((typeof obj[key]) === "object" || "array") {
      dest[key] = deepClon({}, obj[key]);
    } else {
      dest[key] = obj[key];
    }
  }
  return dest;
}

///////////////////////////memoizer////////////////////////////////////

function memoizer(fun){
    let cache = {}
    return function (n){
        if (cache[n] != undefined ) {
          return cache[n]
        } else {
          let result = fun(n)
          cache[n] = result
          return result
        }
    }
}