var validMountainArray = function(A) {
    if (A.length < 3) return false;
    
    let maxA = Math.max(...A);
    console.log(maxA);
    let indexMaxA = A.indexOf(maxA);
    console.log(indexMaxA);
    if (indexMaxA === 0 || indexMaxA === A.length - 1) {
        return false;
    }
    let left = 0;
    let right = A.length-1;
    while (left < indexMaxA) {
        console.log(left);
        if (A[left] < A[left+1]) {
            left++; 
        } else {
            return false;
        }
    }
    
    while (right > indexMaxA){
        if (A[right] < A[right-1]) {
            right--;
        } else {
            return false;
        }
    }
    return true;    
};

validMountainArray([0,1,2,3,4,5,6,7,8,9]);