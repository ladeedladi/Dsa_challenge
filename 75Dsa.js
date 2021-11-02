Array
1. TwoSum
   let arr=[]
var twoSum = function(nums, target) {
    let arr=[]
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
            arr.push(i,j)
        } 
        }
       
    }
    return arr
};


2. Best Time to Buy and Sell Stock(121)
o(n^2) time and o(1) space
var maxProfit = function(prices) {
    let profit=0
    for(let i=0;i<prices.length;i++){
        for(let j=i+1;j<prices.length;j++){
            if(prices[i]<prices[j]){
                profit=Math.max(profit,prices[j]-prices[i])
            }
        }
    }
    return profit
};
or
var maxProfit = function(prices) {
    let minPro=Number.MAX_VALUE
    let maxPro=0
    for(let i=0;i<prices.length;i++){
        minPro=Math.min(minPro,prices[i])
        maxPro=Math.max(maxPro,prices[i]-minPro)
    }
    return maxPro
};
3. Contains Duplicate(.217)

var containsDuplicate = function(nums) {
    let set =new Set()
    for(let num of nums){
        if(set.has(num)){
            return true
        }
        set.add(num)
    }
      return false
  };
let nums=[1,2,3,4]
let arr=[]
let product=1
let count=0
for(let i=0;i<nums.length;i++){
    if(nums[i]==0){
        count++
    }
}
if(count===nums.length){
    let a=Array(nums.length).fill(0)
    console.log(a);
}


for(let i=0;i<nums.length;i++){

    for(let j=0;j<nums.length;j++){
       if(j!==i){
           product*=nums[j]
       }
       
    }
  console.log(product);
  arr.push(product)
  product=1
}
console.log(arr);

5.max SubArray
let nums=[-1]
console.log(nums.length);
let max=Number.NEGATIVE_INFINITY
let Maxsum=Number.NEGATIVE_INFINITY
console.log(max);
for(let i=0;i<nums.length;i++){
max=Math.max(nums[i],max+nums[i])
Maxsum=Math.max(Maxsum,max)
console.log(Maxsum);
}
6. max product subArray
let nums=
[-1,-2,-9,-6]
let min=nums[0]
let max=nums[0]
let Maxsum=nums[0]
for(let i=1;i<nums.length;i++){
    let temp=max*nums[i]
max=Math.max(nums[i],max*nums[i],min*nums[i])

min=Math.min(nums[i],nums[i]*min,temp)

Maxsum=Math.max(Maxsum,max)
}

console.log(Maxsum);