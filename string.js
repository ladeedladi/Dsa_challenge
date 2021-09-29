//string dsa qns

//1.print all the subsequence of a string
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






