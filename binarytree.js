// class Node{
//     constructor(value){
//         this.right=null
//         this.left=null
//         this.value=value
//     }
// }

// class BinaryTree{
//     constructor(){
//         this.root=null
//     }
//     insert(value){
//         let newNode=new Node(value)
//         if(this.root===null){
//            this.root=newNode
//         }else{

//             let currNode=this.root
//                     while(true){
              
//                         if(value<currNode.value){
//                           if(!currNode.left){
//                                currNode.left=newNode
//                                return this
//                           }
//                           currNode=currNode.left
//                         }else{
//                             if(!currNode.right){
//                                 currNode.right=newNode
//                                 return this
//                             }
//                             currNode=currNode.right
//                         }
//                     }
//         }
//     }
// }

// console.log("kjyf");
// let a=new BinaryTree()
// a.insert(9)
// a.insert(4)
// a.insert(6)

// a.insert(170)
// a.insert(15)
// a.insert(1)
// a.insert(8)





// console.log(JSON.stringify(traverse(a.root)));

// // //     9
// // //  4     20
// // //1  6  15  170

// function traverse(node) {
//   const tree = { value: node.value };
//   tree.left = node.left === null ? null : traverse(node.left);
//   tree.right = node.right === null ? null : traverse(node.right);
//   return tree;
// }