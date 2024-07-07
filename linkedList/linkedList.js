console.log("linked List")

class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constuctor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }

}
let mylinkedList = new LinkedList()
console.log(mylinkedList)