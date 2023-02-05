| No. | Questions |
| --- | --------- |
|1  | [Array Questions: Unique elements](#array-questions-unique-elements) |
|2  | [Array Questions: Nested array to single array](#array-questions-nested-array-to-single-array) |
|3  | [Array Questions: Anagrams in a array of strings](#array-questions-anagrams-in-a-array-of-strings) |
|4  | [Array Questions: Return 2 indices from an array, sum of their elements is= to given number?](#what-is-the-difference-between-element-and-component) |
|5  | [Async Await Promise](#async-await-promise) |
|6  | [Async defer](#async-defer) |
|6  | [CSS](#css) |
|7  | [Closures](#closures) |
|8  | [Currying](#currying) |
|9  | [Call, apply, bind](#call-apply-bind) |
|10 | [Debouncing](#debouncing) |
|11 | [Event Bubbling Capturing Delegation](#event-bubbling-capturing-delegation) |
|14 | [Hoisting](#hoisting) |
|15 | [Optimization](#optimization) |
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
|26 | [Prototypical inheritance](#prototypical-inheritance)
|27 | [String Questions: Reverse every word](#string-questions-reverse-every-word) |
|28 | [Throttling](#throttling) |
|28 | [Web Works](#web-works) |
|29 | [Object Questions:](#object-questions) |
|30 | [Output Questions](#output-questions) |
|31 | [Code FizzBuzz](#code-fizz-buzz) |
|32 | [Code Minesweeper](#code-minesweeper) |
|33 | [Code Liked List](#code-linked-list) |
|34 | [Code Longest Palindrome](#code-longest-palindrome) |
|34 | [Code Reverse String Number](#code-reverse-string-number) |
|34 | [Code Reverse Words](#code-reverse-words) |
|34 | [Code Minimum Platform](#code-minimum-platform) |
|34 | [Code Sort 012](#code-sort-012) |
|34 | [Code Count Frequency](#code-count-frequency) |
|35 | [React: Calculator](#react-calculator)
|36 | [React: Ratings Star](#react-ratings-star)
|37 | [React: Input Search Filter](#react-input-search-filter)
|38 | [React: Adding input to array](#react-adding-input-to-array)
|38 | [React: Useref Usememo Usecallback](#react-useref-usememo-usecallback)
|39 | [React: Learning](#react-learning)
|40 | [React Form with Validation](#react-form-with-validation) |


Modules:
JS modules are the most prevalently used design patterns for keeping particular pieces of code independent of other components. 
basically Like classes, encapsulation - protecting states and behaviors from being accessed from other classes.
Modules should be (IIFE) to allow for private scope
Revealing Module Pattern. The purpose is to maintain encapsulation and reveal certain variables and methods returned in an object literal.

* ES6 modules are pre-parsed in order to resolve further imports before code is executed.
* CommonJS modules load dependencies on demand while executing the code.
* knockout js


Observer:
 if an object is modified it broadcasts to dependent objects that a change has occurred. Example of MVC,
The view updates when the model changes.
subject, observer, and concrete objects. The subject has references to concrete observers to notify changes. Observer object is an abstract class that allows for the concrete observers to implements the notify method.
disadvantage is a drop in performance as the number of observers increased. famous observers is watchers
we can watch variables, functions, and objects. The $$digest cycle runs and notifies each of the watchers with the new values whenever a scope object is modified.
In AngularJS, a subscriber ‘subscribes’ to an event using $on('event’, callback), and a publisher 'publishes’ an event using $emit('event’, args) or $broadcast('event’, args).

Prototype
The Prototype design pattern relies on JS prototype inheritence. The prototype model is used mainly for creating objects in performance-intensive situations.

SINGLETON
A Singleton only allows for a single instantiation, but many instances of the same object. The Singleton restricts clients from creating multiple objects, after the first object created, it will return instances of itself.
One example is using an office printer. If there are ten people in an office, and they all use one printer, ten computers share one printer (instance). By sharing one printer, they share the same resources.


1. ### Array Questions: Unique elements

```jsx harmony
   const a = [1,1,2,3,3,4,5,6,6]
   // O(n2) complexity
     function  printDistinct(arr, n){
          for (let i=0; i<n; i++){
              var j; // Check if the picked element is already printed
              for (j=0; j<i; j++)
                 if (arr[i] == arr[j])
                     break;
              // If not printed earlier, then print it
              if (i == j)
                console.log(arr[i] + " "); }
          }
      arr = new Array(6, 10, 5, 4, 9, 120, 4, 6, 10);
      n = arr.length;
      printDistinct(arr, n);
   
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
    //O(N log N)
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

   //O(n) solution
   function flatten_linear(items) {
     const flat = [];
     // do not call the whole function recursively
     // that's this mule function's job
     function inner(input) {
        if (Array.isArray(input))
           input.forEach(inner);
        else
           flat.push(input);
     }
     // call on the "root" array
     inner(items);  
     return flat;
   }
   console.log(flatten_linear(arr)); 

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

5. ### Async Await Promise

The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
 ```jsx harmony
      async function funcName(url){
       const response = await fetch(url);
       var data = await response.json();
       }

   function resolveAfter2Seconds() {
     return new Promise(resolve => {
       setTimeout(() => {
         resolve('resolved');
       }, 2000);
     });
   }

   async function asyncCall() {
     console.log('calling');
     const result = await resolveAfter2Seconds();
     console.log(result);
     // expected output: "resolved"
   }

   asyncCall();

   //More examples
   let promise = new Promise(function(resolve, reject) {
     resolve("done");

     reject(new Error("…")); // ignored
     setTimeout(() => resolve("…")); // ignored
   });

   const characters = fetch('https://swapi.dev/api/people');
   characters
     .then (data => data.json()) 
     .then (data => console.log(data))
     .catch(error => console.error(error)) 

```

**[⬆ Back to Top](#table-of-contents)**

6. ### Async Defer

NORMAL: HTML Parsing stops when SCRIPT tag is encountered, fetch script, parse script and then HTML pasring continues

ASYNC: SCRIPT fetch from the server with HTML parsing(asynchronously), stops HTML parsing when fetching is done, execute SCRIPT, after execution completes HTML parsing continues

DEFER: SCRIPT fetch from the server with HTML parsing(asynchronously), but only execute when HTML parsing is completed

**[⬆ Back to Top](#table-of-contents)**


6. ### CSS
```jsx harmony
   css specificity, Inline -> ID -> Classes, attribute, pseudo  -> elements, pseudo
   //Align item in middle,  
   .center {
     display: flex;
     justify-content: center;
     align-items: center;
     height: 200px;
     border: 1px solid black;
   }
   .center { 
     height: 200px;
     position: relative;
     border: 1px solid black; 
   }
   .center p {
     margin: 0;
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
   }
   <div class="center">
     <p>centered.</p>
   </div>
   //POSITION
   static	Default value. Elements render in order, as they appear in the document flow
   absolute	The element is positioned relative to its first positioned (not static) ancestor element
   fixed	The element is positioned relative to the browser window
   relative	The element is positioned relative to its normal position, so "left:20px" adds 20 pixels to the element's LEFT position
   sticky	The element is positioned based on the user's scroll position
   //DISPLAY
   inline	Displays an element as an inline element (like <span>). Any height and width properties will have no effect
   block	Displays an element as a block element (like <p>). It starts on a new line, and takes up the whole width
   flex	Displays an element as a block-level flex container
   grid	Displays an element as a block-level grid container
   inline-block	Displays an element as an inline-level block container. The element itself is formatted as an inline element, but you can apply height and width    values
   inline-flex	Displays an element as an inline-level flex container
   inline-grid	Displays an element as an inline-level grid container
   inline-table	The element is displayed as an inline-level table
   list-item	Let the element behave like a <li> element
   table	Let the element behave like a <table> element
```
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
 
 
16. ### Optimization

Reduce the Number of HTTP Requests 
Http2 multiple requests same time
Async defer
Compress js css Single bundle
Optimizing image size, image according to screen resolution
Use CDN
Improve ttfb time to first byte, server framework loopback
Link rel=dns-prefetch, preconnect, prefetch, prerender
Tree shaking in webpage during minification production mode
dead code elimination 
Use exports true using terser
Package json side effects false
Array regex
/#_PURE_/
 
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
         acc = acc ? callback(acc,this[i], i, this) : this[i];
      } 
      return acc;
    }
    values.customReduce((acc,curr,index,arr) => {acc*curr},1) //50
```
**[⬆ Back to Top](#table-of-contents)**

26. ### Prototypical inheritance

As we know JS has only one construct: objects. So to comply with OOPs technique of inheritance
Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. And null has no prototype, and acts as the final stop in this prototype chain.

**[⬆ Back to Top](#table-of-contents)**


28. ### String Questions Reverse Every Word

```jsx harmony

   function wordsReverser(string){
   return string.split("").reverse().join("").split(" ").reverse().join(" ")  
   }
   
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

29. ### Object Questions
A deep copying means that value of the new variable is disconnected from the original variable while a shallow copy means that some values are still connected to the original variable.

```jsx harmony
   const person = {
       firstName: 'John',
       lastName: 'Doe'
   };

   // using spread ... Shallow
   let p1 = {...person};

   // using  Object.assign() method Shaloow
   let p2 = Object.assign({}, person);

   // using JSON Deep Copy
   let p3 = JSON.parse(JSON.stringify(person));
```
**[⬆ Back to Top](#table-of-contents)**

30. ### Output Questions

```jsx harmony
   for (var i = 0; i < 10; i++) {
     setTimeout(() => {
      console.log(i)
     })
   }
   // 10 times 10, let to rectify
   
   var a = 5;
   var main = function() {
     var a = 10;
     setTimeout(() => {
       a = 30;
     });
     var side = function() {
       console.log(a);
     }
     return side;
   }
   var side = main();
   a = 20;
   side();
   //10

   setTimeout(() => {
     console.log(5);
   }, 10);
   for (var i = 0; i < 1000; i++) {
     console.log(i)
   }
   // 0 to 999 then 5
   
   for (var i = 0; i < 10; i++) {
     function log(i) {
       console.log(i);
     }
     setTimeout(log.bind(null, i))
   }
   // 0 to 9
   
   var obj = {
     value: 10,
     a: function() {
       console.log(this.value);
       var b = function() {
         console.log(this.value);
       }
       b();
     }
   }
   obj.a();
   // 10, undefined
   
   String.prototype.alternate = function() {return 'HloWrd'};
   console.log('Hello World!'.alternate()); // HloWrd

```
**[⬆ Back to Top](#table-of-contents)**

31. ### Code Fizz Buzz

```jsx harmony
  for (var i=1; i<=100; i++)
    {
        if (i%15 === 0)   
            console.log("FizzBuzz" + " ");
        else if (i%3 === 0)
            console.log("Fizz" + " "); 
        else if (i%5 === 0)                   
            console.log("Buzz" + " ");              
        else      
            console.log(i + " ");              
    }
   for (var i=1; i<=100; i++)
       {
         var result='';
           if (i%3 === 0){ result += 'Fizz ';  }
           if (i%5 === 0){ result += 'Buzz ';  }
         if(result === ''){ result = i; }
         console.log(result);       
       }

```
**[⬆ Back to Top](#table-of-contents)**

32. ### Code Minesweeper

```jsx harmony
    <div class="container">
       <div class="grid"></div>
     </div>
   .grid {
     height: 400px;
     width: 400px;
     display: flex;
     flex-wrap: wrap;
     background-color: grey;
   }
   .grid div {
     height: 40px;
     width: 40px;
   }
   .bomb {
     background-color: red;
   }
   document.addEventListener('DOMContentLoaded', () => {
     const grid = document.querySelector('.grid')
     let width = 10
     let totalBox = 100
     let bombCount = 25
     let squares = []
     //create Board
     function createBoard() {
       //First start writing loop then get shuffled game array with random bombs
       const bombsArray = Array(bombCount).fill('bomb')
       const emptyArray = Array(totalBox - bombCount).fill('valid')
       const gameArray = emptyArray.concat(bombsArray)
       const shuffledArray = gameArray.sort(() => Math.random() -0.5)

       for(let i = 0; i < totalBox; i++) {
         const square = document.createElement('div')
         square.setAttribute('id', i)
         square.classList.add(shuffledArray[i])
         grid.appendChild(square)
         squares.push(square)
       }
     }
     createBoard();
   });
    
    //THEN IN SECOND TIME:::::
       //add numbers to the corresponding grey boxes
       for (let i = 0; i < squares.length; i++) {
         let total = 0
         const isLeftEdge = (i % width === 0)
         const isRightEdge = (i % width === width -1)

         if (squares[i].classList.contains('valid')) {
           if (i > 0 && !isLeftEdge && squares[i -1].classList.contains('bomb')) total ++
           if (i > 9 && !isRightEdge && squares[i +1 -width].classList.contains('bomb')) total ++
           if (i > 10 && squares[i -width].classList.contains('bomb')) total ++
           if (i > 11 && !isLeftEdge && squares[i -1 -width].classList.contains('bomb')) total ++
           if (i < 98 && !isRightEdge && squares[i +1].classList.contains('bomb')) total ++
           if (i < 90 && !isLeftEdge && squares[i -1 +width].classList.contains('bomb')) total ++
           if (i < 88 && !isRightEdge && squares[i +1 +width].classList.contains('bomb')) total ++
           if (i < 89 && squares[i +width].classList.contains('bomb')) total ++
           squares[i].setAttribute('data', total)
         }
       }
     }
       createBoard();

   });
    

```
**[⬆ Back to Top](#table-of-contents)**

33. ### Code Linked List

```jsx harmony
     class LinkedList {
     constructor(value) {
       this.head = {
         value: value,
         next: null
       };
       this.tail = this.head;
       this.length = 1;
     }
     append(value) {
       const newNode = {
         value: value,
         next: null
       }
       this.tail.next = newNode;
       this.tail = newNode;
       this.length++;
       return this;
     }
     prepend(value) {
       const newNode = {
         value: value,
         next: null
       }
       newNode.next = this.head;
       this.head = newNode;
       this.length++;
       return this;
     }
     printList() {
       const array = [];
       let currentNode = this.head;
       while (currentNode !== null) {
         array.push(currentNode.value)
         currentNode = currentNode.next
       }
       return array;
     }
     insert(index, value) {
       //Check for proper parameters;
       if (index >= this.length) {
         console.log('yes')
         return this.append(value);
       }

       const newNode = {
         value: value,
         next: null
       }
       const leader = this.traverseToIndex(index - 1);
       const holdingPointer = leader.next;
       leader.next = newNode;
       newNode.next = holdingPointer;
       this.length++;
       return this.printList();
     }
     traverseToIndex(index) {
       //Check parameters
       let counter = 0;
       let currentNode = this.head;
       while (counter !== index) {
         currentNode = currentNode.next;
         counter++;
       }
       return currentNode;
     }
     remove(index) {
       // Check Parameters      
       const leader = this.traverseToIndex(index - 1);
       const unwantedNode = leader.next;
       leader.next = unwantedNode.next;
       this.length--;
       return this.printList();
     }
     reverse() {
       let currentNode = this.head;
       var previous = null;

       while (currentNode) {
         // save next or you lose it!!!
         var save = currentNode.next;
         // reverse pointer
         currentNode.next = previous;
         // increment previous to current node
         previous = currentNode;
         // increment node to next node or null at end of list
         currentNode = save;
       }
       this.tail = this.head;
       this.head = previous;
       return this.printList()
     }
     getAt(index){
          let currentNode = this.head;
          let count = 0;

             while (currentNode) {
               if (count == index) {
                 console.log(currentNode.value);
               }
               count++;
               currentNode = currentNode.next;
             }

             return null;
     }
     clearList(){
       this.head = null;
       this.length = 0;
     }
   }

   let myLinkedList = new LinkedList(10);
   myLinkedList.append(5)
   myLinkedList.append(16)
   myLinkedList.prepend(1)
   myLinkedList.insert(2, 99)
   myLinkedList.remove(2)
   console.log(myLinkedList.printList());
   console.log(myLinkedList.reverse()); 
   myLinkedList.getAt(2);
   myLinkedList.clearList();
     
```
**[⬆ Back to Top](#table-of-contents)**

34. ### Code Longest Palindrome 

```jsx harmony

// Brute Force longest palindrome subString with its length
// Time complexity: O(n^3). Space Complexity O(1)
function longestPalStr(str)
{
    // All subStrings of length 1 are palindromes
    let longPalLength = 1, start = 0;
    // Nested loop to mark start and end index
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            let flag = 1;
            // Check palindrome
            for (let k = 0; k < (j - i + 1) / 2; k++)
              if (str[i + k] != str[j - k])
                flag = 0;
             
            // Palindrome
            if (flag!=0 && (j - i + 1) > longPalLength) {
                start = i;
                longPalLength = j - i + 1;
            }
        }
    }
   let result ='';
   let end = start + longPalLength - 1;
    for (let i = start; i <= end; ++i){
      result += str[i]
    }
    console.log(result, longPalLength); 
}
longestPalStr("forgeeksskeegfor");

//Optimised Time complexity: O(n^2). Space Complexity O(1)
// First find all even length and odd length palindromes, keep track of the longest palindrome
// For Odd, fix i as the center and expand in both directions as i1 = i+1 and i2 = i-1
// Compare i1, i2 if equal then --i2 and ++i1 and find maximum length. 
// For Even,i1 = i and i2 = i-1, find maximum length.
function longestPalStrOp(str)
{
        let longPalLength = 1;
        let start = 0;
        let len = str.length;
        let low, high;
        //1by1 consider every char as center of even
  
        for (let i = 1; i < len; ++i)
        {
            //longest even palindrome
            low = i - 1;
            high = i;
            while (low >= 0 && high < len && str[low] == str[high]) {
                --low;
                ++high;
            }
             ++low;
            --high;
             if (str[low] == str[high] && high - low + 1 > longPalLength) {
                start = low;
                longPalLength = high - low + 1;
            }
      
            // longest odd length pal with center as i

            low = i - 1;
            high = i + 1;
            while (low >= 0 && high < len && str[low] == str[high]) {
                --low;
                ++high;
            }
            ++low;
            --high;
             if (str[low] == str[high] && high - low + 1 > longPalLength) {
                start = low;
                longPalLength = high - low + 1;
            }
        }
   let result ='';
   let end = start + longPalLength - 1;
    for (let i = start; i <= end; ++i){
      result += str[i]
    }
    console.log(result, longPalLength); 
}
longestPalStrOp("forgeeksskeegfor");

```
**[⬆ Back to Top](#table-of-contents)**

34. ### Code Reverse String Number 

```jsx harmony
      function customRevStr(str){
        var r = "";
        for(var i = str.length - 1; i >= 0; i--){
          r += str.charAt(i);
        }
        return r;
      }
      console.log(customRevStr("jhbh"));

      function customRevNum(number) {
       var reversed = 0;
      //  var exponent = number.indexOf('.');
      //  if (exponent !== -1) {number *= Math.pow(10, number.length - exponent - 1);}
       while (number != 0) {
        reversed *= 10;
        reversed += number % 10;
        number -= number % 10;
        number /= 10;
       }
      //  if (exponent !== -1) {reversed /= Math.pow(10, exponent);}
       return reversed;
      }
      console.log(customRevNum(12345));

```
**[⬆ Back to Top](#table-of-contents)**


34. ### Code Reverse Words

```jsx harmony
   function reverse(str,start,end){
         let temp;
         while (start <= end)
         {
            temp = str[start];
            str[start]=str[end];
            str[end]=temp;
            start++;
            end--;
         }
      }
      function reverseWords(s){
         s=s.split("");
         let start = 0;
         for (let end = 0; end < s.length; end++){
            if (s[end] == ' '){
               reverse(s, start, end);
               start = end + 1;
            }
         }
         reverse(s, start, s.length - 1);
         reverse(s, 0, s.length - 1);
         return s.join("");
       }
   console.log(reverseWords("i like this program very much "));

```
**[⬆ Back to Top](#table-of-contents)**


34. ### Code Minimum Platform

```jsx harmony
      //Run 2 nested loops, outer loop from start to end and inner from i+1 to end.
      // For every iteration of outer loop find the count of intervals that intersect with the current interval.
      // Update the answer with the maximum count of overlap in each iteration of the outer loop.
      //Two nested loops,time complexity O(n^2).Space Complexity: O(1)
      function max(a,b) {
         if(a==b){return a;}
         else{
            if(a>b){return a;}
            else{return b;} 
          }
      }
      // Returns minimum number of platforms required
      function findPlatform( arr, dep, n) {
         // plReq => no. of platforms needed at a time
         var plReq = 1, result = 1;
         var i = 1, j = 0;
         // run a nested loop to find overlap
         for (var i = 0; i < n; i++) {
            // minimum platform
            plReq = 1;
            for (var j = i + 1; j < n; j++) {
               // check for overlap
            if ((arr[i] >= arr[j] && arr[i] <= dep[j]) ||
            (arr[j] >= arr[i] && arr[j] <= dep[i]))
                  plReq++;
            }
            // update result
            result = max(result, plReq);
         }
         return result;
      }
      var arr = [ 900, 940, 950, 1100, 1500, 1800 ];
      var dep = [ 910, 1200, 1120, 1130, 1900, 2000 ];
      var n =6;
      console.log(findPlatform(arr, dep, n));


      //consider all events in sorted order. Once the events are in sorted order, 
      //trace no of trains at any time keeping track of trains that arrived, but not departed.
      //Total platforms at any time can be obtained by subtracting total departures from total arrivals by that time.
      // Create two pointers i=0, and j=0 and a variable to store ans and current count plat
      // Run a loop while i<n and j<n and compare the ith element of arrival array and jth element of departure array.
      // If the arrival time is less than or equal to departure then one more platform is needed so increase the count,
      // plat++ and increment i Else if the arrival time greater than departure then one less platform is needed 
      //so decrease the count, i.e. plat– and increment j
      //One traversal O(n) of both the array is needed after sorting O(N * log N), so the time complexity is O(N * log N).

      function findPlatform(arr, dep, n)
      {
         arr = arr.sort(); dep = dep.sort();
         let plat_needed = 1; let result = 1; let i = 1;let j = 0;
         while (i < n && j < n) {
            // If next event in sorted order is arrival, increment count of platforms needed
            if (arr[i] <= dep[j]) {
               plat_needed++;
               i++;
            }
            // Else decrement count of platforms needed
            else if (arr[i] > dep[j]) {
               plat_needed--;
               j++;
            }
            // Update result if needed
            if (plat_needed > result)
               result = plat_needed;
         }
         return result;
      }
      var arr = [ 900, 940, 950, 1100, 1500, 1800 ];
      var dep = [ 910, 1200, 1120, 1130, 1900, 2000 ];
      var n =6;
      console.log(findPlatform(arr, dep, n));
```
**[⬆ Back to Top](#table-of-contents)**

34. ### Code Sort 012

```jsx harmony
   //It requires two traversals of array.
      function sort012(arr, n){
            let count0 = 0, count1 = 0; let count2 = 0;
            for (let i = 0; i < n; i++) {
               if (arr[i] == 0){count0++;}
               if (arr[i] == 1){count1++;}
               if (arr[i] == 2){count2++;}
            }
            // Putting the 0,1,2 in the array
            for (let i = 0; i < count0; i++){arr[i] = 0;}	
            for (let i = count0; i <(count0 + count1); i++){arr[i] = 1;}
            for (let i = (count0 + count1);i < n; i++){arr[i] = 2;}
            console.log(arr)
         }
      let arr = [ 0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1 ];
      let n = 12;
      sort012(arr, n);

      // Traverse the array from start to end and mid is less than high. (Loop counter is i)
      // If the element is 0 then swap the element with the element at index low and update 
      //low = low + 1 and mid = mid + 1
      // If the element is 1 then update mid = mid + 1
      // If the element is 2 then swap the element with the element at index high and update 
      //high = high – 1 and update i = i – 1. As the swapped element is not processed
      //Time Complexity: O(n). Only one traversal of the array is needed
      function sort012(a,arr_size){
            let lo = 0;let hi = arr_size - 1;let mid = 0;let temp = 0;
              while (mid <= hi){
                  if(a[mid] == 0){
                      temp = a[lo];
                      a[lo] = a[mid];
                      a[mid] = temp;
                      lo++;
                      mid++;
                  }
                  else if(a[mid] == 1){mid++;}
                  else{
                      temp = a[mid];
                      a[mid] = a[hi];
                      a[hi] = temp;
                      hi--;
                  }   
              }
            console.log(a)
         }
      let arr = [ 0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1 ];
      let n = 12;
      sort012(arr, n);

```
**[⬆ Back to Top](#table-of-contents)**

34. ### Code Count Frequency
```jsx harmony
   // O(n) extra space and O(n) time
      function findCounts(arr,n){
         let hash = new Array(n); // Hashmap
         for(let i=0;i<n;i++){hash[i]=0;}
         let i = 0;	
         while (i < n){
            hash[arr[i] - 1]++; // Update the frequency of array[i]
            i++; // Increase the index
         }
         for(i = 0; i < n; i++){console.log((i + 1) + " -> "+hash[i]);}
      }
      let arr = [ 2, 3, 3, 2, 5 ];
      findCounts(arr, arr.length);

      // The idea is to traverse the given array, use elements as an index and store their 
      // counts at the index. Consider the basic approach, a Hashmap of size n is needed 
      // and the array is also of size n. So the array can be used as a hashmap, all the 
      // elements of the array are from 1 to n, i.e. all are positive elements. So the 
      // frequency can be stored as negative. This might lead to a problem. Let i-th 
      // element be a then the count should be stored at array[a-1], but when the 
      // frequency will be stored the element will be lost. To deal with this problem, 
      // first, replace the ith element by array[a-1] and then put -1 at array[a-1]. 
      // So our idea is to replace the element by frequency and store the element 
      // in the current index and if the element at array[a-1] is already negative, 
      //   then it is already replaced by a frequency so decrement array[a-1].
      // O(1) no extra space and O(n) time


      function findCounts(arr, n){
         let i = 0;
         while (i < n){
            // If this element is already processed,then nothing to do
            if (arr[i] <= 0){
               i++;
               continue;
            }
            // Find index corresponding to this element
            let elementIndex = arr[i] - 1;
            // If the elementIndex has an element that is not processed yet, then first store
            // that element to arr[i] so that we don't lose anything.
            if (arr[elementIndex] > 0){
               arr[i] = arr[elementIndex];
               // After storing arr[elementIndex], change it to store initial count of 'arr[i]'
               arr[elementIndex] = -1;
            }
            else{
               // If this is NOT first occ of arr[i], then decrement its count.
               arr[elementIndex]--;
               // And initialize arr[i] as 0 means the element 'i+1' is not seen so far
               arr[i] = 0;
               i++;
            }
         }
          for(let j = 0; j < n; j++){console.log((j + 1) + " -> "+Math.abs(arr[j]));}
      }

      let arr = [ 2, 3, 3, 2, 5 ];
      findCounts(arr, arr.length);

```
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


38. ### React Adding input to array
```jsx harmony
   import {useState} from 'react';
   export default function App() {
     const [arr, setArray] = useState(['nitin','grover','shanta']);
     const [val, setValue] = useState();
     const handleClick = (e) => {
       e.preventDefault();
       setArray(prevState => [...prevState, val])
     }
     const appendList = (e) => {
       setValue(e.target.value)
     }
     return (
       <div className="App">
         <input type="text" value={val} onChange={(e) => appendList(e)} />
         <button type="submit" onClick={(e) => handleClick(e)}> Submit</button>
         <ul>
         { arr.map((el, index) => {
           return( <li key={index}>{el}</li> )
         })
         }
         </ul>
       </div>
     );
   }
```
**[⬆ Back to Top](#table-of-contents)**

38. ### React UseRef UseMemo UseCallback
```jsx harmony
      import React, { useEffect, useRef } from "react";
      import Input from "./Input"; // new

      export default function App(props) {
        const userNameRef = useRef(null);
        const passwordRef = useRef(null);
        const submitBtnRef = useRef(null);

        useEffect(() => {
          userNameRef.current.focus();
        }, []);

        // This function is used to handle the key press.
        // Whenever user hits enter it moves to the next element
        const handleKeyPress = (e, inputType) => {
          if (e.key === "Enter") {
            switch (inputType) {
              // Checks if Enter pressed from the username field?
              case "username":
                // Moves the focus to the password input field
                passwordRef.current.focus();
                break;
              // Checks if Enter pressed from the password field?
              case "password":
                // Moves the focus to the submit button
                submitBtnRef.current.focus();
                e.preventDefault();
                break;
              default:
                break;
            }
          }
        };

        // Function to handle the submit click from the button
        const handleSubmit = () => {
          alert("submitted");
        };

        return (
          <div>
            {/* New. Using the Component instead of input element */}
            <Input
              type="text"
              name="username"
              ref={userNameRef}
              onKeyDown={(e) => handleKeyPress(e, "username")}
            />
            {/* New. Using the Component instead of input element */}
            <Input
              type="password"
              name="password"
              ref={passwordRef}
              onKeyDown={(e) => handleKeyPress(e, "password")}
            />
            <button ref={submitBtnRef} onClick={handleSubmit}>
              Login
            </button>
          </div>
        );
      }
      //INPUT.JS
      import React from "react";
      const Input = (props, ref) => {
        /* assigning the ref attribute in input and spreading 
      the other props which will contain type, name, onkeydown etc */
        return <input {...props} ref={ref} />;
      };
      // wrapping the Input component with forwardRef
      const forwardedRef = React.forwardRef(Input);
      export default forwardedRef;
      
      //USE MEMO
      import { useState, useMemo } from 'react';
      export function CalculateFactorial() {
        const [number, setNumber] = useState(1);
        const [inc, setInc] = useState(0);
        const factorial = useMemo(() => factorialOf(number), [number]);
        const onChange = event => {
          setNumber(Number(event.target.value));
        };
        const onClick = () => setInc(i => i + 1);
        return (
          <div>
            <input type="number" value={number} onChange={onChange} />
             {factorial}
            <button onClick={onClick}>Re-render</button>
          </div>
        );
      }
      function factorialOf(n) {
        return n <= 0 ? 1 : n * factorialOf(n - 1);
      }
      
      //USE CALBACK
      import { useCallback } from 'react';
      function MyComponent({ prop }) {
        const callback = () => {
          return 'Result';
        };
        const memoizedCallback = useCallback(callback, [prop]);
        return <ChildComponent callback={memoizedCallback} />;
      }
   
```
**[⬆ Back to Top](#table-of-contents)**

38. ### React Learning

The <Provider> component makes the Redux store available to any nested components that need to access the Redux store.Since any React component in a React Redux app can be connected to the store, most applications will render a <Provider> at the top level, with the entire app’s component tree inside of it.The Hooks and connect APIs can then access the provided store instance via React's Context mechanism.

   ReactDOM is a package that provides DOM specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements of the web page. ReactDOM provides the developers with an API containing methods like render(), findDOMNode(), unmountComponentAtNode(), hydrate(), createPortal()
Render a React element into the DOM in the supplied container and return a reference to the component (or returns null for stateless components). If the React element was previously rendered into container, this will perform an update on it and only mutate the DOM as necessary to reflect the latest React element using diffing algorithm

   createStore : Creates a Redux store that holds the complete state tree of your app. There should only be a single store in your app.Returns(Store): An object that holds the complete state of your app. The only way to change its state is by dispatching actions.
reducer (Function): A reducing function that returns the next state tree, given the current state tree and an action to handle.
To apply multiple store enhancers, you may use compose().

   Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.
predicate, // if specified this function will be called before each action is processed with this middleware.
diff = false: Boolean, // (alpha) show diff between states?
 logger = console: LoggerObject, // implementation of the `console` API.
The CSS box-sizing property allows us to include the padding and border in an element's total width and height. Default value is content-box

   <BrowserRouter>A <Router> that uses the HTML5 history API (pushState, replaceState and the popstate event) to keep your UI in sync with the URL.
Connect : The connect() function connects a React component to a Redux store.It provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store.It does not modify the component class passed to it; instead, it returns a new, connected component class that wraps the component you passed in.

 useCallback and useMemo both expect a function and an array of dependencies. The difference is that useCallback returns its function when the dependencies change while useMemo calls its function and returns the result. useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).


**[⬆ Back to Top](#table-of-contents)**

40. ### React Form with Validation

 ```jsx harmony
  import React, { useEffect, useState } from "react";

  function RegistrationView() {
    const [inputValues, setInputValue] = useState({
      fName: "",
      lName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    const [validation, setValidation] = useState({
      fName: "",
      lName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    //handle submit updates
    function handleChange(event) {
      const { name, value } = event.target;
      setInputValue({ ...inputValues, [name]: value });
    }

    const checkValidation = () => {
      let errors = validation;

      //first Name validation
      if (!inputValues.fName.trim()) {
        errors.fName = "First name is required";
      } else {
        errors.fName = "";
      }
      //last Name validation
      if (!inputValues.lName.trim()) {
        errors.lName = "Last name is required";
      } else {
        errors.lName = "";
      }

      // email validation
      const emailCond =
        "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
      if (!inputValues.email.trim()) {
        errors.email = "Email is required";
      } else if (!inputValues.email.match(emailCond)) {
        errors.email = "Please ingress a valid email address";
      } else {
        errors.email = "";
      }

      //password validation
      const cond1 = "/^(?=.*[a-z]).{6,20}$/";
      const cond2 = "/^(?=.*[A-Z]).{6,20}$/";
      const cond3 = "/^(?=.*[0-9]).{6,20}$/";
      const password = inputValues.password;
      if (!password) {
        errors.password = "password is required";
      } else if (password.length < 6) {
        errors.password = "Password must be longer than 6 characters";
      } else if (password.length >= 20) {
        errors.password = "Password must shorter than 20 characters";
      } else if (!password.match(cond1)) {
        errors.password = "Password must contain at least one lowercase";
      } else if (!password.match(cond2)) {
        errors.password = "Password must contain at least one capital letter";
      } else if (!password.match(cond3)) {
        errors.password = "Password must contain at least a number";
      } else {
        errors.password = "";
      }

      //matchPassword validation
      if (!inputValues.confirmPassword) {
        errors.confirmPassword = "Password confirmation is required";
      } else if (inputValues.confirmPassword !== inputValues.Password) {
        errors.confirmPassword = "Password does not match confirmation password";
      } else {
        errors.password = "";
      }

      setValidation(errors);
    };

    useEffect(() => {
      checkValidation();
    }, [inputValues]);

    const handleSubmit = (e) => {
      e.preventDefault();
    };

    return (
      <div>
        <div className="sign-up-form">
          <form
            id="registrationForm"
            action="/"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="form-control">
              <input
                placeholder="First Name"
                type="string"
                name="fName"
                id="fName"
                className="input-field"
                onChange={(e) => handleChange(e)}
                value={inputValues.fName}
              />
              {validation.fName && <p>{validation.fName}</p>}
              {validation.fName && console.log(validation)}
            </div>
            <div className="form-control">
              <input
                placeholder="Last Name"
                type="string"
                id="lName"
                name="lName"
                className="input-field"
                onChange={(e) => handleChange(e)}
                value={inputValues.lName}
              />
              {validation.lName && <p>{validation.lName}</p>}
            </div>
            <div className="form-control">
              <input
                placeholder="email"
                type="email"
                name="email"
                className="input-field"
                onChange={(e) => handleChange(e)}
                value={inputValues.email}
              />
            </div>
            {validation.email && <p>{validation.email}</p>}

            <div className="form-control">
              <input
                placeholder="password"
                type="password"
                name="password"
                className="input-field"
                onChange={(e) => handleChange(e)}
                value={inputValues.password}
                required
              />
              {validation.password && <p>{validation.password}</p>}
            </div>
            <div className="form-control">
              <input
                placeholder="confirm password"
                type="password"
                name="confirmPassword"
                className="input-field"
                onChange={(e) => handleChange(e)}
                value={inputValues.confirmPassword}
                required
              />
            </div>
            <button type="submit" id="submit-button">
              submit
            </button>
            <span className="form-input-login">
              Already have an account? Login <a href="#">here</a>
            </span>
          </form>
        </div>
      </div>
    );
  }

  export default RegistrationView;
```
**[⬆ Back to Top](#table-of-contents)**
