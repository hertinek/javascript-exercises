const sumAll = function(a, b) {
    if(!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b <0) return "ERROR";
    if(a > b) {[a,b] = [b,a]};

    let sum = 0
    for (let i = a; i <= b; i++){
        sum += i;
    }
    return sum;

    // let sum = 0;
    // if(b > a) {
    //     for (let i = a; i <= b; i++){
    //         sum += a++;
    //     }
    //     return sum;
    // } else {
    //     for (let i = b; i <= a; i++){
    //         sum += b++;
    //     }
    //     return sum;
    // }
    
};

// Do not edit below this line
module.exports = sumAll;
