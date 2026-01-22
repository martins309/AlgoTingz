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


class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    //pushing pseudocode
//the function should accept a val
//create a new node using the value passed to the function
//if there is no head on the list set the head and the tail to be the newly created node
//otherwise set the next property on the tail to be the new node
// and set the tail property on the list to be the newly created node
//increment the length by one
    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode 
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
            
        }
        this.length++
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
    //if there are node return undefined
    // store the current head prop in a variable
    //set the head property to be the current heads next property
    //decrement the length by 1
    // return the value of the node removed

    shift(){
        if(!this.head) return undefined
        let current = this.head
        this.head = current.next
        this.length--
        if(this.length === 0){
            this.tail = null
        }
        return current

    }
    //the function accepts a val
    // create a new node using the val passed to the function
    //if there is no head on the list, set the head and tail to be the new created node
    // otherwise set the newly created nodes next property to be the current head property on the list
    //set the head property to be the newly created node on the list
    // incrememnt the list by 1
    //return the list
    unshift(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    //function should accept and index
    //if the idx is less than 0 or
    // greater than or equal to the length of the list return null
    // loop until you reach that index and return the node at that specific index
    get(idx){
        if(idx < 0 || idx >= this.length) return null
        let count = 0
        let current = this.head
        while(count !== idx){
            current = current.next
            count++
        }
        return current
    }
    //function should accept an index and a value
    // use the get method to find a node a specific node
    //if no node return false
    //if the node is found, set the value of that node to be
    //the value passed to the function and return true
    set(idx, val){
        let node = this.get(idx)
        if(node){
            node.val = val
            return true
        }
        return false
    }
    //define a function that takes an index and a value
    //if the index is less than 0 or greater than the length return false
    //if the index is the same as the length push a new node to the end of the list
    //if the index is 0 unshift a new node to the start of the list
    //otherwise using the get method, access the node at the index -1
    //set the next property on that node to be the new node
    //set the next propertyof the new node to be the previous node next
    //increment the length
    // return true
    insert(idx, val){
        let newNode = new Node(val)

        if(idx < 0 || idx > this.length) return false
        
        if(idx === this.length) return !!this.push(val)
         
        if(idx === 0) return !!this.unshift(val)
            
        let prev = this.get(idx - 1)
        let temp = prev.next
        prev.next = newNode
        newNode.next = temp
            
        this.length++
        return true
    }
    //define a function that takes an index
    //if the index is less than 0 or greater than or eq the length return undefined
    //if the index is that same as the length -1 pop
    //if the index is 0, shift
    //otherwise using the get method get the index of the node - 1
    //set next property on that node to be the next of the next node
    //decrement the length
    //return the value of the node removed
    remove(idx){
        if(idx < 0 || idx >= this.length) return undefined
        if(idx === this.length -1) return this.pop()
        if(idx === 0) return this.shift()
        
        let prev = this.get(idx - 1)
        let removed = prev.next
        prev.next = removed.next

        this.length--
        return removed

    }
    //swap the head and the tail
    // create a variable called next
    //then one called prev
    //create a variable called node and initialize it to the head property
    //loop throught the list
    // set the next to be the next property on whatever the node is
    //set the next property on the node to be whatever the node is
    // set the prev to  be the value of the node variable
    //set the node variable to be the value of the next variable

    reverse(){
      let node = this.head
      this.head = this.tail
      this.tail = node
      let prev = null
      let next
      while(node){
        next = node.next
        node.next = prev
        prev = node
        node = next
      }
      return this
    }
    //This function should rotate all the nodes in the list by some number passed in. 
    // For instance, if your list looks like 1 -> 2 -> 3 -> 4 -> 5 and you rotate by 2, 
    // the list should be modified to 3 -> 4 -> 5 -> 1 -> 2. 
    // The number passed in to rotate can be any integer.

    rotate(){
        if(this.length < 2) return false
        let rot = this.reverse()
        if(this.length === 2){
            return rot
        }

        return this
    }
}







let list = new SinglyLinkedList()
list.push(1)
list.push(2)
list.reverse()

console.log(list)




//popping pseudocode
//if there are no nodes in the list, 
//return undefined
//loop through the list until you reach the tail 
//set the next property of the second to last node to be null
//set the tail to be the second to last node
//decrement the list by one
//return the node that was removed
