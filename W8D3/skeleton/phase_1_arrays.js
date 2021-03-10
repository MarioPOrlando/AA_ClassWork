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
    console.log(newArr)
};

[1, -1, 2, 3,-3 ,4].twoSum()