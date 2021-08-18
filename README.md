### Table of Contents

| No. | Questions |
| --- | --------- |
|   | **JS Coding** |
|1  | [Array Questions: Unique elements](#array-questions-unique-elements) |
|2  | [Array Questions: Nested array to single array](#array-questions-nested-array-to-single-array) |
|3  | [Array Questions: Anagrams in a array of strings](#array-questions-anagrams-in-a-array-of-strings) |
|4  | [Array Questions: Return 2 indices from an array, sum of their elements is= to given number?](#what-is-the-difference-between-element-and-component) |
|5  | [Async await/ Fetch data from API](#how-to-create-components-in-react) |
|6  | [Async defer](#when-to-use-a-class-component-over-a-function-component) |
|7  | [Closures](#what-are-pure-components) |
|8  | [Currying](#currying) |
|9  | [Call, apply, bind](#what-are-props-in-react) |
|10 | [Debouncing](#debouncing) |
|11 | [Event Bubbling](#why-should-we-not-update-the-state-directly) |
|12 | [Event Capturing](#what-is-the-purpose-of-callback-function-as-an-argument-of-setstate)
|13 | [Event Delegation](#what-is-the-difference-between-html-and-react-event-handling) |
|14 | [Hoisting](#how-to-bind-methods-or-event-handlers-in-jsx-callbacks) |
|15 | [Object Questions:](#how-to-pass-a-parameter-to-an-event-handler-or-callback) |
|16 | [Polyfills for bind](#polyfills-for-bind) |
|17 | [Polyfills for find](#polyfills-for-find) |
|18 | [Polyfills for findAll](#polyfills-for-findall) |
|19 | [Polyfills for filter](#polyfills-for-filter) |
|20 | [Polyfills for forEach](#polyfills-for-foreach)
|21 | [Polyfills for map](#polyfills-for-map) |
|22 | [Polyfills for Object Assign](#polyfills-for-object-assign) |
|23 | [Polyfills for Promise All](#polyfills-for-promise-all) |
|24 | [Polyfills for reduce](#polyfills-for-reduce) |
|25 | [Promises](#promises) |
|26 | [Prototypical inheritance](#what-is-the-purpose-of-callback-function-as-an-argument-of-setstate)
|27 | [String Questions: Reverse every word](#what-is-the-difference-between-html-and-react-event-handling) |
|28 | [Throttling](#throttling) |
|29 | [Object Questions:](#how-to-pass-a-parameter-to-an-event-handler-or-callback) |
|30 | [Output Questions: Const let var](#what-are-synthetic-events-in-react) |
|31 | [Output Questions: setTimeout](#what-are-inline-conditional-expressions) |
|32 | [Specific Questions: Minimum number of platforms to take all trains](#what-is-key-prop-and-what-is-the-benefit-of-using-it-in-arrays-of-elements) |
|33 | [Specific Questions: Minesweeper game](#what-is-the-use-of-refs) |
|34 | [Polyfills for forEach](#how-to-create-refs)



1. ### Array Questions: Unique elements

    ```jsx harmony
   const a = [1,1,2,3,3,4,5,6,6]
   
   // 1. Basic Way
   const filterUnique = (a) => {
   // Creating an object
   const obj = {};
   //Iterating through loop and adding keys to the object{object always have unique keys}
   for(let i=0; i<a.length; i++){
      obj[a[i]] = i;
     }
     //Returning object keys in form of Array
     return Object.keys(obj).map(val => parseInt(val,10))
    }
    console.log(filterUnique(a))
    // 2. Easy Way
    // iterating array and passing third param of the filter function(array itself),
    // indexOF will return index of the element(first occurence)
    // if index of our firt iterator equals index of second iterator(indexOf), then
    // its a uniques element otherwise its a duplicatte
    // Filter function returns the array which satisfies the condition mentioned inside
    console.log(a.filter((el,ind, arr) => arr.indexOf(el) === ind));
    ```
   **[⬆ Back to Top](#table-of-contents)**
   
2. ### Array Questions: Nested array to single array

```jsx harmony
    var arr = [1, 3, 4, 65, [3, 5, 6, 9, [354, 5, 43, 54, 54, 6, [232, 323, 323]]]];
    var result = [];
    function getSingleArray(inArr) {
      for (var i = 0; i < inArr.length; i++) {
        if (typeof inArr[i] == "object") {
          getSingleArray(inArr[i]); // Calling Recursively
        } else {
          result.push(inArr[i]);
        }
      }
    }

    getSingleArray(arr);
    console.log(result); 
 ```
**[⬆ Back to Top](#table-of-contents)**

3. ### Array Questions: Anagrams in a array of strings


**[⬆ Back to Top](#table-of-contents)**

8. ### Currying
```jsx harmony
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
```
**[⬆ Back to Top](#table-of-contents)**

10. ### Debouncing
```jsx harmony
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
```
**[⬆ Back to Top](#table-of-contents)**


16. ### Polyfills for bind
```jsx harmony
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
```
**[⬆ Back to Top](#table-of-contents)**

17. ### Polyfills for find
```jsx harmony
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
```
**[⬆ Back to Top](#table-of-contents)**

18. ### Polyfills for findAll
```jsx harmony
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
```
**[⬆ Back to Top](#table-of-contents)**

19. ### Polyfills for filter
```jsx harmony
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
```
**[⬆ Back to Top](#table-of-contents)**

20. ### Polyfills for forEach
```jsx harmony
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
```
**[⬆ Back to Top](#table-of-contents)**

21. ### Polyfills for map
```jsx harmony
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
```
**[⬆ Back to Top](#table-of-contents)**

22. ### Polyfills for Object Assign
```jsx harmony
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
```
**[⬆ Back to Top](#table-of-contents)**

23. ### Polyfills for Promise All
```jsx harmony
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

```
**[⬆ Back to Top](#table-of-contents)**

24. ### Polyfills for reduce
```jsx harmony
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
```
**[⬆ Back to Top](#table-of-contents)**

28. ### Throttling
```jsx harmony
    let counter = 0
    const getData = () => {
      console.log("Invoked", counter++);
    }

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
**[⬆ Back to Top](#table-of-contents)**


