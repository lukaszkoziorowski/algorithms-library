//Binary Search Algorithm - used to find a specific element located in the sorted array

//sorted array in ascending order
let exampleArr = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];

const binarySearch = (array, target) => {
    let startIndex = 0;
    let endIndex = array.length - 1;

    while (startIndex <= endIndex) {

        //defining middleIndex
        let middleIndex = Math.floor((startIndex + endIndex) / 2);

        if (target === array[middleIndex]) {
            return console.log(`Target was found at index ${middleIndex}`)
        } else if (target > array[middleIndex]) {
            startIndex = middleIndex + 1;
        } else if (target < array[middleIndex]) {
            endIndex = middleIndex - 1;
        }

        //target not found in the array, returning -1
        else {
            console.log('Not found.')
            return -1;
        }
    }
}

const result = binarySearch(exampleArr, 11);
console.log(result)