let arr = [1,2,3,4,5,6,7,8,9,6,554,67,9];

const chunkArr =(arr,n)=>{
  let res = [];
  for(let i=0; i<arr.length; i++){
    let temp = [];
    for(let j=i; j<i+n; j++){
      if(arr[j])
      temp.push(arr[j]);
    }
    res.push(temp);
    i+=n-1;
  }
  return res;
}

console.log(chunkArr(arr,3));

const chunkArr =(arr,n)=>{
  let chunked = [];
  for(let el of arr){
    let last = chunked[chunked.length-1];
    if(!last || last.length === n)
      chunked.push([el])
     else 
      last.push(el)
    
  }
  return chunked;
}

console.log(chunkArr(arr,3));
