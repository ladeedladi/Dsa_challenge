//string dsa qns

1.print all the subsequence of a string
let ar=[]
function subseq(init,fin){

if(init.length===0){
    ar.push(fin)
    return
}

let newfin=fin
newfin+=init.charAt(0)
let newInit=init.substring(1,init.length)
subseq(newInit,newfin)
subseq(newInit,fin)
}
subseq("abc","")
console.log(ar);



2.find the permuation of the string "abc"

let str="abc"
let final=""
let ar=[]
function permut(init,fin,i){
    if(init.length===0){
    ar.push(fin)
   
    }
    if(i===init.length){
        return
    }
    
let newfin=fin
newfin+=init.charAt(i)
let newInit=init.substring(0,i)+init.substring(i+1)
permut(newInit,newfin,0)
permut(init,fin,i+1)
}
permut("abc","",0)
console.log(ar);


3.Split the binary string into substrings with equal number of 0s and 1s

let str="0100110101000111"
let prev=str[0]
let countPrev=1
let count=0
function bss(s){

    for(let i=1;i<s.length;i++){
        if(s[i]==prev){
              countPrev++
              prev=s[i]
             
              if(countPrev==0){
                count++
            }
        }else{
            countPrev--
           
            if(countPrev==0){
                count++
            }
        }
    }

}
bss(str)
console.log(count);



4.paranthesis checker
let str="[())]"
let arr=[]
let count=0
function para(s){

for(let i=0;i<s.length;i++){
    if(s[i]=='{'||s[i]=="["||s[i]=="("){
        
     arr.push(s[i])
     count++
     
    }else if(s[i]=='}' && arr[count-1]=="{" || s[i]==']'&& arr[count-1]=="[" ||s[i]==')'&& arr[count-1]=="(" ){
        arr.pop(arr[count-1])
        count--
    }else{
        return "no way"
    }
}
}


function check(){
    if(para(str)=="no way"){
        console.log("false");
    }else{
        console.log("true");
    }
}
check()



5.pattern searching

function check(txt,pat){
let a=[]

if(txt.includes(pat)){
console.log(txt.indexOf(pat));
}
}
check(txt,pat)



5.pattern searching  

the above solution cant find if a pattern is repeating multiple time so regex is the best way to find a repeating pattern

let txt= "THIS TEST IS TEST A  TEST"
let pat = "TEST"
    txt=txt.match(/TEST\1*/g).forEach(el=>{
        
        console.log("found at index of  "+txt.indexOf(el))
        txt=txt.replace(pat,"")
    })

edit distance
//iterate through the string and keep a count on the element not match 

function editDistance(a,b){
    let i=0
    let j=0
    let count=0
while(i<a.length && j<b.length){
    if(a[i]==b[j]){
        i++
        j++
    }else {
count++
i++

    }
}
return count

}
console.log(editDistance("geekdo","geekpu"));



  LEETCODE
1769. Minimum Number of Operations to Move All Balls to Each Box
brute force

const moveBalls=(box,numbers)=>{

for(let i=0;i<box.length;i++){
    let count=0
    for(let j=0;j<box.length;j++){
        if(i!=j && box[j]==1){
            count=count+Math.abs(j-i)
        }
    }
    numbers.push(count)
}
return numbers
}
console.log(moveBalls("110",[]));
console.log(moveBalls("001011",[]));
let arr=Array(26).fill(0)
let s="ababcbacadefegdehijhklij"

for(let i=0;i<s.length;i++){
    arr[s.charCodeAt(i)-s.charCodeAt(0)]=i
}
console.log(arr);


let s = "()))(("
function BalanceParanthesis(){

    let arr=[]
       let count=0
       for(let i=0;i<s.length;i++){
           if(s[i]==='('){
               arr.push(s[i])
               count++
           }else if(s[i]===')' && arr[count-1]=="("){
               arr.pop()
               count--
           }else{
               arr.push(s[i])
               count++
           }
       }
   
     
       return arr.length
}
BalanceParanthesis()
let a=[]
function partitionLabel(str){
    let arr=Array(26).fill(0)
    for(let i=0;i<str.length;i++){
        arr[str.charCodeAt(i)-str.charCodeAt(0)]=i
    }
let start=0
let end=0

for(let i=0;i<str.length;i++){
end=Math.max(end,arr[str.charCodeAt(i)-str.charCodeAt(0)])
if(end==i){
a.push(end-start+1)
start=end+1
}
}
return a
}
console.log(partitionLabel("ababcbacadefegdehijhklij"));
partitionLabel("ababcbacadefegdehijhklij")