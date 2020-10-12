//slower algorithm => O(n^2)

const exampleArr = [5, 3, 6, 2, 10, 15, 2, 1];

const selectionSort = (arr) => {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    //finding smallest number in the subarray
    let min = i;
    for (let j = 0; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      //swapping
      let tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
    }
  }
  return arr;
}


// MAP VERSION
// const sortingByChoosing = (arr, length = arr.length) => {
//     arr.map((e, i) => {
//         let min = i; //index of minimum value

//         for(let j = i + 1; j < length; j++){
//             if(arr[min] > arr[j]){
//                 min = j; //updating index
//             }
//         }
//         if (i !== min){
//             [arr[i], arr[min]] = [arr[min, arr[i]]] //swapping
//         }
//     })
//     return arr;
// }

console.log(sortingByChoosing(exampleArr));