
let L1 = function() {
  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

  class SinglyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }



    add(index, data) {
      let nodeToAdd = new Node(data);

      if (index > 0) {

        // get the previous node
        let previousNode = this.get(index - 1);

        if (!previousNode) {
          return nodeToAdd;
          // error index out of bounds
        }
        // set the nodeToAdd.next to the previousNode.next
        nodeToAdd.next = previousNode.next;
        // set the previousNode.next to the nodeToAdd
        previousNode.next = nodeToAdd;

        if (!nodeToAdd.next) {
          this.tail = nodeToAdd;
        }

      // add the new node to the end of the linked list
      } else if (index === 0) {
        if (this.head) {
          nodeToAdd.next = this.head;
        }
        this.head = nodeToAdd;

        if (!nodeToAdd.next) {
          this.tail = nodeToAdd;
        }

      } else {
        if (this.tail) {
          this.tail.next = nodeToAdd;
        } else {
          this.tail = nodeToAdd;
          this.head = nodeToAdd;
        }

      }

      return nodeToAdd;

    }



    get(index) {

      let currentNode = this.head;

      if (index) {
        let count = 0;

        while (count++ < index && currentNode) {
          currentNode = currentNode.next;
        }
      }

      return currentNode;

    }



    remove(index) {

      let nodeToRemove;

      if (!index) {

        nodeToRemove = this.head;
        this.head = this.head.next;

        if (!this.head.next) {
          this.tail = null;
        }
        
      } else {

        let prevNode = this.get(index - 1);
        nodeToRemove = prevNode.next;

        prevNode.next = nodeToRemove.next;
        if (nodeToRemove === this.tail) {
          this.tail = prevNode;
        }

      }

      return nodeToRemove;

    }



    find(data) {

      let node = this.head;
      let position = 0;

      while(node) {
        if (node.data === data) {
          return { position, node };
        }

        node = node.next;
        position++;
      }

      return null;
      
    }



    toArray() {

      let res = [];

      let currentNode = this.head;

      while(currentNode) {
        res.push(currentNode.data);
        currentNode = currentNode.next;
      }

      return res;

    }
  }

  return [SinglyLinkedList, Node];
};