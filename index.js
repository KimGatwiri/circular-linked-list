class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
  }

  insert(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
    } else {
      let temp = this.head;

      while (temp.next !== this.head) {
        temp = temp.next;
      }

      temp.next = newNode;
      newNode.next = this.head;
    }
  }

  delete(data) {
    if (!this.head) {
      console.log("List is empty!");
      return;
    }

    let current = this.head;
    let prev = null;

    if (current.data === data) {
      while (current.next !== this.head) {
        current = current.next;
      }

      if (this.head.next === this.head) {
        this.head = null;
      } else {
        current.next = this.head.next;
        this.head = this.head.next;
      }
      return;
    }

    current = this.head;
    while (current.next !== this.head && current.data !== data) {
      prev = current;
      current = current.next;
    }

    if (current.data === data) {
      prev.next = current.next;
    } else {
      console.log("Node not found!");
    }
  }

  traverse() {
    if (!this.head) {
      console.log("List is empty!");
      return;
    }

    let temp = this.head;
    do {
      console.log(temp.data);
      temp = temp.next;
    } while (temp !== this.head);
  }
}

const cll = new CircularLinkedList();

cll.insert(1);
cll.insert(2);
cll.insert(3);

cll.traverse();

cll.delete(2);

cll.traverse();

cll.insert(4);

cll.traverse();
