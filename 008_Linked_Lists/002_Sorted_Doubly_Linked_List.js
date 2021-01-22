function sortedInsert(head, data) {
  let node = head;

  while (true) {
    if (node.data > data) {
      let newNode = Object.assign(Object.create(node), node);
      newNode.data = data;
      //

      if (node.prev == null) {
        newNode.prev = null;
        newNode.next = node;
        node.prev = newNode;
        head = newNode;
        break;
      } else {
        newNode.next = node;
        newNode.prev = node.prev;

        node.prev.next = newNode;
        node.prev = newNode;
        break;
      }
    }

    if (node.next == null) {
      //  [1,2,3,4,5] <-10
      let newNode = Object.assign(Object.create(node), node);
      newNode.data = data;
      newNode.next = null;
      newNode.prev = newNode;
      //
      node.next = newNode;
      break;
    } else {
      node = node.next;
    }
  }

  return head;
}

/*

DoublyLinkedListNode {
  data: 1,
  next:
   DoublyLinkedListNode {
     data: 3,
     next:
      DoublyLinkedListNode { data: 4, next: [DoublyLinkedListNode], prev: [Circular] },
     prev: [Circular] },
  prev: null }
5
*/
