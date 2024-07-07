console.log("linked List")

class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class LinkedList{
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail =  this.head;
        this.length = 1;
    }
    push(value){
        const newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail =  newNode;
        }else{
            this.tail.next=newNode
            this.tail=newNode        
        }
        this.length++
        return this    

    }
    pop(){
        
        if(!this.head){
            return undefined
        }
        if(this.length===1){
            let pre = this.head
            this.head=null
            this.tail=null
            this.length--
            return pre
        }
        let pre = this.head
        let temp = pre.next
        while(temp.next!==null){
            temp = temp.next
            pre=pre.next
        }
        this.tail=pre
        pre.next=null
        this.length--
        return temp
    }
    unshift(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail =  newNode;
        }else{
            newNode.next=this.head
            this.head=newNode
        }
        this.length++
        return this
    }
    shift(){
        if(!this.head){
            return undefined
        }
        let temp=this.head
        this.head=this.head.next
        this.length--
        if(this.length===0){
            this.tail =  null;
        }
        temp.next= null
        return temp
    }
    get(index){
        if(index<0 || index>this.length-1){
            return undefined
        }
        let temp = this.head
        for(let i=0 ; i<index; i++){
            temp= temp.next
        }if(this.length===1){
            return temp
        }
        temp.next=null
        return temp
    }

}
let mylinkedList = new LinkedList(13);
mylinkedList.push(91)

