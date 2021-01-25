function processData(input) {
  let inputs = input.split("\n");
  let count = inputs[0];

  //
  let lifo = [];
  let fifo = [];
  //

  for(let i=1; i<=count; i++){
    switch (inputs[i][0]) {
      case '1':
      // console.log(lifo, fifo)

        let data = inputs[i].split(" ")[1];
        lifo.push(data);
        break;

      case '2':
      // console.log(lifo, fifo)
        if(fifo.length==0)
          while(lifo.length!=0)
            fifo.push(lifo.pop())
        fifo.pop();
        break;

      case '3':
      // console.log(lifo, fifo)

         if(fifo.length==0)
          while(lifo.length!=0)
            fifo.push(lifo.pop())
        console.log(fifo[fifo.length-1])  
        break;
    
      default:
        break;
    }
  }
} 

// processData(`10\n1 42\n2\n1 14\n3\n1 28\n3\n1 60\n1 78\n2\n2`)
processData("8\n1 12\n1 14\n3\n2\n3\n1 71\n1 63\n3")