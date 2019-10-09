function range(a, b, step) {
    let arr = [];
    for (a; step < 0 ? a > b : a <= b; a += step) {
      arr.push(a);
    }
    return arr;
}

console.log(range(10, 4, 1));
console.log(range(-43, 0, 3))
  
function sum(arr) {
    let sum = 0;
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sum([1,2,3]));

function reverseArray(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
    newArr.unshift(arr[i]);
    }  
    return newArr;
}

console.log(reverseArray([1,2,3]));
console.log(reverseArrayInPlace([1,2,3,4]))

function reverseArrayInPlace(arr){
    for (let i = 0; i < arr.length/2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}

console.log(reverseArrayInPlace([1,2,3,]));
console.log(reverseArrayInPlace([1,2,3,4]))

function arrayToList(arr){
    if (arr.length === 1) {
        return {value: arr[0], rest: null}
    } else {
        let val = arr.shift();
        return {value: val, rest: arrayToList(arr)}
    }
}

console.log(arrayToList([1,2,3]))

function listToArray(list) {
    let arr = [];
    while (list != null) {
        arr.push(list.value);
        list = list.rest;
    }
    return arr;
}

console.log(listToArray({value: 3, rest: {value: 2, rest: null}}))

function prepend(element, list) {
    return {value: element, rest: list};
}

console.log(prepend(4, {value: 3, rest: null}))


///DEEP COMPARISON