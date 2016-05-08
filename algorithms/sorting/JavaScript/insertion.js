// O(n^2)

function insertionSort(arr)
{
	for (var i=1; i<arr.length; i++){
		// Declare value and a hole to it.
		value = arr[i];
		hole = i;
		/* If value is less than previous one push value 
		   of previous to current and make a hole.	
		*/
		while (hole > 0 && arr[hole-1] > value){
			arr[hole] = arr[hole - 1];
			hole = hole - 1;
		}

		// Add value to the smallest hole
		arr[hole] = value;
	}

	return arr;
}

// Example
arr = [2, 12, 8, 7, 1, 15];
console.log(insertionSort(arr));

