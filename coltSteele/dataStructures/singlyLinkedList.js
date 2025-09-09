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
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode 
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
            
        }
        this.length ++
        return this
    }
    pop(){
        //if the list is empty
        if(!this.head){
            return undefined
        }   
            //these pointers are at the same position at first
            let current = this.head
            let newTail = current
        //while there is another node in the sequence
        while(current.next){
        //set the new tail to be head 
        //current to be the next node in the list
           newTail = current
           current = current.next
        }
        // set the tail to be the one before it
        //sever the connection after it 
        this.tail = newTail
        this.tail.next = null
        //decrement the length
        this.length--
        //if list is empty 
        //set everything to null
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        //return the item that you took out
        return current
    }
}

let list = new SinglyLinkedList()
list.push('chicken')
list.push('wings')
list.push(99)
list.pop()
console.log(list)


//popping pseudocode
//if there are no nodes in the list, 
//return undefined
//loop through the list until you reach the tail 
//set the next property of the second to last node to be null
//set the tail to be the second to last node
//decrement the list by one
//return the node that was removed
