// O(n^2)

function bubbleSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 2; j++) {
            // bubble largest element to end
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Example
arr = [2, 12, 8, 7, 1, 15];
console.log(bubbleSort(arr));