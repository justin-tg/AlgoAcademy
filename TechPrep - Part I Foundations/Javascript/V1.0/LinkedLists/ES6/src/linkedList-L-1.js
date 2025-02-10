

//   1. Implement Node class
//   2. Implement DoublyLinkedList class
//   3. Declare head and tail variables


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
}