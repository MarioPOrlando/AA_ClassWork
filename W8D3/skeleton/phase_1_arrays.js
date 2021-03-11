Array.prototype.uniq = function(){
    let newArr = [];
  for (let i = 0; i < this.length; i++) {
      if (!newArr.includes(this[i])) {
          newArr.push(this[i]);
      }
  };
   console.log(newArr);
};



// [1,2,2,2,3,3,3,3,3,3].uniq()

Array.prototype.twoSum = function(){
    let newArr = [];
    for (let i = 0; i < this.length - 1; i++) {
        for (let j = i + 1; j < this.length; j++){
            if (this[i] + this[j] === 0) {
                newArr.push([this[i], this[j]]);
            }
        };
    };
    console.log(newArr);
};

[1, -1, 2, 3,-3 ,4].twoSum();

// Array.prototype.transpose = function() {
//   let newMatrix = [];
//   for (let i = 0; i < this.length; i++) {
//     for (let j = 0; j < this[i].length; j++) {
//       newMatrix[i]
//       newMatrix[i][j] = this[j][i];
//       // newMatrix.push([this[i], this[j]] = [this[j], this[i]]);
//     };
//   };
//   console.log(this);
// }; 

Array.prototype.transpose = function () {
  let newMatrix = [];

  for (let i = 0; i < this.length; i++) {
    newMatrix.push([])
  };

  for (let i = 0; i < this.length; i++) {
    // console.log("hello");
    for (let j = 0; j < this[i].length; j++) {
      newMatrix[j].push(this[i][j]);
      console.log("hello"); // = [this[j], this[i]])
    }
  };
  console.log(newMatrix);
};

[[1, 2, 3],
 [4, 5, 6],
 [7, 8 ,9]].transpose();