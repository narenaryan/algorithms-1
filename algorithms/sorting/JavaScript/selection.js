// o(n^2)
function selectionSort(arr) {
    for (i = 0; i < arr.length - 1; i++) {
        var min = i,
            temp;
        for (j = i; j < arr.length; j++) {
            if (arr[i] > arr[j])
                min = j;
        }
        // Swap i'th element with min element 
        temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}

// Example
arr = [2, 12, 8, 7, 1, 15];
console.log(selectionSort(arr));