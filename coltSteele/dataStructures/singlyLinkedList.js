// here is the first time im using advanced data structure.
// my intro to singly linked lists :)



// what is a linked list?

// a data structures that contain a head a tail and a length
// a linked list has no indicies that just point to the next element
//linked lists consists of nodes and 
// each node has a value and a pointer that points to the next node 
// or null


class Node{
    constructor(val){
        this.val = val
        this.next = null

    }
}

//pushing pseudocode
//the function should accept a val
//create a new node using the value passed to the function
//if there is no head on the list set the head and the tail to be the newly created node
//otherwise set the next property on the tail to be the new node
// and set the tail property on the list to be the newly created node
//increment the length by one

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val){
        let newNode = new Node()
        if(this.head === null){
            this.head = newNode 
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
            
        }
        this.length ++
        return this
    }
}

let list = new SinglyLinkedList()

console.log(list)