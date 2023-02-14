const transpose = function(matrix) {
  
  // find out the shape of the orginal matrix.
  // look for the number of indexs of arrays.
  // look for the amount of elements in each index.
  // you only need one because it is uniform.
  // read the values of the elements in the array.
  // create the new arrays to push onto. []
  // nested loop to do the array and
  // push elements onto new array. Perhaps base on the new array shape?
  // flip the x,y for the elements and arrays.
  // have our arrays be printing out by the print matrix.

};
  

// This function is to print out the matrix on the console.
// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write("\n");
  }
};
  
printMatrix(
  transpose([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ])
);
  
console.log("----");
  
printMatrix(
  transpose([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);
  
console.log("----");
  
printMatrix(transpose([[1, 2, 3, 4, 5, 6, 7]]));