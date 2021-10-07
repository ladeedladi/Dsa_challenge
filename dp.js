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

const cansum=(targetSum,numbers,memo={})=>{
    //base condition
if(targetSum===0)return true
// if it is negetive
if(targetSum<0)return false

if(targetSum in memo)return memo[targetSum]
//to iterate thrrough arrays
for(let num of numbers){
    let remainder=targetSum-num
    //if the basecase return true then it returns true
    if(cansum(remainder,numbers,memo)===true){
      memo[targetSum]=true
      return memo[targetSum]
    }
}
memo[targetSum]=false
return memo[targetSum]
}

console.log(cansum(7,[2,3]));
console.log(cansum(300,[7,14]));


4.howsum
const howsum=(target,numbers,memo={})=>{
  if(target===0)return []
  if(target in memo)return memo[target]
if(target<0){
  return null
}

for(let num of numbers){
  let remainder=target-num;
  const result=howsum(remainder,numbers)
if(result!==null){
memo[target] =[...result,num]
return memo[target]
}

}


memo[target]=null
return null
}
console.log(howsum(7,[5,3,4]));
console.log(howsum(300,[7,14]));


bestsum

function bestSum(target,numbers,memo={}){
    if(target in memo) return memo[target]
    if(target===0)return []
if(target<0)return null

let bestOfSum=null

for(let num of numbers){
   let remainder=target-num
  let res= bestSum(remainder,numbers)
  
  if(res!==null){
      let combination=[...res,num]
      if(bestOfSum==null || combination.length<bestOfSum.length){
          bestOfSum=combination
      }
    }

}
memo[target]=bestOfSum
return bestOfSum


}
console.log(bestSum(8,[2,3,5]));
console.log(bestSum(8,[1,4,5]));
console.log(bestSum(100,[1,2,5,25]));