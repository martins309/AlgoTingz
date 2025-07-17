//Given a sorted array and a number, write a function called sortedFrequency 
//That counts the occurrences of the number in the array


// here is the colt steele solution for the sorted frequency parttern 

function sortedFrequency(arr, num) {
  let firstIdx = findFirst(arr, num);
  if (firstIdx === -1) return firstIdx;
  let lastIdx = findLast(arr, num);
  return lastIdx - firstIdx + 1;
}
 
function findFirst(arr, num, low = 0, high = arr.length - 1) {
  if (high >= low) {
    let mid = Math.floor((low + high) / 2)
    if ((mid === 0 || num > arr[mid - 1]) && arr[mid] === num) {
      return mid;
    } else if (num > arr[mid]) {
      return findFirst(arr, num, mid + 1, high)
    } else {
      return findFirst(arr, num, low, mid - 1)
    }
  }
  return -1
}
 
function findLast(arr, num, low = 0, high = arr.length - 1) {
  if (high >= low) {
    let mid = Math.floor((low + high) / 2)
    if ((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num) {
      return mid;
    } else if (num < arr[mid]) {
      return findLast(arr, num, low, mid - 1)
    } else {
      return findLast(arr, num, mid + 1, high)
    }
  }
  return -1
}



// here is the gpt solution 

// You're very close — you're using binary search appropriately as a starting point. But your implementation currently doesn't:

// 1. Actually **search for the first and last occurrence** of the number.
// 2. Return the **correct count**.
// 3. Use `.push(count[arr[middle]])`, which doesn’t make sense in this context.

// Here’s a fixed version that keeps your style:

function sortedFrequency(arr, num) {
    function findFirst() {
        let left = 0;
        let right = arr.length - 1;
        let result = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] === num) {
                result = mid;
                right = mid - 1; // Keep going left
            } else if (arr[mid] < num) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }

    function findLast() {
        let left = 0;
        let right = arr.length - 1;
        let result = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] === num) {
                result = mid;
                left = mid + 1; // Keep going right
            } else if (arr[mid] < num) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }

    let first = findFirst();
    if (first === -1) return -1; // Not found
    let last = findLast();

    return last - first + 1;
}

console.log(sortedFrequency([1,1,2,2,2,2,3], 2)); // Output: 4



