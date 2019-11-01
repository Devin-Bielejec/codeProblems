# introductionToAlgorithms

My Solutions and answers to exercise questions in "Introduction to Algorithms" 3rd Edition

For Datastructures/Algorithms

1. Short summary of what is is
2. Why you use it
3. Pros
4. Cons
5. Example (Code snippet)

# Arrays

Description: A list

## Pros:

1. Allows Random Access
2. Can be sorted
3. Mutable
4. Easily convert to string

## Cons:

1. Insertion and Deletion are costly because the array must reindexed

## Example:

```
var removeElement = function(nums, val) {
    //Splice out value
    for (let i = nums.length; i >= 0; i--) {
        if (nums[i] === val) {
            nums.splice(i, 1);
        }
    }
    return nums.length;
};
```

# Hash

Description: Object used to store the frequency of items

## Pros

1. Constant time loop up if you have the key vs array.includes
2. Can use array methods on Object.keys()
3. Store, acces, and delete data
4. Caches

## Cons

1. Hashed collisions - Two separate values could create the same hash value.

## Example

```
var intersect = function(nums1, nums2) {
    let hash = {};
    for (let num of nums1) {
        hash[num] = (hash[num] || 0) + 1;
    }
    let results = [];
    for (let num of nums2) {
        if (hash[num]) {
            hash[num]--;
            results.push(num);
        }
    }
    return results;
};
```
