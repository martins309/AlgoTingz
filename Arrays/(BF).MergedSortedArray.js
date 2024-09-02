
var merge = function(nums1, m, nums2, n) {

    let k = 0 

for (let i = 0; i < n; i++) {  // Iterate over nums2
    let current = nums2[i];
    let inserted = false;

    for (let j = 0; j < m + k; j++) {  // Iterate over nums1
        if (current < nums1[j]) {
            // Shift elements to the right to make space for nums2[i]
            for (let l = m + k; l > j; l--) {
                nums1[l] = nums1[l - 1];
            }
            nums1[j] = current;
            inserted = true;
            k++;  // Increment the position in nums1
            break;
        }
    }

    // If the current element from nums2 is larger than all elements in nums1
    if (!inserted) {
        nums1[m + k] = current;
        k++;
    }
}


};

// Example usage:
let nums1 = [1,2,3,0,0,0];
let nums2 = [2,5,6];
let m = 3;
let n = 3;

merge(nums1, m, nums2, n);
console.log(nums1);  // Output: [1,2,2,3,5,6]