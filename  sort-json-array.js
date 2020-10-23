(function () {
    let nodes = [
        { id: 'Root', parent: null },
        { id: 'Node2', parent: 'Root' },
        { id: 'Node5', parent: 'Root' },
        { id: 'Node6', parent: 'Node5' },
        { id: 'Node12', parent: 'Node8' },
        { id: 'Node13', parent: 'Node8' },
        { id: 'Node15', parent: 'Node6' },
        { id: 'Node3', parent: 'Node2' },
        { id: 'Node4', parent: 'Node2' },
        { id: 'Node8', parent: 'Node2' },
    ]


    // Sort the node above as JSON trees
    // Step 1: find the root outside the function
    // Step 2: Call the function to sort by passing the root
    // Exit the loop when no child has been added

    // Function which will take as parameter: my array of unsorted nodes, the current node, my array of sorted nodes
    // If my sorted node array is empty, I need to add the root to it and call back the method
    // Then I browse my unsorted node array to find all the children of my current node
    // I stop when no child has been added to the tree


    const rootNode = nodes.find(nodeCurrent => nodeCurrent.id === 'Root');

    const sortedTree = (nodes, nodeCurrent, nodesSorted = []) => {
        if (nodesSorted.length === 0) {
            nodesSorted = [...nodesSorted, nodeCurrent];
        }

        nodes.forEach(node => {
            if (node.parent === nodeCurrent.id) {
                if (!nodeCurrent.children) {
                    nodeCurrent.children = [];
                }
                nodeCurrent.children = [...nodeCurrent.children, node];
                sortedTree(nodes, node, nodesSorted);
            }
        });

        return nodesSorted;
    }

    console.log(sortedTree(nodes, rootNode))

})()