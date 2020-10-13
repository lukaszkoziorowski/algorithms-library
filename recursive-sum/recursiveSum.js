const recursiveSum = (arr) => {
    if(arr.length === 0) return 0;
    else arr[0] + recursiveSum(arr.slice(1));
}