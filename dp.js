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