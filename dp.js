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


4.bestsum

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




5 .canConstruct

a base condotion -target==' return true
b find the matching prefix from the wordbank and remove from it
c if base condition is not met then return false after the for loop

function canContruct(target,wordBank,memo={}){
if(target==='')return true

if(target in memo)return memo[target]
for(let word of wordBank){
    //find the matching prefix from the wrdbank
    if(target.indexOf(word)==0){
        //to remove the suffix from target
        let suffix=target.slice(word.length)

        if(canContruct(suffix,wordBank,memo)===true){
            memo[target]=true
            return memo[target]
        }
    }
   
}

memo[target]=false
return memo[target]

}
  
console.log(canContruct("abcdef",["ab","abc","cd","def","abcd"]));
console.log(canContruct("eeeeeeeeeeeeeeeeeeeeeeeef",["e","ee","eee","eeeee","eeeeeee"]))


base case return 1 if the string is mt
init  a var count and assign it to 0
find the matching prefix dont return anything just call the fn and storethe value return in the variable count
so  if the base base is not met it will return 0 else return the count
6 count construct
function countContruct(target,wordBank,memo={}){
   if(target==='')return 1
    if(target in memo)return memo[target]
    let count=0
   for(let word of wordBank){
       if(target.indexOf(word)===0){
           
           count+=countContruct(target.slice(word.length),wordBank,memo) 
       }
   }
   memo[target]=count
   return count
    }
    console.log(countContruct("abcdef",["ab","abc","cd","def","abcd"]));
    console.log(countContruct("eeeeeeeeeeeeeeeeeeeeeeeef",["e","ee","eee","eeeee","eeeeeee"]))





7.all construct.find all the possible solution and add it to the a 2d arrray
1.base case return [[]] if target is ''
2.just as prev 
3 add the words in to targetWays and spread it to add future words and push it into targetWays to get the ultimate result
else single output will be returned
4  target ways is the output from branches so push it to another array "result" by spearing to avoig 3d array.so even if there is no
matches the result will return mt
function allConstruct(target,wordBank,memo={}){

    if(target==='')return [[]]
    if(target in memo) return memo[target]
let result=[]
    for(let word of wordBank){
        if(target.indexOf(word)===0){
            const suffixWays=allConstruct(target.slice(word.length),wordBank,memo)
            const targetWays=suffixWays.map(way=>[word,...way])
          //  console.log('targetWays :');
           result.push(...targetWays)
        }
    }

  memo[target]=result
  return result
}
console.log(allConstruct('ppppppppppppppple',['p','p','p','p']));
console.log(allConstruct('purple',['purp','p','ur','le','purpl']));

8.fib using tabulation
1.create ana array of length n and fill with 0
2.add ith value to the i+1 and i+2 also preassign the consition value like "table[1]=1"

const fib=(n)=>{
let table=Array(n+1).fill(0)
table[1]=1
for(let i=0;i<=n;i++){
    table[i+1]+=table[i]
    table[i+2]+=table[i]
}
return table[n]
}
console.log(fib(6));
console.log(fib(50));
