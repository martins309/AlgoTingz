// here will be the implementation of the doubly linked list
// this will be fun

//its basically the same thing but with a prev





class Node{
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}


class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    //create a new node with a val passed to the function
    //if head is null, set the head and tail property to be the new node
    //if not set the next property on the the tail to be that node
    //set the prev property of the newly created node to tbe the tail
    // set the tail to be the new node
    //increment the length
    // return the entire list


    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }

    //if there is no head, return undefined
    //store the current tail in a variable to return later
    //if the length is 1, set the head and the tail to be null
    //update the tail to be the prev node
    //set the newTails next to be null
    //decrement the length
    //return the value removed

    pop(){
        if(!this.head) return undefined
        let currentTail = this.tail
        if(this.length === 1){
            this.head = null
            this.tail = null
        } else {
            this.tail = currentTail.prev
            this.tail.next = null
            currentTail.prev = null
        }
            this.length--
            return currentTail
    }
    
    // if the length is 0 then return undefined
    //store the current head prop in a variable
    //if the length is 1 set the head and tail to be null
    //update the head to be the next of the old head
    //set the head's previous property to be null
    //set the old heads next to be null
    //decrement the length
    //return the old head

    shift(){
        if(this.length === 0) return undefined
        let oldHead = this.head

        if(this.length === 1){
            this.head = null
            this.tail = null
        } 
        oldHead.next = this.head
        this.head.prev = null
        this.head.next = null
        this.length--
        return oldHead

    }
}


let list = new DoublyLinkedList()



list.push(1)
list.push(2)
list.push(3)
list.push(4)


console.log(list.shift())