class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}



class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val)

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }


        this.length++;
        return this;

    }

    pop() {

        if (this.length === 0) return undefined;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            const prevTailNode = this.tail.prev;
            prevTailNode.next = null;
            this.tail = prevTailNode;

        }

        this.length--;
        return this;

    }

    shift() {

        if (this.length === 0) return false;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null
        }

        this.length--;
        return this;
    }

    unshift(val) {

        let newNode = new Node(val);

        if (this.length === 0) return this.push(val)

        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;

        this.length++;
        return this;
    }

    get(index) {

        if (index <= 0 || index > this.length) return null;
        if (index === 1) return this.head;
        if (index === this.length) return this.tail;

        let currentNode;
        let count;

        if (index <= this.length / 2) {
            count = 0;
            currentNode = this.head;
            while (count != index) {
                currentNode = currentNode.next;
                count++;
            }

        } else {
            count = this.length;
            currentNode = this.tail;

            while (count !== index) {
                currentNode = currentNode.prev;
                count--;

            }
        }

        return currentNode;
    }

    set(index, value) {

        let nodeFound = this.get(index);
        if (!nodeFound) return null;
        nodeFound.val = value;
        return this;
    }

    insert(index, val) {

        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);

        let newNode = new Node(val);
        let nodeFound = this.get(index);
        let afterNodeFound = nodeFound.next;
        nodeFound.next = newNode;
        newNode.prev = nodeFound;
        newNode.next = afterNodeFound;
        afterNodeFound.prev = newNode;
        this.length++;
        return true;

    }

    remove(index) {

        if (index < 0 || index > this.length) return false;
        if (index === 0) return this.shift();
        if (index === this.length) return this.pop();

        const nodeFound = this.get(index);
        const beforeNodefound = nodeFound.prev
        const afterNodeFound = nodeFound.next;

        beforeNodefound.next = afterNodeFound;
        afterNodeFound.prev = beforeNodefound;

        return nodeFound;



        // if (index <= 0 || index > this.length) return undefined
        // if (index === 1) return this.shift();
        // if (index === this.length) return this.pop();

        // const nodeFound = this.get(index);

        // const prevNodeFound = nodeFound.prev;
        // const nextNodeFound = nodeFound.next

        // prevNodeFound.next = nextNodeFound;
        // nextNodeFound.prev = prevNodeFound;

        // this.length--;

        // return this;
    }
}


const list = new DoublyLinkedList();

list.push('Hello')
list.push('World')
list.push('!')

// console.log(list.push('Add new Node')) // tail = 'add new Node';
// console.log(list.pop()) //Remove '!' and new tail is 'World'
// console.log(list.shift()); // Remove 'Hello' and the new head is 'World'
// console.log(list.unshift('Unshift')) // My new head is 'Unshift'
// console.log(list.get(2)) // Get 'World'
// console.log(list.set(3, 'Eddwiin'))// Replace '!' by 'Eddwiin'

// console.log(list.insert(2, 'Edd'))
// console.log(list)

console.log(list.remove(2, 'Edd')) // Remove 'World'
console.log(list)