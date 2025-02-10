
let L2 = function() {
  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
      this.prev = null;
    }
  }

  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }



    add(data) {

      let node = new Node(data);

      if (this.tail) {
        this.tail.next = node;
        node.prev = this.tail;
      } else {
        this.head = node;
      }

      this.tail = node;

      return node;

    }


    // headNode --> node1 --> node2 ---> node3
    // index = 2
    // headNode --> node1 --> nodeNEW --> node2 ---> node3

    // return the newly added node

    insertBefore(index, data) {

      function insertNodeAtHead(nodeData) {
        let nodeToInsert = new Node(nodeData);
          
        if (head) {
          nodeToInsert.next = this.head;
          this.head.prev = nodeToInsert;
        }
        
        this.head = nodeToInsert;

        if (!nodeToInsert.next) {
          this.tail = nodeToInsert;
        }
  
      }

      let node = new Node(data);

      // insert at the head
      if (!index) {
        insertNodeAtHead(data);
        // index  = 2
        // headNode --> node1 --> node2 ---> node3
        // insert before the provided node index
      } else {

        let previousNode = this.get(index - 1);

        if (!previousNode) {
          insertNodeAtHead(data);
        } else {
          node.next = previousNode.next;
          node.prev = previousNode;

          previousNode.next = node;

          // let nextNode = this.get(index + 1);
          // nextNode.prev = node;

          node.next.prev = node;
        }

      }

      return node;

    }



    insertAfter(index, data) {
      // Your code here
    }


    get(index) {

      let node = this.head;

      if (index) {
        let position = 0;
        
        while (position++ < index && node) {
          node = node.next;
        }
      }

      return node;

    }


    set(index, data) {
      // Your code here
    }


    remove(index) {
      // Your code here
    }



    find(data) {
      // Your code here
    }



    contains(data) {
      // Your code here
    }



    toArray() {

      let res = [];
      let position = 0;
      let node = this.head;

      while(node) {
        res.push({position, node});
        node = node.next;
        position++;
      }

      return res;

    }
  }

  return [DoublyLinkedList, Node];
};
