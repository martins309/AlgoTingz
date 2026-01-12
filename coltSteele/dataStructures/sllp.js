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
        if(!this.head) return undefined
        let current = this.head
        let newTail = current

        while(current.next){
            newTail = current
            current = current.next
        }
        this.length--
        this.tail = newTail
        this.tail.next = null
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return current
        
    }
    shift(){
        if(!this.head) return undefined
        let current = this.head 
        this.head = current
        this.length--
        if(this.length === 0){
            this.tail = null
        }
        return current
    }

    unshift(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.next = newNode
            this.head = newNode
        }
        this.length++
        return this
    }
    get(idx, val){
        if(idx < 0 || idx >= this.length)return null

        
    }

    set(val){
        let node = this.get(val)
        if(node){
            
        }
    }
}


let list = new SinglyLinkedList()

list.push("I'm")
list.push("rich")
list.push("as fuck")
list.unshift("baby")





console.log(list)