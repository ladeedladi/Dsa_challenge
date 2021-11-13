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


// 7. Find Minimum in Rotated Sorted Array(153.)
let  nums = [4,5,6,7,0,1,2]
let target = 2
var search = function(nums, target) {
  let left=0
  let right=nums.length-1
  while(left<right){
      const mid=Math.floor((left+right)/2)
      if(nums[mid]>nums[right]){
          left=mid+1
      }else{
          right=mid
      }
  }

  let start=left
  left=0
  right=nums.length-1
  if(target>= nums[start]  && target<=nums[right]){
      left=start
  }else{
      right=start
  }


while(left<=right){
    const mid=Math.floor((left+right)/2)
    if(nums[mid]==target){
        return mid
    }else if(nums[mid]>target){
     right=mid-1
    }else{
        left=mid+1
    }
}
return -1
}
console.log(search(nums,target)
);


//8 3Sum(15)
let nums = [-1,0,1,2,-1,-4]
var threeSum = function(nums) {
    if(nums.length===1)return []
    let res=[]
    let arr=nums.sort((a,b)=>a-b)
    for(let i=0;i<=nums.length-3;i++){
                if (arr[i] === arr[i - 1]) continue

        let l=i+1
        let r=nums.length-1
        while(l<r){
            let sum=arr[i]+arr[l]+arr[r]
            if(sum<0)l++
            else if(sum>0)r--
            else if(arr[i]!==arr[l]!==arr[r]){
                let a=[]
                a.push(arr[i],arr[l],arr[r])
                res.push(a)
                l++
                r--
            }
        }
    }
    let uniqueArray = Array.from(new Set(res.map(JSON.stringify)), JSON.parse)
    return uniqueArray
};

//9  Container With Most Water(11)

let  height = [1,2]

 let l=0
        let r=height.length-1
            let maxsum=0
            while(l<r){
                if(height[l]<height[r]){
                // let sum=Math.min(height[l],height[r])
                let sum=height[l]*(r-l)
                 maxsum=Math.max(maxsum,sum)
                //  console.log("up"+maxsum);
                l++
                }else{
                 let sum=height[r]*(r-l)
                 console.log(sum);
                 maxsum=Math.max(maxsum,sum)
                //  console.log("down"+maxsum);
                        r--
                }
            }
        console.log(maxsum);



//10 Count Items Matching a Rule(1773)
 var countMatches = function(items, ruleKey, ruleValue) {
    let count=0
    if(ruleKey=="type"){
       for(let item of items){
      if(item[0]==ruleValue){
          count++
      }
    }
    return count 
    }
        if(ruleKey=="color"){
       for(let item of items){
      if(item[1]==ruleValue){
          count++
      }
    }
    return count 
    }
        if(ruleKey=="name"){
       for(let item of items){
      if(item[2]==ruleValue){
          count++
      }
    }
    return count 
    }
    
};

let arr=[4 ,2, 3 ,-4, 3, -3]
let maxProduct=0
function nums(arr){
	let left=0
	let right=arr.length-1
while(left<right){
	if(arr[left]>arr[right]){
		maxProduct=Math.max(maxProduct,arr[left]*arr[right])
		left++
	}else{
		maxProduct=Math.max(maxProduct,arr[left]*arr[right])
		right--

	}
}
	return maxProduct
}
console.log(nums(arr)
);




LINKED LIST   

1.reverse a linked list(206)


var reverseList = function(head) {
    let p=head
  let prev=null
  let temp=null
  while(p){
      temp=p.next
      p.next=prev
      prev=p
      p=temp
      
  }
   return prev
};

//  2 Linked List Cycle(141.)
var hasCycle = function(head) {

    if(head==null)return false
    
   let slow=head
   let fast=head.next
   while(slow!=fast){
       if(fast==null || fast.next==null){
           return false
       }
       slow=slow.next
       fast=fast.next.next
   }
    
 return true
};
console.log(hasCycle([3,2,0,-4]));


3 Remove Nth Node From End of List(19)
var removeNthFromEnd = function(head, n) {
    
    let newNode= new ListNode(0)
    
    newNode.next=head
    
    let slowPointer=newNode
    let fastpointer=newNode
    
    for(let i=0;i<n+1;i++){
        fastpointer=fastpointer.next
    }
    
    while(fastpointer!==null){
        slowPointer=slowPointer.next
        fastpointer=fastpointer.next
    }
    
    slowPointer.next=slowPointer.next.next
    
    return newNode.next
};

4.Merge Two Sorted Lists(21)

var mergeTwoLists = function(l1, l2) {

    let tempNode =new ListNode(0)
    let cNode=tempNode
 
    while(l1!=null && l2!=null){
        if(l1.val<l2.val){
            cNode.next=l1
            l1=l1.next
        }else{
            cNode.next=l2
            l2=l2.next
        }
        cNode=cNode.next
         
    }
        console.log(tempNode)
 
    
     if(l1!=null){
         cNode.next=l1
     }
     if(l2!=null){
         cNode.next=l2
     }
     return tempNode.next
 };




to remove the dulpicate elements
let a=[1,1,2,2,3,3,4,4]
let set=new Set()


for(let i=0;i<a.length;i++){
    set.add(a[i])
}
console.log(set);

find duplicate ele in array

function findDuplicate(){
    let b=[]
    let a=[4,3,2,7,8,2,3,1]

   for(let i=0;i<a.length;i++){
    //    console.log(a[i]);
       let index=Math.abs(a[i])-1
       if(a[index]<0){
           b.push(index+1)
       }else{
           a[index]=-a[index]
       }

   }
   return b
}

console.log(findDuplicate());




//5 reorder linked list (143)

 var reorderList = function(head) {
    if(head==null || head.next==null)return 
    
    let fastpointer=head
    let slowpointer=head
    let l1=head
   let prev=null
    while(fastpointer!==null && fastpointer.next!==null){
        prev=slowpointer
        slowpointer=slowpointer.next
        fastpointer=fastpointer.next.next
    }
    prev.next=null
   
    let curr=slowpointer
    let previos=null
    while(curr!=null){
        let temp=curr.next
        curr.next=previos
        previos=curr
        curr=temp
        
    }
    
    
    while(l1!=null){
        let l1Next=l1.next
        let l2Next=previos.next
        
        l1.next=previos
        
        if(l1Next==null){
            break;
        }
        previos.next=l1Next
        
        l1=l1Next
        previos=l2Next
    }
    
   
};



6  Merge k Sorted Lists(23)

var mergeKLists = function(lists) {
   let sortedLists=[]
   let current=[]
 
   for(let i=0;i<lists.length;i++){
       
       current=lists[i]
       
       while(current){
           sortedLists.push(current.val)
           current=current.next
       }
   }
    
     sortedLists.sort((a,b)=>a-b)
     
     // console.log(sortedLists)
     let a=new ListNode(0)
     
     let arr=a
     
     for(let i=0;i<sortedLists.length;i++){
         arr.next= new ListNode(sortedLists[i])
         arr=arr.next
     }
     
     return a.next
 };