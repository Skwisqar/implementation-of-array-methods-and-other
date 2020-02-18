/////////////////////////Palindrom/////////////////

const palindrome= str => {
  str = str.toLowerCase()
  return str === str.split('').reverse().join('');
}
//palindrome('racecar') === true
//palindrome('table') === false

////////////////////FizzBuzz//////////////////////////////////

const fizzBuzz = n => {
  for(let i = 1; i <= n; i++) {
    i % 3 === 0 && i % 5 === 0 ? console.log('fizzBuzz')
    : i % 3 === 0 ? console.log('fizz')
    : i % 5 === 0 ? console.log('buzz')
    : console.log(i)
  }
}
//fizzBuzz(20)

//////////////////////Найти гласные//////////////////////////////

const findVowels = str => {
  str = str.toLowerCase();
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  Array.prototype.forEach.call(str, e => vowels.includes(e) ? count++ : undefined )

  return count
}

//findVowels('hello')
//findVowels('why')

////////////////////////////fibonacci//////////////////////////////////

const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2)

////////////////////////////////////////////////////////////////////////

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
  if (dest && typeof obj == "object") {
    dest = obj instanceof Array ? [] : {};
    for (let key in obj)
      if (obj.hasOwnProperty(key))
        dest[key] = deepClon(obj[key]);
  }
  return dest;
}

obj.fullname = 'Bas9'
//console.log(obj)

const objClon = deepClon(obj);
objClon.jobs.location.city = 'oslo'
//console.log(objClon);
