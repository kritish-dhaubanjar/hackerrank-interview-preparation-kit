function findMergeNode(headA, headB) {
  let nodeA = headA;
  let nodeB = headB;
  let flag = false;
  while (true) {
    while (true) {
      if (nodeA == nodeB) {
        flag = true;
        break;
      } else {
        if (nodeB.next == null) break;
        nodeB = nodeB.next;
      }
    }
    if (nodeA.next == null || flag) break;
    nodeA = nodeA.next;
    nodeB = headB;
  }

  return nodeA.data;
}

console.log(
  findMergeNode(
    {
      data: 1,
      next: {
        data: 2,
        next: {
          data: 3,
          next: null,
        },
      },
    },
    {
      data: 1,
      next: {
        data: 2,
        next: {
          data: 3,
          next: null,
        },
      },
    }
  )
);
