console.log('Bst')

class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class Bst{
    constructor(){
        this.root = null
    }
    insert(value){
        let newNode = new Node(value)
        if (this.root === null){
            this.root = newNode
            return this
        }
        let temp = this.root
        while(true){
            if(newNode.value===temp.value){
               return undefined
            }
            if(newNode.value>temp.value){
                if(temp.right===null){
                    temp.right=newNode
                    return this
                }
                temp=temp.right
            }
            if(newNode.value<temp.value){
                if(temp.left===null){
                    temp.left=newNode
                    return this
                }
                temp=temp.left
            }
            
        }
    }
}
let myTree = new Bst()
myTree 