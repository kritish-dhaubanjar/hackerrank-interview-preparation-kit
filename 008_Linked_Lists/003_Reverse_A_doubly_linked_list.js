function reverse(head) {
  let node = head;

  while (true) {
    let nextNode = node.next;
    let prevNode = node.prev;

    node.next = prevNode;
    node.prev = nextNode;

    if (nextNode == null) {
      return node;
    } else {
      node = nextNode;
    }
  }
}
