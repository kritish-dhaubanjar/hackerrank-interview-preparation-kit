	/*
    class Node 
    	int data;
    	Node left;
    	Node right;
	*/
	public static int height(Node root) {
      	if(root == null)
          return -1;
          
        int left = height(root.left) + 1;
        int right = height(root.right) + 1;
        
        return left > right ? left: right;
    }
