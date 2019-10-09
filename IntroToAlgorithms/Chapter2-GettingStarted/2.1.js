//Insertion Sort (non descreasing)
function insertionSortND(A){
    for (let j = 1; j < A.length; j++){
        let cur = A[j];
        let i = j - 1;
        while (i >= 0 && A[i] > cur) {
            A[i+1] = A[i];
            i--;
        }
        A[i+1] = cur;
    }
    return A;
}

console.log(insertionSortND([3,2,1]));
//Insertion Sort (non increasing)

function insertionSortNI(A){
    for (let j = 1; j < A.length; j++){
        let cur = A[j];
        let i = j - 1;
        while (i >= 0 && A[i] < cur) {
            A[i+1] = A[i];
            i--;
        }
        A[i+1] = cur;
    }
    return A;
}

console.log(insertionSortNI([1,2,3]));

function linearSearch(arr, value){
    console.log("Initialization - If value is item in array, return index, if not null", value === arr[0] ? 0 : null);
    console.log("Maintenance - In the loop we are inceasing the index and checking the same conditional, so it will always be true or null")
    console.log("Termination", value === arr[arr.length-1] ? arr.length-1 : null);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i], value);
        if (value === arr[i]) {
            return i;
        }
    }

}

console.log(linearSearch([1,2,3,4,5,6], 5));