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
    contain(value){
        if(this.root===null){
            return undefined
        }
        let temp = this.root
        while(temp){
            if(temp.value===value){
                return true
            }else if(temp.value<value){
                temp=temp.right
            }else{
                temp=temp.left
            }
        }
        return false
    }
}
let myTree = new Bst()

myTree.insert(47)

myTree.insert(21)

myTree.insert(76)
myTree.insert(47)
myTree.insert(18)
myTree.insert(52)
myTree.insert(82)

myTree.insert(27)