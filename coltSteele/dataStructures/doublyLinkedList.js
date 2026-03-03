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
        } else {
            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null
        }
        this.length--
        return oldHead

    }
    //create a new node with a value passed to the function
    //if the length is 0 set the head and tail to be the new node
    //otherwise set the prev property on the head of the list to be the new node
    //set the next property on the new node to be the head property
    //update the head to be the new node
    //increment the length 
    //return the list
    unshift(val){
        let newNode = new Node(val)
        if(this.length === 0){
            this.head = newNode
            this.tail = this.head
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    //if the index is less than 0, or greater than or equal to the length, return null
    //if the index is less than or equal half the length of the list
        //loop through the list starting at the head and loop towards the middle
        //return the node once found
    //if the index is greater than half the length of the list
        //loop through the list starting from the tail to the middle
        //return the node once found

    get(idx){
        if(idx < 0 || idx >= this.length) return null
        let mid = Math.floor(this.length / 2)
        let count, current

        if(idx !== mid){ 
            count = 0
            current = this.head
            while(count !== idx){
                current = current.next
                count++ 
            } 
        } else {
            count = this.length -1
            current = this.tail
            while(count !== idx){
                current = current.prev
                count--
            }
            
        }
        return current
    }
    //create a var which a result of the get method at 
    // index passed to the function
    // if the get method returns a valid node
    //set the value of that node to be the val of the node passed to the func
    // return true

    set(idx, val){
        let node = this.get(idx)
        if(node){
            node.val = val
            return true
        }
        return false
    }

    //if the index is less than zero or
    //greater than or equal to the length return false
    //if index is 0 unshift
    //if the index is the same as the length push
    //otherwise use the get method to access the item 
    //before where we are trying to insert
    //set the next and previous properties on the correct nodes
    //to link everything together
    //increment length
    //return true

    insert(idx, val){
        let newNode = new Node(val)
        if(idx < 0 || idx > this.length) return false
        if(idx === 0) return !!this.unshift(val)
        if(idx === this.length) return !!this.push(val)

        let lastNode = this.get(idx - 1)
        let currentNode = lastNode.next
        lastNode.next = newNode
        newNode.prev = lastNode
        newNode.next = currentNode
        currentNode.prev = newNode
        
        this.length++
        return true
        
    }

    //if index less than 0 or greater than or equal to the length
    //return undefined
    //if the index 0 shift
    //if the idx is the length minus 1 pop
    //use the get method to retrieve the item to be removed
    //update the next and previous properties to remove the found node
    //set the next and previous on the found node to be null
    //decrement the length
    //return the removed node

    remove(idx){
        if(idx < 0|| idx >= this.length) return undefined
        if(idx === 0) return this.shift()
        if(idx === this.length -1) return this.pop()

        let removed = this.get(idx)

        let prevNode = removed.prev
        let nextNode = removed.next

        prevNode.next = nextNode
        nextNode.prev = prevNode

        removed.next = null
        removed.prev = null
        
        this.length--
        return removed

    }

}


let list = new DoublyLinkedList()



list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.push(6)
list.push(7)
list.push(8)
list.unshift('fuck')

console.log(list)
