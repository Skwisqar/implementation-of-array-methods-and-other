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

function reduce (arr, callback, initialVal) {
  let accumulator = (initialVal === undefined) ? undefined : initialVal;

  for (let i = 0; i < arr.length; i++) {
    if (accumulator !== undefined)
      accumulator = callback(accumulator, arr[i], i);
    else
      accumulator = arr[i];
  }
  return accumulator;
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

///////////////////////////splice////////////////////////////////////




///////////////////////////deepClone////////////////////////////////////

const obj = {
  fullname: 'Ss Dd Ff',
  age: 20,
  location: {
    contry: 'Ukraine',
    city: 'Kyiv',
  },
  jobs: {
    position: 'Front-end Development',
    salerty: '$1000',
    location: {
      contry: 'Ukraine',
      city: 'Kyiv'
    }
  }
}

function deepClon(obj) {
  let dest = obj;
    if(dest && typeof obj == "object") {
        dest = obj instanceof Array ? [] : {};
        for(let key in obj)
            if(obj.hasOwnProperty(key))
                dest[key] = deepClon(obj[key]);
    }
    return dest;
}
obj.fullname = 'Bas9'
console.log(obj)

const objClon = deepClon(obj);
objClon.jobs.location.city = 'oslo'
console.log(objClon);

///////////////////////////memoizer////////////////////////////////////

function memoizer(fn) {
  const cache = {};

  return function(n) {
    if (n in cache) {
      return cache[n];
    }
    return (cache[n] = fn(n));
  };
}

///////////////////////////splice////////////////////////////////////

const arch = [1, 'pur', 3];
//, 4, true,'Salo', 9, 'qwerq'
function splice(array, index, deleteCount, ...replace) {
  if (arguments.length === 1) {
    array.length--
  } else if (arguments.length === 2) {
    for (let i = index; i < array.length; i) {
      array.length--
    }
  } else if (arguments.length === 3) {
    while (deleteCount > 0) {
      delete array[index];
      index++;
      deleteCount--
    }
  } else if (replace.length > 0) {
    while (deleteCount > 0) {
      delete array[index];
      index++;
      deleteCount--
    }
    const newArr = array.slice(index);
    console.log(newArr)
    console.log(array)
    replace.forEach((e, i) => array[index + i] = e );
    newArr.forEach((e, i) => array[index + replace.length + i] = e);
    console.log(array);
    array.concat(newArr)
  }
}

//http://www.oooo.plus/crop.php

splice(arch, 1, 0, 'ssddf', 'qwerty', true, false, {});
console.log(arch);