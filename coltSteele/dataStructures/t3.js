//think it through





class Node{
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}



class DLL{
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
        if(this.length === 0) return undefined

        let currentTail = this.tail
        if(this.length === 1){
            this.head = null
            this.tail = null
        } else {
            this.tail = currentTail.prev
            currentTail.next = null
            this.tail.prev = null
        }
        this.length--
        return currentTail
    }

    shift(){
        if(!this.head) return undefined

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
}

let list = new DLL()


list.push('du')
list.push('ma')
list.push('mane')
list.shift()



console.log(list)