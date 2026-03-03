// here the fuck we go bitch 

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
        this.length++
        return oldHead
    }

   unshift(val){
    let newNode = new Node(val)
    let oldHead = this.head

    if(!this.head){
        this.head = newNode
        this.tail = this.head
    } else {
        newNode.next = oldHead
        oldHead.prev = newNode
        this.head = newNode
    }
        this.length++
        return this

   }
}






let list = new DoublyLinkedList()


list.push('hey')
list.push('now')
list.push('you\'re a' )
list.push('rock star')
list.unshift("ahhhhhhh")

console.log(list)