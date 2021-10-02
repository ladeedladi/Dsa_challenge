// //string dsa qns

// 1.print all the subsequence of a string
// let ar=[]
// function subseq(init,fin){

// if(init.length===0){
//     ar.push(fin)
//     return
// }

// let newfin=fin
// newfin+=init.charAt(0)
// let newInit=init.substring(1,init.length)
// subseq(newInit,newfin)
// subseq(newInit,fin)

// }

// subseq("abc","")

// console.log(ar);

// 2.find the permuation of the string "abc"
// let str="abc"
// let final=""
// let ar=[]
// function permut(init,fin,i){
//     if(init.length===0){
//     ar.push(fin)
   
//     }
//     if(i===init.length){
//         return
//     }
    
// let newfin=fin
// newfin+=init.charAt(i)
// let newInit=init.substring(0,i)+init.substring(i+1)
// permut(newInit,newfin,0)
// permut(init,fin,i+1)
// }
// permut("abc","",0)
// console.log(ar);


// 3.Split the binary string into substrings with equal number of 0s and 1s

// let str="0100110101000111"
// let prev=str[0]
// let countPrev=1
// let count=0
// function bss(s){

//     for(let i=1;i<s.length;i++){
//         if(s[i]==prev){
//               countPrev++
//               prev=s[i]
             
//               if(countPrev==0){
//                 count++
//             }
//         }else{
//             countPrev--
           
//             if(countPrev==0){
//                 count++
//             }
//         }
//     }

// }
// bss(str)
// console.log(count);



// 4.paranthesis checker
// let str="[())]"
// let arr=[]
// let count=0
// function para(s){

// for(let i=0;i<s.length;i++){
//     if(s[i]=='{'||s[i]=="["||s[i]=="("){
        
//      arr.push(s[i])
//      count++
     
//     }else if(s[i]=='}' && arr[count-1]=="{" || s[i]==']'&& arr[count-1]=="[" ||s[i]==')'&& arr[count-1]=="(" ){
//         arr.pop(arr[count-1])
//         count--
//     }else{
//         return "no way"
//     }
// }
// }


// function check(){
//     if(para(str)=="no way"){
//         console.log("false");
//     }else{
//         console.log("true");
//     }
// }
// check()



//5.pattern searching

let txt= "THIS IS A TEST TEXT"
let pat = "TEST"


function check(txt,pat){
let a=[]

if(txt.includes(pat)){
console.log(txt.indexOf(pat));
}
}
check(txt,pat)