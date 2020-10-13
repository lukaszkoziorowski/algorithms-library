const recursiveMax = (arr) => {
    if(arr.length == 2) {
        return arr[0] > arr[1] ? arr[0] : arr[1];
    }
    let subMax = recursiveMax(arr.slice(1));
    return arr[0] > subMax ? arr[0] : subMax;
}