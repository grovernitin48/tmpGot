### Table of Contents

| No. | Questions |
| --- | --------- |
|   | **JS Coding** |
|1  | [Array Questions: Unique elements](#what-is-react) |
|2  | [Array Questions: Nested array to single array](#what-are-the-major-features-of-react) |
|3  | [Array Questions: Anagrams in a array of strings](#what-is-jsx) |
|4  | [Array Questions: Return 2 indices from an array, sum of their elements is= to given number?](#what-is-the-difference-between-element-and-component) |
|5  | [Async await/ Fetch data from API](#how-to-create-components-in-react) |
|6  | [Async defer](#when-to-use-a-class-component-over-a-function-component) |
|7  | [Closures](#what-are-pure-components) |
|8  | [Currying](#what-is-state-in-react) |
|9  | [Call, apply, bind](#what-are-props-in-react) |
|10 | [Debouncing](#what-is-the-difference-between-state-and-props) |
|11 | [Event Bubbling](#why-should-we-not-update-the-state-directly) |
|12 | [Event Capturing](#what-is-the-purpose-of-callback-function-as-an-argument-of-setstate)
|13 | [Event Delegation](#what-is-the-difference-between-html-and-react-event-handling) |
|14 | [Hoisting](#how-to-bind-methods-or-event-handlers-in-jsx-callbacks) |
|15 | [Object Questions:](#how-to-pass-a-parameter-to-an-event-handler-or-callback) |
|16 | [Polyfills for bind](#what-are-synthetic-events-in-react) |
|17 | [Polyfills for find](#what-are-inline-conditional-expressions) |
|18 | [Polyfills for findAll](#what-is-key-prop-and-what-is-the-benefit-of-using-it-in-arrays-of-elements) |
|19 | [Polyfills for filter](#what-is-the-use-of-refs) |
|20 | [Polyfills for forEach](#how-to-create-refs)
|21 | [Polyfills for map](#what-are-pure-components) |
|22 | [Polyfills for Object.Assign](#what-is-state-in-react) |
|23 | [Polyfills for Promise.All](#what-are-props-in-react) |
|24 | [Polyfills for reduce](#what-is-the-difference-between-state-and-props) |
|25 | [Promises](#why-should-we-not-update-the-state-directly) |
|26 | [Prototypical inheritance](#what-is-the-purpose-of-callback-function-as-an-argument-of-setstate)
|27 | [String Questions: Reverse every word](#what-is-the-difference-between-html-and-react-event-handling) |
|28 | [Throttling](#how-to-bind-methods-or-event-handlers-in-jsx-callbacks) |
|29 | [Object Questions:](#how-to-pass-a-parameter-to-an-event-handler-or-callback) |
|30 | [Output Questions: Const let var](#what-are-synthetic-events-in-react) |
|31 | [Output Questions: setTimeout](#what-are-inline-conditional-expressions) |
|32 | [Specific Questions: Minimum number of platforms to take all trains](#what-is-key-prop-and-what-is-the-benefit-of-using-it-in-arrays-of-elements) |
|33 | [Specific Questions: Minesweeper game](#what-is-the-use-of-refs) |
|34 | [Polyfills for forEach](#how-to-create-refs)



34. ### What is JSX?

    *JSX* is a XML-like syntax extension to ECMAScript (the acronym stands for *JavaScript XML*). Basically it just provides syntactic sugar for the `React.createElement()` function, giving us expressiveness of JavaScript along with HTML like template syntax.

    In the example below text inside `<h1>` tag is returned as JavaScript function to the render function.

    ```jsx harmony
    class App extends React.Component {
      render() {
        return(
          <div>
            <h1>{'Welcome to React world!'}</h1>
          </div>
        )
      }
    }
    ```


   **[⬆ Back to Top](#table-of-contents)**

```
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
```


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
**[⬆ Back to Top](#table-of-contents)**
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

