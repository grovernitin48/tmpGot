### Table of Contents

| No. | Questions |
| --- | --------- |
|   | **JS Coding** |
|1  | [Array Questions: Unique elements](#array-questions-unique-elements) |
|2  | [Array Questions: Nested array to single array](#array-questions-nested-array-to-single-array) |
|3  | [Array Questions: Anagrams in a array of strings](#array-questions-anagrams-in-a-array-of-strings) |
|4  | [Array Questions: Return 2 indices from an array, sum of their elements is= to given number?](#what-is-the-difference-between-element-and-component) |
|5  | [Async await/ Fetch data from API](#how-to-create-components-in-react) |
|6  | [Async defer](#async-defer) |
|7  | [Callbacks](#callbacks) |
|7  | [Closures](#closures) |
|8  | [Currying](#currying) |
|9  | [Call, apply, bind](#call-apply-bind) |
|10 | [Debouncing](#debouncing) |
|11 | [Event Bubbling Capturing Delegation](#event-bubbling-capturing-delegation) |
|14 | [Hoisting](#hoisting) |
|15 | [Object Questions:](#object-question) |
|16 | [Polyfills for bind](#polyfills-for-bind) |
|17 | [Polyfills for find](#polyfills-for-find) |
|18 | [Polyfills for findAll](#polyfills-for-findall) |
|19 | [Polyfills for filter](#polyfills-for-filter) |
|20 | [Polyfills for forEach](#polyfills-for-foreach)
|21 | [Polyfills for map](#polyfills-for-map) |
|22 | [Polyfills for Object Assign](#polyfills-for-object-assign) |
|23 | [Polyfills for Push](#polyfills-for-push) |
|23 | [Polyfills for Promise and Promise All](#polyfills-for-promise-and-promise-all) |
|24 | [Polyfills for reduce](#polyfills-for-reduce) |
|25 | [Promises](#promises) |
|26 | [Prototypical inheritance](#prototypical-inheritance)
|27 | [String Questions: Reverse every word](#string-questions-reverse-every-word) |
|28 | [Throttling](#throttling) |
|28 | [Web Works](#web-works) |
|29 | [Object Questions:](#object-questions) |
|30 | [Output Questions: Const let var](#output-questions-const-let-var) |
|31 | [Output Questions: setTimeout](#output-questions-setTimeout) |
|32 | [Specific Questions: Minimum number of platforms to take all trains](#specific-questions-minimum-number-of-platforms-to-take-all-trains) |
|33 | [Specific Questions: Minesweeper game](#specific-questions-minesweeper-game) |
|34 | [DS Binary Search Tree](#ds-binary-search-tree)
|35 | [React: Calculator](#react-calculator)
|36 | [React: Ratings Star](#react-ratings-star)
|37 | [React: Input Search Filter](#react-input-search-filter)

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
```jsx harmony
   const arr = ['monk', 'konm', 'nkom', 'bbc', 'cbb', 'dell', 'ledl', 'llde'];
   let anagram = {};

   for (let i = 0; i<arr.length; i++){
     const word = arr[i];
     const sortedWord = word.split("").sort().join("");
     let tempArray = [];
     if(anagram[sortedWord]){
       tempArray = anagram[sortedWord].length==1?anagram[sortedWord]:[...anagram[sortedWord]];
       tempArray.push(word);
       anagram[sortedWord] = tempArray;
     }else{
       anagram[sortedWord] = [word];
     }
   }
   console.log(Object.values(anagram));
   
   //ANOTHER QUESTION return an array with all the anagrams grouped together
   var arr = ['cat', 'dog', 'tac', 'god', 'act'];

   var allAnagrams = function(arr) {
       var anagrams = {};
       arr.forEach(function(str) {
           var recurse = function(ana, str) {
               if (str === '') 
                   anagrams[ana] = 1;
               for (var i = 0; i < str.length; i++)
                   recurse(ana + str[i], str.slice(0, i) + str.slice(i + 1));
           };
           recurse('', str);
       });
       return Object.keys(anagrams);
   }

   console.log(allAnagrams(arr));
   //["cat", "cta", "act", "atc", "tca", "tac", "dog", "dgo", "odg", "ogd", "gdo", "god"]
```

**[⬆ Back to Top](#table-of-contents)**

5. ### Array Questions: Return 2 indices from an array, sum of their elements is= to given number?
 ```jsx harmony
     let A = [ 1, 4, 45, 6, 10, 8 ];
        let n = 16;
        printpairs(A, n);
    function printpairs(arr, sum)
    {
        let s = new Set();
        for (let i = 0; i < arr.length; ++i)
        {
            let temp = sum - arr[i];
            if (s.has(temp)) {
                console.log( "Pair with given sum "
                    + sum + " is (" + arr[i]
                    + ", " + temp + ")");
            }
            s.add(arr[i]);
        }
    }
```

**[⬆ Back to Top](#table-of-contents)**

6. ### Async Defer

NORMAL: HTML Parsing stops when SCRIPT tag is encountered, fetch script, parse script and then HTML pasring continues

ASYNC: SCRIPT fetch from the server with HTML parsing(asynchronously), stops HTML parsing when fetching is done, execute SCRIPT, after execution completes HTML parsing continues

DEFER: SCRIPT fetch from the server with HTML parsing(asynchronously), but only execute when HTML parsing is completed

**[⬆ Back to Top](#table-of-contents)**


7. ### Closures

Basically means Inner function can access variables and parameters of an outer function. Useful to create private variables or functions.

```jsx harmony
   function OuterFunction() {
       var outerVariable = 100;
       function InnerFunction() {
           alert(outerVariable);
       }
       return InnerFunction;
   }
   var innerFunc = OuterFunction();
   innerFunc(); // 100

   //Private variables/functions
   var counter = (function() {
     var privateCounter = 0;
     function changeBy(val) {
       privateCounter += val;
     }
     return {
       increment: function() {
         changeBy(1);
       },
       decrement: function() {
         changeBy(-1);
       },
       value: function() {
         return privateCounter;
       }
     };   
   })();
   alert(counter.value()); // 0
   counter.increment();
   alert(counter.value()); // 1
   counter.decrement();
   alert(counter.value()); // 0
```

**[⬆ Back to Top](#table-of-contents)**


8. ### Currying
Currying is a technique in which when a function, instead of taking all arguments at one time, takes the first one and return a new function that takes the second one and returns a new function and goes on until all arguments have been fulfilled.

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

9. ### Call apply bind

**Call:** The call() method invokes a function with a given `this` value and arguments provided one by one

```jsx harmony
    var employee = {fName: 'Nitin', lName: 'Grover'};
    function invite(greeting1, greeting2) {
        console.log(greeting1 + ' ' + this.firstName + ' ' + this.lastName+ ', '+ greeting2);
    }
    invite.call(employee, 'Hello', 'How are you?'); // Hello John Rodson, How are you?
```

   **Apply:** Invokes the function with a given `this` value and allows you to pass in arguments as an array

 ```jsx harmony
    var employee = {fName: 'Nitin', lName: 'Grover'};

    function invite(greeting1, greeting2) {
        console.log(greeting1 + ' ' + this.firstName + ' ' + this.lastName+ ', '+ greeting2);
    }
    invite.apply(employee, ['Hello', 'How are you?']); // Hello John Rodson, How are you?
 ```

   **bind:** returns a new function, allowing you to pass any number of arguments

```jsx harmony
    var employee = {firstName: 'Nitin', lastName: 'Grover'};
    function invite(greeting1, greeting2) {
        console.log(greeting1 + ' ' + this.firstName + ' ' + this.lastName+ ', '+ greeting2);
    }
    var inviteEmployee1 = invite.bind(employee1);
    inviteEmployee1('Hello', 'How are you?'); // Hello John Rodson, How are you?
```

Call and apply are pretty interchangeable. Both execute the current function immediately. You need to decide whether it’s easier to send in an array or a comma separated list of arguments. You can remember by treating Call is for **comma** (separated list) and Apply is for **Array**. 
    
 Whereas Bind creates a new function that will have `this` set to the first parameter passed to bind().
 
 **[⬆ Back to Top](#table-of-contents)**

10. ### Debouncing

Debouncing is a practice used to improve browser performance. 
Basically it is used to ensure that time-consuming tasks do not fire so often, 
so it limits the rate at which a function gets invoked.
It is mostly used in search bar

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


11. ### Event Bubbling Capturing Delegation

EVENT BUBBLING is a sequence of calling the event handlers from the deepest element to its parents 
when all the elements have registered listeners for the same event. 
So starting from the deepest element to all its ancestors, calling is performed.
in event capturing, an event moves from the outermost element to the target. Event Capturing is performed before event bubbling.

Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the target property of the event object.

 ```jsx harmony
      <style>
        div {
          min-width: 100px;
          min-height: 100px;
          padding: 30px;
          border: 1px solid black;
        }
        </style>
        <div id="grandparent">
          <div id="parent">
            <div id="child"></div>
          </div>
        </div>

      document.querySelector("#grandparent")
        .addEventListener('click', (e) => {
          console.log("Grandparent Clicked!");
          //e.stopPropagation();
        }, true);
        document.querySelector("#parent")
        .addEventListener('click', (e) => {
          console.log("Parent Clicked!");
        }, true);
        document.querySelector("#child")
        .addEventListener('click', (e) => {
          console.log("Child Clicked!");
        }, true);
        
        //EVENT DELEGATION
          <div>
             <ul id="category">
               <li id="laptops">laptops</li>
               <li id="cameras">cameras</li>
               <li id="shoes">shoes</li>
             </ul>
           </div>

         document.querySelector("#category").addEventListener('click', (e) => {
           if (e.target.tagName == 'LI') {
             console.log(e.target.id);
             window.location.href = "/" + e.target.id;
           }
});
```
 **[⬆ Back to Top](#table-of-contents)**
 
16. ### Hoisting
It's a concept in which the JS engine takes all the variables and function declarations and puts them into memory space during the compilation of the program. So during the execution phase, it allows using a function before the declaration itself. 
JS only hoist the declarations, not initializations.
All these functions and variable declarations are added to the memory inside a JavaScript data structure called Lexical Environment. So that they can be used even before they are actually declared in the source code.A lexical environment is a data structure that holds identifier-variable mapping. A lexical environment is a place where variables and functions live during the program execution.
Only function declarations are hoisted in JavaScript; function expressions are not hoisted.
All declarations (function, var, let, const and class) are hoisted in JavaScript, while the var declarations are initialized with undefined, but let and const declarations remain uninitialized.They will only get initialized when their lexical binding (assignment) is evaluated during runtime by the JavaScript engine.
“Temporal Dead Zone”, A time span between variable creation and its initialization where they can’t be accessed.

```jsx harmony
   console.log(num); // Returns undefined, as only declaration was hoisted, no initialization has happened at this stage
   var num; // Declaration
   num = 6; // Initialization
   
   console.log(num); // Throws ReferenceError exception
   num = 6; // Initialization
   
   console.log(a);//Reference Error
   let a = 3;

   let a;
   console.log(a); // outputs undefined
   a = 5;

   function foo () {
     console.log(a);
   }
   let a = 20;
   foo();  // This is perfectly valid

   function foo() {
    console.log(a); // ReferenceError: a is not defined
   }
   foo(); // This is not valid
   let a = 20;
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


23. ### Polyfills for Push
```jsx harmony
    if (!Array.prototype.push) {
    // Check if not already supported, then only add. No need to check this when you want to Override the method
    // Add method to prototype of array, so that can be directly called on array
        Array.prototype.push = function() {
            // Use loop for multiple/any no. of elements
            for (var i = 0; i < arguments.length; i++) {
                this[this.length] = arguments[i];
            }
            // Return new length of the array
            return this.length;
        };
    }
```
**[⬆ Back to Top](#table-of-contents)**

23. ### Polyfills for Promise and Promise All
```jsx harmony

   function PromisePolyFill(executor) {
        let onResolve, onReject;
        let fulfilled = false,
          rejected = false,
          called = false,
          value;
        function resolve(v) {
          fulfilled = true;
          value = v;
          if (typeof onResolve === "function") {
            onResolve(value);
            called = true;
          }
        }
        function reject(reason) {
          rejected = true;
          value = reason;
          if (typeof onReject === "function") {
            onReject(value);
            called = true;
          }
        }
        this.then = function (callback) {
          onResolve = callback;
          if (fulfilled && !called) {
            called = true;
            onResolve(value);
          }
          return this;
        };
        this.catch = function (callback) {
          onReject = callback;
          if (rejected && !called) {
            called = true;
            onReject(value);
          }
          return this;
        };
        try {
          executor(resolve, reject);
        } catch (error) {
          reject(error);
        }
      }

      PromisePolyFill.resolve = (val) =>
        new PromisePolyFill(function executor(resolve, _reject) {
          resolve(val);
        });

      PromisePolyFill.reject = (reason) =>
        new PromisePolyFill(function executor(resolve, reject) {
          reject(reason);
        });

      PromisePolyFill.all = (promises) => {
        let fulfilledPromises = [],
          result = [];
        function executor(resolve, reject) {
          promises.forEach((promise, index) =>
            promise
              .then((val) => {
                fulfilledPromises.push(true);
                result[index] = val;

                if (fulfilledPromises.length === promises.length) {
                  return resolve(result);
                }
              })
              .catch((error) => {
                return reject(error);
              })
          );
        }
        return new PromisePolyFill(executor);
      };
      
   //ONLY PROMISE.ALL
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

Throttling is used to call a function after a particular interval of time, calculated only after the first click is executed. Basically it restrain user to invoke any expensive function continously.

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


28. ### Web Works

URL with request header-> DNS Server -> ip Address -> server -> return data(html,css,js) -> browser -> parse tree(tokeniser) -> dom tree(HTML to interact on screen)
Script, link, style stops HTML parsing, script -> async/defer 
HTML- CSS parsing (CSSOM)
Render => DOM+CSSOM Multple trees: RenderObjects, RenderStyles, RenderLayers, LineBoxes 


**[⬆ Back to Top](#table-of-contents)**

35. ### React Calculator
```jsx harmony
      import React, { useState, useEffect } from "react";
      function App() {
        const [currentSum, setCurrentSum] = useState(0);
        const [clear, setClear] = useState(false);
        useEffect(() => {
          document.querySelector("#result").value = "";
        }, []);
        useEffect(() => {
          if (clear) document.querySelector("#result").value = "";
        });
        const Calc = (e) => {
          e.preventDefault();
          console.log(e.target.id);
          if (clear) setClear(false);
          let currentNum = document.querySelector("#num").value;
          if (currentNum === "") return;
          let sum;
          if (e.target.id === "add") sum = currentSum + parseInt(currentNum, 10);
          else if (e.target.id === "subtract")
            sum = currentSum - parseInt(currentNum, 10);
          else if (e.target.id === "multiply")
            sum = currentSum * parseInt(currentNum, 10);
          setCurrentSum(sum);
          document.querySelector("#num").value = "";
        };
        const Clear = (e) => {
          e.preventDefault();
          document.querySelector("form").reset();
          setClear(true);
          setCurrentSum(0);
        };
        return (
          <div className="App">
            <form>
              <input type="text" id="result" value={currentSum} readOnly />
              <input type="text" id="num" placeholder="enter a number" />
              <button id="add" onClick={Calc}>
                Add
              </button>
              <button id="subtract" onClick={Calc}>
                Subtract
              </button>
              <button id="multiply" onClick={Calc}>
                Multiply
              </button>
              <button onClick={Clear}>Clear</button>
            </form>
          </div>
        );
      }

      export default App;
```
**[⬆ Back to Top](#table-of-contents)**


36. ### React Ratings Star
```jsx harmony
   //app.js
   import "./styles.css";
   import Rate from "./Rate";
   import React, { useState } from "react";
   export default function App() {
     const [rating, setRating] = useState(0);
     return (
       <>
           <p>Rating component</p>
           <Rate rating={rating} onRating={(rate) => setRating(rate)} />
           <p>Rating - {rating}</p>
       </>
     );
   }
   //rate.js
   import React, { useMemo, useState } from "react";
   import PropTypes from "prop-types";
   import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
   import { faStar } from "@fortawesome/free-solid-svg-icons";
   const Rate = ({ count, rating, color, onRating }) => {
     const [hoverRating, setHoverRating] = useState(0);
     const getColor = (index) => {
       if (hoverRating >= index) {
         return color.filled;
       } else if (!hoverRating && rating >= index) {
         return color.filled;
       }
       return color.unfilled;
     };
     const starRating = useMemo(() => {
       return Array(count)
         .fill(0)
         .map((_, i) => i + 1)
         .map((idx) => (
           <FontAwesomeIcon
             key={idx}
             className="cursor-pointer"
             icon={faStar}
             onClick={() => onRating(idx)}
             style={{ color: getColor(idx) }}
             onMouseEnter={() => setHoverRating(idx)}
             onMouseLeave={() => setHoverRating(0)}
           />
         ));
     }, [count, rating, hoverRating]);
     return <div>{starRating}</div>;
   };
   Rate.propTypes = {
     count: PropTypes.number,
     rating: PropTypes.number,
     onChange: PropTypes.func,
     color: PropTypes.shape({
       filled: PropTypes.string,
       unfilled: PropTypes.string
     })
   };
   Rate.defaultProps = {
     count: 5,
     rating: 0,
     color: {
       filled: "#f5eb3b",
       unfilled: "#DCDCDC"
     }
   };
   export default Rate;
```
**[⬆ Back to Top](#table-of-contents)**


37. ### React Input Search Filter
```jsx harmony
   import React, { useEffect } from "react";
   import ReactDOM from "react-dom";
   const people = ["Siri","Alexa","Google","Facebook","Twitter","Linkedin"];
   function App() {
     const [searchTerm, setSearchTerm] = React.useState("");
     const [searchResults, setSearchResults] = React.useState([]);
     const handleChange = (e) => setSearchTerm(e.target.value);
     useEffect(() => {
       const results = people.filter((person) =>
         person.toLowerCase().includes(searchTerm)
       );
       setSearchResults(results);
     }, [searchTerm]);
     return (
       <div className="App">
         <input
           type="text"
           placeholder="Search"
           value={searchTerm}
           onChange={handleChange}
         />
         <ul>
           {searchResults.map((item) => (
             <li>{item}</li>
           ))}
         </ul>
       </div>
     );
   }
   const rootElement = document.getElementById("root");
   ReactDOM.render(<App />, rootElement);

```
**[⬆ Back to Top](#table-of-contents)**
