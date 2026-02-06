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
}


let list = new DoublyLinkedList()



list.push(1)
list.push(2)
list.push(3)
list.push(4)


console.log(list)