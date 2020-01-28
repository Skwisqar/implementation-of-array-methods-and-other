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
//
const argKey = x => x.toString() + ':' + typeof x;
const generateKey = args => args.map(argKey).join('|');

function memoizer(fn) {
  const cache = {}
  return (...args) => {
    const key = generateKey(args)
    const val = cache[key]
    if (val) return val;
    const res = fn(...args);
    cache[key] = res;
    return res;
  };
};

//memoizer(deepClon)
///////////////////////////splice////////////////////////////////////

const arch = [1, 'pur', 3, 'ssddf', 'qwerty', true, false, {}];
//, 4, true,'Salo', 9, 'qwerq'
//, 'ssddf', 'qwerty', true, false, {}
function splice(array, index, deleteCount, ...replace) {
  console.log(index);
  if (index === undefined) {array.length--}

  if (index !== undefined && deleteCount === undefined) {
    for (let i = index; i < array.length; i) {
      array.length--;
    }
  } 
  if (deleteCount !== undefined) {
    const newArr = array.slice(index + deleteCount);
    array.length = index;
    newArr.forEach((e, i) => (array[index + i] = e));
  } 
  if (replace.length > 0) {
    const newArr = array.slice(index);
    replace.concat(newArr).forEach((e, i) => (array[index + i] = e));
  }
}


splice(arch, 2, 3, 'kakapuka');
console.log(arch);
/////////////////////////Utils/////////////////////////////////////
const LOOP_COUNT = 10000;

const speedTest = (name, fn, args, count) => {
  const tmp =[];
  const start = new Date().getTime();
  for(let i = 0; i < count; i++) {
    tmp.push(fn(...args));
  }
  const end = new Date().getTime();
  const time = end - start;
  console.log(`${name} * ${tmp.length} : ${time}`);
};

///////////////////////fib/////////////////////////////////////////
const fib = n => (n <= 2 ? 1 : fib(n - 1) + fib(n - 2));
const mFib = memoizer(fib)

speedTest("fib(20)", fib, [20], LOOP_COUNT);
speedTest("memoizer fib(20)", mFib, [20], LOOP_COUNT);