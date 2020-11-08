class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {

        // Create the new node
        // If root is null, then the new node becomes root
        // Else if
        //      If the new node is lower, check that there is a node on the left
        //          If not, the new node becomes the left of the current node
        //          If yes, the current node becomes the left node
        //      If the new node is superior, check that there is a node on the right
        //          If not, the new node becomes the right node of the current node
        //          If yes, the current node becomes the right node

        // Use a while that continues as long as the node has not been inserted

        let newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            let isAdd = false;
            let currentNode = this.root;

            while (currentNode) {
                if (newNode.value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return true;
                    }
                    currentNode = currentNode.left;
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return true;
                    }

                    currentNode = currentNode.right;
                }
            }

            return isAdd;
        }
    }

    find(value) {

        if (this.root === null) return null;
        if (this.root.value === value) return this.root

        let currentNode = this.root;

        while (currentNode) {
            if (currentNode.value === value) return currentNode;

            if (value < currentNode.value) {
                if (!currentNode.left) return null;
                currentNode = currentNode.left;
            } else {
                if (!currentNode.right) return null;
                currentNode = currentNode.right;
            }
        }

        return currentNode;

    }
}

let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(6);

tree.insert(3)
tree.insert(8);

tree.insert(20);

console.log(tree.find(20));
