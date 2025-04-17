//Roation Method

//Here is the rotation method that we can use to rotate elemenets in the array in place 
//Using recursion

const rearrange = (array, start, end) => {
    if (start >= end) return; // Base case: single element or empty subarray

    const mid = Math.floor((start + end) / 2);

    // Recursively rearrange the left and right halves
    rearrange(array, start, mid);
    rearrange(array, mid + 1, end);

    // Merge the results by rotating the necessary sections
    merge(array, start, mid, end);
};

const merge = (array, start, mid, end) => {
    // Find the breakpoints for negatives and positives
    let leftPos = start;
    while (leftPos <= mid && array[leftPos] < 0) leftPos++;

    let rightPos = mid + 1;
    while (rightPos <= end && array[rightPos] < 0) rightPos++;

    // Rotate to bring negatives together
    rotate(array, leftPos, mid, rightPos - 1);
};

const rotate = (array, left, mid, right) => {
    // Reverse three segments to achieve the rotation
    reverse(array, left, mid);       // Reverse the middle segment
    reverse(array, mid + 1, right); // Reverse the right segment
    reverse(array, left, right);    // Reverse the combined segment
};

const reverse = (array, start, end) => {
    while (start < end) {
        [array[start], array[end]] = [array[end], array[start]];
        start++;
        end--;
    }
};

// Test case
const array = [1, -3, 2, -5, 4, -1];
rearrange(array, 0, array.length - 1);
console.log(array); // [-3, -5, -1, 1, 2, 4]
