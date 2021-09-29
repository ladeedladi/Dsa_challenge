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



