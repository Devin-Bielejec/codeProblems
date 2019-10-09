function min(a,b) {
    return a < b ? a : b;
  }
  
console.log(min(4,3));

function isEven(n) {
    if (n === 0) return true;
    if (n === 1) return false;
    if (n > 0 ) {
        return isEven(n-2);
    } else {
        return isEven(n+2);
    }
}

console.log(isEven(44));
console.log(isEven(-3))

function countChar(str, target) {
    let count = 0;
    for (let char of str){
        char === target ? count++ : count;
    }
    return count;
}

console.log(countChar("awoeifjpaoiwefjaof", "f"))