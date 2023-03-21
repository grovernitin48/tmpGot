import React, { useState, useEffect } from "react";

export default function App() {
  const val = isNaN(localStorage.getItem('count'))
    ? 0 : localStorage.getItem('count');
  const [count, setCount] = useState(parseInt(val));
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
    if (count === 0) setDisabled(true);
    else setDisabled(false);
  }, [count]);

  return (
    <div className="App">
      <button
        disabled={disabled}
        onClick={() => setCount(count - 1)}>
        -
      </button>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  useEffect(() => {
    const getData = async () => {
      const res = fetch('https://dummyjson.com/products');
      const json = await res.json();

      setData(json.products);
    }
    getData();
  }, [])

  const temp = data.filter(item => item.title.toLowerCase().includes(searchTerm))

  return (
    <div className="App">
      <div>
        <input onChange={handleChange} value={searchTerm} />
      </div>
      <div className="items">
        <ul>
          {temp.map((item) => {
            return (
              <li key={item.id}>{item.title}</li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}


let str = "We promptly judged antique ivory buckles for the next Prize";
const checkPan = (str) => {
  let hashMap = {};

  for (let i of str) {
    if (i !== " ")
      hashMap[i.toLowerCase()] = hashMap[i] + 1 || 1;
  }

  return Object.keys(hashMap).length === 26 ? true : false;
}

console.log(checkPan(str));


const a = {
	c: {
		d: {
			e: {
				weight: '120',
				unit: 'KG'
			},
			name: '__name__'
		}
	}
}


function set(obj, path, value) {
    var schema = obj;  
    var pList = path.split('.');
    var len = pList.length;
    for(var i = 0; i < len-1; i++) {
        var elem = pList[i];
        if( !schema[elem] ) schema[elem] = {}
        schema = schema[elem];
    }

    schema[pList[len-1]] = value;
  
  return obj;
}

console.log(set(a,'c.d.e.unit','LB'))


/* Given a string as input, Return a string without duplicates in the same order of occurance appended with positions of first occurance of duplicated characters

Example:
Input  : Banananananananananananananana
Output : Ban12
*/

const filterUnique = (str)=>{
  let obj = {};
  let dup = [];
  
  for(let char of str){
    if(obj[char]){
      obj[char] = obj[char]+1;
      dup.unshift(char);
    } else {
      obj[char] = 1;
    }
  }
  
  const idx = [...new Set(dup)].map(el => str.indexOf(el)).join('');
  
  return Object.keys(obj).join('')+idx;
  
}

console.log(filterUnique('Banananananananananananananana'));
