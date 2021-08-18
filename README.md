//Debouncing & Throttling
let counter = 0
const getData = () => {
  console.log("Invoked", counter++);
}

const debounce = (fn, delay) => {
  let timer;
  return function(){ 
      let context = this,
      args = arguments;
     clearTimeout(timer);
       timer = setTimeout(() => {
        fn.apply(context, args);
       }, delay)
    }
  }

const debounceFunction = debounce(getData, 300);

const throttle = (fn, limit) => {
  let flag = true;
  return function(){ 
      let context = this,
      args = arguments;
    if(flag) {
      fn.apply(context, args);
      flag = false;
      setTimeout(()=>{
        flag = true;
      }, limit);
     }
    }
  }

const throttleFunction = throttle(getData, 1000);


//Currying
let multiplyB = (x,y) => {
  console.log(x*y);
}

let multiplyC = function(x){
  return function(y){
    console.log(x*y);
  }
}

let multiplyByTwo = multiplyB.bind(this, 2);
let multiplyByFive = multiplyC(5);

multiplyByTwo(3);
multiplyByFive(3);

//Solve Sum(1)(2)(3)(4)() Return 10 

let sum = x => y => (y || y !== undefined) ? sum(x+y):x;

console.log(sum(1)(2)(3)(4)(0)(7)());


//Polyfil for bind
let Person = {
  name: 'Nitin',
  lastName: 'Grover'
}
let printname = function() {
  console.log(this.name +" , "+ this.lastName)
}
let printMyName = printname.bind(Person)
printMyName();

Function.prototype.customBind = function(...args){
   let obj = this
   let param = args.slice(1)
   return function(...args2){
      obj.apply(args[0], [...param, ...args2])
   }
}


let printMyName2 = printname.customBind(Person)
printMyName2();

//Polyfil for map
let values = [2,5,5]
let res = values.map((element, index, arr) => element*10)
console.log(res)
Array.prototype.customMap = function(callback) {
  let result = [];
  for(let i=0; i<this.length; i++){
      result.push(callback(this[i], i, this))
  }
  return result;
}

let res2 = values.customMap((element, index, arr) => element*10)
console.log(res2)

//Polyfil for forEach
let values = [2,5,5]
values.forEach((element, index, arr) => {
  console.log(element, index, arr)
})

Array.prototype.customForEach = function(callback) {
  for(let i=0; i<this.length; i++){
      callback(this[i], i, this)
  }
}

values.customForEach((element, index, arr) => {
  console.log(element, index, arr)
})

//Polyfil for filter
let values = [2,5,5]
let res = values.filter((element, index, arr) => element > 3)
console.log(res)
Array.prototype.customFilter = function(callback) {
  let result = [];
  for(let i=0; i<this.length; i++){
      if(callback(this[i], i, this))
      result.push(this[i])
  }
  return result;
}

let res2 = values.customFilter((element, index, arr) => element > 3)
console.log(res2)

//Polyfil for find
let values = [2,5,5]
let res = values.find((element, index, arr) => element > 3)
console.log(res)
Array.prototype.customFind = function(callback) {
  for(let i=0; i<this.length; i++){
      if(callback(this[i], i, this))
      return this[i]
  } 
}

let res2 = values.customFind((element, index, arr) => element > 3)
console.log(res2)

//Polyfil for reduce
let values = [2,5,5]
values.reduce((acc,curr,index,arr) => {acc*curr},1) //50
Array.prototype.customReduce = function(callback, initial) {
  let acc = initial
  for(let i=0; i<this.length; i++){
     acc = callback(acc,this[i], i, this)
  } 
  return acc;
}
values.customReduce((acc,curr,index,arr) => {acc*curr},1) //50

//Polyfil for Promise.all
Promise.all = function(promises) {
  let results = [];
  return new Promise((resolve, reject) => {
      promises.forEach((el, index) => {
          el.then((res) => {
              results.push(res);
              if(index == promises.length - 1)
              resolve(results)
          }).catch(err => reject(err));
      });
  });
};

//Polyfil for Object.assign
Object.customAssign = function(target){
  var newTo = Object(target);
  for(var i=1; i<arguments.length; i++){
    var nextSource = arguments[i];
    if(nextSource !== null && nextSource !== undefined){
      for(var nextKey in nextSource){
        if(Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
          newTo[nextKey] = nextSource[nextKey];
        }
      }
    }
  }
  return newTo;
}
const target = {
  a:1,
  b:2,
  c:3
}
const source1 = {
  a:10,
  c:6
}
const source2 = {
  c:1
}
const result = Object.customAssign(target, source1, source2)
console.log(result);

