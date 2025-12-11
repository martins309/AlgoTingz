// okay so here will be the practice and the test file will be
// for the other sorting algos that we did


class Node {
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


    push(){
        let newNode = new Node()
        if(this.head = null){
            this.head = newNode
            this.tail = this.next
        }else {
            this.tail = newNode
            this.tail.next = newNode
        }
        this.length++
        return this
    }
}


list = new SinglyLinkedList()


list.push("1")
list.push("2")
list.push("3")

console.log(list)