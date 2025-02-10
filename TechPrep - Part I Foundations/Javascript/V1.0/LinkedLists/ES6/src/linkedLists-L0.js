
// Use the following pre-defined Linked List node object.
//
class LinkedListNode {
  constructor(data, next) {
    this.data = data || null;
    this.next = next || null;
  }
}

// Use the following variables to act as references to the head and tail nodes when
//  when necessary.
//
let head = null;
let tail = null;


//
// EASY    :  Questions 1 - 8
// MEDIUM  :  Questions 9 - 11
// HARD    :  Questions 12 - 14
//


let L0_P1 = function() {

  //  1. Write a function that creates and returns a new node.
  //
  //
  // Input : (data)
  // Output: The new node
  //
  //
  // What is the Time Complexity of your implementation  : O(1)
  // What is the Space Complexity of your implementation : O(1)
  // 

  // Creating this new linked list node is a constant time operation, there is no list or iterator when the node is initialized in this case

  this.createNewNode = (data) => {
    return linkedList = new LinkedListNode(data);
  };


  //  2. Write a function that creates and returns a new node and assigns it to head.
  //
  //
  // Input : (data)
  // Output: The new node
  //         Assigned it to head
  //
  //
  // What is the Time Complexity of your implementation  : O(1)
  // What is the Space Complexity of your implementation : O(1)
  
  // I am making one space allocation in O(1)
  this.createFirstNode = (data) => {

    // node1 --> node2 --> node3

    // data1     data2     data3

    let node = new LinkedListNode(data);

    head = node;

    return node;

  };


  //  3. Write a function that creates a new node always at the head position.
  //
  //
  // Input : (data)
  // Output: The new node
  //         At head position
  //         Old list referenced by next
  //
  //
  // What is the Time Complexity of your implementation  : O(1)
  // What is the Space Complexity of your implementation : O(1)
  //
  this.createAndInsertFirst = (data) => {
    let node = new LinkedListNode(data);

    if (head) {
      node.next = head;
    }

    head = node;

    return node;
  };


  //  4. Write a function that creates a new node and always makes it the 2nd node in the
  //      list.
  //
  //
  // Input : (data)
  // Output: The new node
  //         At 2nd position in the list or first if there weren't any existing nodes already
  //         Maintain the head variable as-needed.
  //
  //
  // What is the Time Complexity of your implementation  : O(1)
  // What is the Space Complexity of your implementation : O(1)
  //
  this.createAndInsertSecond = (data) => {

    let node = new LinkedListNode(data);

    // At 2nd position in the list
    if (head) {
      // headNode  ---> node1  ---> node2

      // headNode  ---> nodeBeingInserted  ---> node1  ---> node2

      // get the head node next, and assign it to the node being inserted next
      node.next = head.next;
      // get the head node and assign it's next to the node 
      head.next = node;

    // if there is no head then put the node at the 1st position in the list
    } else {
      head = node;
      // createFirstNode(data);
    }

    return node;

  }
};


//  5. Extend the previous functions to maintain both head and tail references.  In
//      all cases, the first node is the head and the last node is the tail.
//
let L0_P2 = function() {

  //  5.1. Write a function that creates and returns a new node and maybe assigns it to head and tail.
  //
  //
  // Input : (data)
  // Output: The new node
  //         Assigned it to head if there wasn't already one
  //         Assigned it to tail if there wasn't already one
  //
  //
  // What is the Time Complexity of your implementation  : O(1)
  // What is the Space Complexity of your implementation : O(1)
  //
  this.createFirstNode = (data) => {
    let node = new LinkedListNode(data);

    head = node;
    tail = node;

    return node;

  };


  //  5.2. Write a function that creates a new node always at the head position and maybe sets tail.
  //
  //
  // Input : (data)
  // Output: The new node
  //         At head position always
  //         Assigned to tail if there wasn't already one
  //         Old list referenced by next
  //
  //
  // What is the Time Complexity of your implementation  : O(1)
  // What is the Space Complexity of your implementation : O(1)

  // I allocated a constant number of spaces for the variables used here: node, head and tail
  this.createAndInsertFirst = (data) => {
    let node = new LinkedListNode(data);
    
    if (head) {      
      node.next = head;
    } else {
      tail = node;
    }

    head = node;

    return node;
  };


  //  5.3. Write a function that creates a new node and always makes it the 2nd node in the
  //        list.  Maybe set the head or tail references, if needed.
  //
  //
  // Input : (data)
  // Output: The new node
  //         At the head position if there weren't any existing nodes already
  //         Otherwise, always at 2nd position in the list
  //         Maintain the head or tail variable as-needed.
  //
  //
  // What is the Time Complexity of your implementation  : O(1)
  // What is the Space Complexity of your implementation : O(1)
  //
  this.createAndInsertSecond = (data) => {

    // headNode ---> node1 ---> node2 ---> node3

    // headNode ---> newNode ---> node1 ---> node2 ---> node3



    // headNode

    // headNode --> newNode

    let node = new LinkedListNode(data);

    if (head) {

      if (head.next) {
        node.next = head.next;
      } else {
        tail = node;
      }

      head.next = node;
    } else {
      head = node;
      tail = node;
    }

    return node;
  };


  //  6. Write a function that always adds a new node to the end of the list.
  //
  //
  // Input : (data)
  // Output: The new node
  //         Assigned to head if there wasn't already an existing one
  //         Assigned to tail
  //
  //
  // What is the Time Complexity of your implementation  : O(1)
  // What is the Space Complexity of your implementation : O(1)
  //
  this.addNewNode = (data) => {

    let node = new LinkedListNode(data);

    if (head) {
      tail.next = node;
      tail = node;
    } else {
      head = node;
      tail = node;
    }

    return node;

  };


  //  7. Write a function that always removes the first node in the list.
  //
  //
  // Input : none
  // Output: The first node (if any)
  //         The first node removed if it exists
  //         Head and Tail properly assigned
  //
  //
  // What is the Time Complexity of your implementation  : O(1)
  // What is the Space Complexity of your implementation : O(1)
  //
  this.removeFirstNode = () => {

    // CASE 1
    // INPUT  |  headNode ---> node1 ---> node2 ---> node3
    // OUTPUT |  headNode ---> newNode ---> node1 ---> node2 ---> node3

    // CASE 2
    // INPUT  |  headNode (head = this and tail = this)
    // OUTPUT |  -- no node --

    // CASE 3
    // -- no node --
    // -- no node --

    //const element = array.pop();

    let node = head;

    if (head) {
      head = head.next; // | head is set to undefined if there is a next node

      if (!head) {
        tail = null;
      }
    }

    return node;

  };


  //  8. Write a function that always removes the second node in the list.
  //
  //
  // Input : none
  // Output: The 2nd node in the list, if any
  //         The 2nd node removed from the list
  //         Head and tail properly assigned
  //
  //
  // What is the Time Complexity of your implementation  : O(1)
  // What is the Space Complexity of your implementation : O(1)
  //
  this.removeSecondNode = () => {

    // CASE 1
    // GIVEN LIST      |  headNode ---> node1 ---> node2 ---> node3
    // RESULTANT lIST  |  headNode ---> node2 ---> node3
    // OUTPUT          |  node1

    // CASE 2
    // GIVEN LIST      |  headNode ---> node1
    // RESULTANT lIST  |  headNode 
    // OUTPUT          |  node1

    // CASE 3
    // GIVEN LIST      |  -- no node --
    // RESULTANT LIST  |  -- no node --
    // OUTPUT          |  none, or null

    let node = head;

    if (head) {
        node = head.next;
        head.next = node.next;

        if (tail === node) {
          tail = head;
        }
    }

    return node;

  };


  //  9. Write a function that can return any node in the list.
  //
  //
  // Input : (staring node, index),
  // Output: The node at index position
  //         Null if out of bounds
  //
  //
  // More Info:
  //
  //  * Index = 0 refers to the head
  //  * Index = 1 refers to the 2nd node
  //  * Index > 1 Etc.
  //
  //
  // What is the Time Complexity of your implementation  : O(n)
  // What is the Space Complexity of your implementation : O(1)
  //
  this.getNodeAtIndex = (start, index) => {

    
    let node = start;
    let nodeNum = 0;
    while (nodeNum < index) {
      if (!node.next) {
        return null;
        // throw new Error ("Error | Index out of bounds"); // ask the interviewer if this is important -- if this is not in the requirements then you are adding requirements
      }
      node = node.next;

      nodeNum++;
    }

    return node;

  };


  // 10. Write a function that finds and returns the node previous to the one passed in.
  //
  // Input : (starting node, the node we want to find previous to)
  // Output: The previous node (if any)
  //         null if there isn't one
  //
  //
  // Constraints:
  //
  //  * Assume there are no duplicate data values
  //  * Assume start or node are not null
  //  * Assume node is a valid node in the list indicated by start
  //
  //
  // What is the Time Complexity of your implementation  :
  // What is the Space Complexity of your implementation :
  //
  this.getPreviousNode = (start, nodeToFind) => {

    let node = start;

    while(node.next) {

      if (node.next === nodeToFind) {
        return node;
      }

      // ... the work

      node = node.next;
    }

    return null;
  };


  // 11. Write a function that always removes the last node in the list.
  //
  //
  // Input : none
  // Output: The last node
  //         The previous node, if any, is now the tail
  //         Head and tail properly assigned
  //
  //
  // What is the Time Complexity of your implementation  : O(n)
  // What is the Space Complexity of your implementation : O(1)
  //


  this.removeLastNode = () => {

    let nodeToRemove;

    // if there is a node in the list
    if (head) {
      nodeToRemove = tail;
      // check if the head node is the tail node
      if (head === tail) {
        head = null;
        tail = null;
        return nodeToRemove;
      } else {

        let currentNode = head;
        // iterate through the linked list until you find the node before the tail
        while (currentNode.next) {
          if (currentNode.next === tail) {
            currentNode.next === null;
            tail = currentNode;
          }

          currentNode = currentNode.next;
        }

      }
    }
    // else if there is not a node in the list
    // } else {
    //   throw new Error ("Error | LinkedList already empty");
    // }

    return nodeToRemove;
  };


  // 12. Write a function that can insert a node anywhere in the list.
  //
  //
  // Input : (index of node to insert at, data)
  // Output: The new node
  //         Null if index out of bounds
  //         Node inserted at proper location within the list
  //         Head and tail properly assigned
  //
  //
  // More Info:
  //
  //  * Index = 0 refers to the head
  //  * Index = 1 refers to the 2nd node
  //  * Index > 1 Etc.
  //
  //
  // What is the Time Complexity of your implementation  :
  // What is the Space Complexity of your implementation :
  //
  this.insertNodeAtIndex = (index, data) => {
    let node = new LinkedListNode(data);

    if (head) {

      // if the index is less than or equal to 0 then insert the new node at the start
      if (index <= 0) {
        node.next = head;
        head = node;

        if (!node.next) {
          tail = node;
        }
      }

      // get the previous node
      let previousNode = get(index - 1);
      
      // if the previous node does not exist then return the node
      if (!previousNode) {
        return node;
        // throw new Error("Error | Index out of bounds");
      }
      // set node.next to previousNode.next
      node.next = previousNode.next;
      // set the previousNode.next to node
      previousNode.next = node;

      // lastly check if the node you've just inserted is the last
      if (!node.next) {
        tail = node;
      }

    // there is no head, so insert the node as the head and tail
    } else if (!head) {
      head = node;
      tail = node;
    }

    return node;

    function get(index) { 
      let currentNode = head;
      let count = 0;
    
      while (currentNode) {
        if (count === index) {
          return currentNode;
        }
        currentNode = currentNode.next;
        count++;
      }
    
      return null;
    }
    
  };

  // 13. Write a function that can remove any node in the list.
  //
  //
  // Input : (starting node, index of node to remove)
  // Output: The node at index position
  //         Null if out of bounds
  //         The node removed from the list
  //         Head and tail properly assigned
  //
  //
  // More Info:
  //
  //  * Index = 0 refers to the head
  //  * Index = 1 refers to the 2nd node
  //  * Index > 1 Etc.
  //
  //
  // What is the Time Complexity of your implementation  : O(n)
  // What is the Space Complexity of your implementation : O(1)
  //
  this.removeNodeAtIndex = (start, index) => {
    // Your code here...

    let prev = get(index-1);
    let curr = (prev) ? prev.next : null;
    let next = (curr) ? curr.next : null;

    if (head === null || prev === null) {
      return null;
    }

    if (!index) {
      head = head.next;

      if (!head) {
        tail = null;
      }

      curr = start;
    }
    else {
      prev.next = next;
      if (curr === tail) {
        tail = prev;
      }
    }

    return curr;



    function get(index) {
      let currentNode = start;  // head
      
      if (index) {
        let count = 0;
        while (count < index && currentNode) {
          currentNode = currentNode.next;
          count++;
        }
      }
    
      return currentNode;
    }
        
  };


  // 14. Write a function that returns an array of all the values in a list.
  //
  //
  // Input : A linked list
  // Output: Array of all values in the list
  //
  // Example:
  //
  // Node = {
  //   data: 1, next: {
  //   data: 2, next: {
  //   data: 3, next: {
  //   data: 4, next: {
  //   data: 5, next: null
  // }}}}}
  //
  // Returns: [1,2,3,4,5]
  //
  // What is the Time Complexity of your implementation  : O(n)
  // What is the Space Complexity of your implementation : O(n)
  //
  this.toArray = (start) => {

    let res = [];

    while (start) {
      res.push(start.data);
      start = start.next;
    }

    return res;

  };
};
