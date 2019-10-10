//Selection Sort

const selectionSort = (A) => {
    for (let i = 0; i < A.length; i++) {
        for (let j = i; j < A.length; j++) {
            if (A[j] < A[i]) {
                temp = A[j];
                A[j] = A[i];
                A[i] = temp;
            }
        }
    }
    return A;
}

console.log(selectionSort([4,3,2,6,1,3,5]))