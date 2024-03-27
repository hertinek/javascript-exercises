// const reverseString = function(sentence) {
//     let reverseSentence = "";
//     for(let i = sentence.length; i >= 0; i--) {
//         reverseSentence += sentence.charAt(i-1)
//     }
//     return reverseSentence;
// };

const reverseString = function(sentence) {
    return sentence.split("").reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
