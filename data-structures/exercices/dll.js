class Node{
    constructor(val){
        this.val = val
        this.next = null;      
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(val){
        this.val = val
        this.next = null;
        if (val) {
            this.head = val;
            this.tail = val;
            this.length = 1
        } else {
            this.head = null;
            this.tail = null;
            this.length = 0
        }
        
    }
    push(value){
        let newNode = new Node(value);
        if (this.length === 0) {
            this.val  = newNode;
            this.head = newNode;
            this.tail = newNode;
        } else {
            let currentNode = this.val;
            
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            
            currentNode.next = newNode;
            newNode.prev = currentNode;
        }

        this.length++;
        return this;
    }
    
}

var doublyLinkedList = new DoublyLinkedList;
doublyLinkedList.push(5);

console.log({ doublyLinkedList });
console.log(doublyLinkedList.length); // 1
console.log(doublyLinkedList.head.val); // 5
console.log(doublyLinkedList.tail.val); // 5
console.log(doublyLinkedList.head.prev) // null;

doublyLinkedList.push(10);
console.log(doublyLinkedList.length); //2
console.log(doublyLinkedList.head.val); //5
console.log(doublyLinkedList.head.next.val); // 10