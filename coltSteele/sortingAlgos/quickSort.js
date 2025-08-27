/*
Given an array, this helper functin should designate an element as a pivot
it should then rearrange elemets in the array so that all values less than the pivot
are moved to the left and greater values to the right of the pivot
The order of elememt on either dide of the pivot doesn't matter
the helper should do this in place, that is it should not create a new array
return the index of the pivot

the runtime of quick sort depends on how the pivot is selected
pivot should be the median value in the data that you're sorting

for simplicity choose the first element as the pivot


*/

/*
the function takes 3 arguments: an array, start index and end index
grab the pivor fromthe start of the array
store the current pivot index in a variable
loop through the array from start until the end
    if the pivot is greater than the current element increment the pivot index
    variable and then swap the current element with the element at the pivot index

swap the starting element with the pivot index
return the pivot index


*/