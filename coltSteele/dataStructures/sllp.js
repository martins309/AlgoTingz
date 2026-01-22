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
            this.head =newNode
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
        this.tail = newTail
        this.tail.next = null
        this.length--
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return current
    }

    shift(){
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
        if(!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    } 

    get(idx){
        if(idx < 0 || idx >= this.length) return false
        let count = 0
        let current = this.head
        while(count !== idx){
            current = current.next
            count++
        }
        return current
    }

    set(idx, val){
        let node = this.get(idx)
        while(node){
            node.val = val
            return true
        }
        return false
    }

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

    remove(idx){
        if(idx < 0 || idx >= this.length) return false
        if(idx > 0) return this.pop()
        if(idx === this.length -1) return this.shift()
        let prev = this.get(idx - 1)
        let removed = prev.next
        prev.next = removed.next

        this.length--
        return removed
    }

   reverse(){
    let node = this.head
    this.head = this.tail
    this.tail = node
    let next
    let prev = null
    while(node){
        next = node.next
        node.next = prev
        prev = node
        node = next
    }
    return this
   }
   rotate(){
    
   }
}



let list = new SinglyLinkedList()

list.push("i")
list.push("like to")
list.push("fuck")



console.log(list.insert(4,"fagget"))

