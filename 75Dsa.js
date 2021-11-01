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