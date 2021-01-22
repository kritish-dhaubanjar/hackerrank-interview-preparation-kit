/*
Detect a cycle in a linked list. Note that the head pointer may be 'null' if the list is empty.

A Node is defined as: 
    class Node {
        int data;
        Node next;
    }
*/

boolean hasCycle(Node head) {
  List<Node> nodes = new ArrayList<Node>();
  Node node = head;
  if(node != null){
    while(true){
      if(nodes.contains(node)){
        return true;
      }else{
        nodes.add(node);
      }

      if(node.next != null){
        node = node.next;
      }else{
        return false;
      }
    }
  }else{
    return false;
  }
}