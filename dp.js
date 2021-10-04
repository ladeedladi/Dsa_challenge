//1.fibonocci 
let cache={}
const fib=(n)=>{
    if(n in cache)return cache[n]
    if(n<2){
        return n
    }
    
   cache[n]=fib(n-1)+fib(n-2)
   return cache[n]
}

console.log(fib(6));



2.grid traveler

const gridTraveler=(m,n,memo={})=>{
    let key=m+','+n
    if(key in memo)return memo[key]
    if(m===1 && n===1)return 1
    if(m===0 || n===0)return 0

    memo[key]= gridTraveler(m-1,n,memo)+gridTraveler(m,n-1,memo)
    return memo[key]
}


console.log(gridTraveler(18,18));

3.cansum

const cansum=(targetSum,numbers)=>{
    //base condition
if(targetSum===0)return true
// if it is negetive
if(targetSum<0)return false
//to iterate thrrough arrays
for(let num of numbers){
    let remainder=targetSum-num
    //if the basecase return true then it returns true
    if(cansum(remainder,numbers)===true){
        return true
    }
}
return false
}

console.log(cansum(7,[2,3]));
