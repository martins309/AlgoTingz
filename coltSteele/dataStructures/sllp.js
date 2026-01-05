// nuke and do it again!!!!





class Node {
    constructor(){
        this.val = val
        this.next = null
    }
}


class SinglyLinkedList {
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
            this.tail = newNode
            this.tail.next = newNode
        }
        this.length++
        return this
    }
}



let list = new SinglyLinkedList()

list.push("i")
list.push("fucked")
list.push("queen")
list.push("tashaar")

console.log(list)