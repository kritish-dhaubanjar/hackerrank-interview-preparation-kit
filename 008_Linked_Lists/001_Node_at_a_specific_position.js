function sortedInsert(head, data) {
  let node = head;

  while (true) {
    if (node.data > data) {
      let newNode = Object.assign(Object.create(node), node);
      newNode.data = data;
      newNode.next = node;
      newNode.prev = node.prev;

      if (node.prev) {
        node.prev.next = newNode;
      } else {
        head = newNode;
      }

      node.prev = newNode;
      break;
    }
    if (node.next == null) break;
    node = node.next;
  }

  if (node.data < data) {
    let newNode = Object.assign(Object.create(node), node);
    newNode.data = data;
    newNode.next = null;

    node.next = newNode;
    newNode.prev = node;
  }

  return head;
}
