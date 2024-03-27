const removeFromArray = function(source, ...toRemove) {

    return source.filter((element) => !toRemove.includes(element));


    //   const newArray = [];

//   for (let i = 0; i < source.length; i++) {
//     const element = source[i];
//     if (!toRemove.includes(element)) {
//       newArray.push(element);
//     }
//   }

//   source.forEach((element) => {
//     if (!toRemove.includes(element)) {
//       newArray.push(element);
//     }
//   });

//   return newArray;

//doesn't work if args are not in the same order as array elements
//     for (let i=0; i < array.length; i++) {
//         for (let arg of args) {
//             if (arg == array[i]) {
//                 array.splice(i, 1);
//             }
//         }
//     }
//     return array;
};

// Do not edit below this line
module.exports = removeFromArray;
