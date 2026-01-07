// nuke and do it again!!!!


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
        let current = this.head
        let newTail = current

        while(current.next){
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null

        this.length--

        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        current
    }
    shift(){
        let current = this.head
        this.head = current.next
        if(this.length === 0){
            this.tail = null
        }
        this.length--
        return current
    }

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
}


let list = new SinglyLinkedList()

list.push("I'm")
list.push("rich")
list.push("as fuck")
list.shift("I'm")
list.unshift("really though...")
list.unshift("hi")


console.log(list)