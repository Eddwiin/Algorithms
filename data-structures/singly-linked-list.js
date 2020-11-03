class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


    // Insert the value in a node which will be attached to tail
    // The new tail will become the last node
    // If the list is empty, the first node is head and tail
    push(val) {
        let node = new Node(val);
        if (this.head === null) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.length++;
        return this;

    }

    pop() {
        if (this.length === 0) return undefined;

        let nodeRemoved = null;

        if (this.length === 1) {
            nodeRemoved = this.head;
            this.head = null;
            this.tail = null
        } else {
            let currentNode = this.head;
            while (currentNode.next.next !== null) {
                currentNode = currentNode.next;
            }
            nodeRemoved = currentNode.next
            currentNode.next = null;
            this.tail = currentNode
        }
        this.length--;
        return nodeRemoved;
    }

    shift() {
        if (this.head === null) return false;
        let currentHead = this.head;
        this.head = this.head.next;
        this.length--;
        return currentHead;
    }

    unshift(val) {
        if (this.head === null) {
            this.pop(val)
        } else {
            let newNode = new Node(val);
            newNode.next = this.head;
            this.head = newNode;
            this.length++
        }
        return true;
    }

    get(index) {
        if (index <= 0 || index > this.length) return null;


        let iteration = 1;
        let currentNode = this.head

        while (iteration !== index) {
            iteration++;
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    set(index, newValue) {
        let nodeFound = this.get(index);
        if (!nodeFound) return false;
        nodeFound.val = newValue
        return true;
    }

    insert(index, newValue) {
        if (index <= 0 || index > this.length) return false;
        if (index === this.length) return this.push(newValue);
        if (index === 1) return this.unshift(newValue)

        let prevNode = this.get(index - 1);
        let newNode = new Node(newValue);
        newNode.next = prevNode.next;
        prevNode.next = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index <= 0 || index > this.length) return false;
        if (index === 1) return this.shift();
        if (index === this.length) return this.pop();

        let prevNode = this.get(index - 1);
        let nodeRemoved = prevNode.next;
        prevNode.next = prevNode.next.next;
        this.length--;
        return nodeRemoved;
    }

    reverse() {

       //Solution of Colt Steel

        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        
        let next;
        let prev = null;

       for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
       }

       return this;
    }

}

let list = new SinglyLinkedList();
list.push('hello');
list.push('World');
list.push('!');
list.push('Test');
list.pop(); // Remove test
list.unshift('Unshift value') // Add 'unshift value' at the beginning
list.shift(); // Remove the head
list.set(3, 'Eddwiin !') // Update node3 with the new value

list.insert(2, 'Insert')//Insert a value at 4 position
list.remove(2) // Remove insert
list.reverse();
console.log(list);
// console.log(list.get(3))
