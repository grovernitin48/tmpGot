// Javascript Code to count number
    // of rectangles in N*M grid
     
    function rectCount(n, m){
        return parseInt((m * n * (n + 1) *
                        (m + 1)) / 4, 10);
    }


class pair{
    constructor(first,second){
        this.first = first;
        this.second = second;
    }
}
function count_number(N,M,A){
    let v = [];
    for (let i = 1; i * i <= A; i++){
        if (N % i === 0){
            let length = i;
            let breadth = A / i;
            if (length != breadth){
                v.push(new pair(length, breadth));
                v.push(new pair(breadth, length));
            }
            else{
                v.push(new pair(length, breadth));
            }
        }
    }
  
    let total = 0;
    for (let it=0;it< v.length;it++){
        let num1 = (Math.max(0, M - v[it].first + 1));
        let num2 = (Math.max(0, N - v[it].second + 1));
        total += (num1 * num2);
    }
    return total;
}

console.log(count_number(4, 4, 16));
