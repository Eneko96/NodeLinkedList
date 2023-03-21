class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class DoubleNode {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

export class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(value) {
    const node = new DoubleNode(value, null, null);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
  }

  removeNode(value) {
    let node = this.head;

    while (node) {
      if (node.value === value) {
        if (node === this.head) {
          this.head = this.head.next;
          this.head.prev = null;
        } else if (node === this.tail) {
          this.tail = this.tail.prev;
          this.tail.next = null;
        } else {
          node.prev.next = node.next;
          node.next.prev = node.prev;
        }
      }

      node = node.next;
    }
  }

  print() {
    let node = this.head;

    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }
}


export class LinkedList {
  constructor() {
    this.head = null
  } 

  insertNode(value) {
    const newNode = new Node(value, null)
    if (this.head === null) {
      this.head = newNode
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode
    }
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  findNode(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  deleteNode(value) {
    let current = this.head;
    while (current.value !== value) {
      if (current.value === value) {
        current.value = current.next.next
        return
      }
      current = current.next
    }
  }

}


