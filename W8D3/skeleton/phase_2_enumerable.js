// Array.prototype.myEach = function (callback) {
//     for (let i = 0; i < this.length; i++) {
//         callback(this[i]);
//     };
// };



Array.prototype.myMap = function (callback){
    let newArr = [];
    for (let i = 0; i < this.length; i++){
        newArr.push(this[i]);
    };
    callback(newArr);
};








[1,2,3,4,5].myMap(function(Array) {
    console.log(Array)
});

