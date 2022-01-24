function binarySearch(arr, val){
    arr.sort((a, b) => a - b);
    let first = 0;
    let last = arr.length - 1;
    while(first <= last) {
      let middle = Math.floor((first + last) / 2);

      if(val > arr[middle]) {
        first = middle + 1;
      }

       if(val < arr[middle]) {
        last = middle - 1;
      }
      
      if(val == arr[middle]) {
        return console.log(middle);
      }
    }   
  }


  binarySearch([7, 3, 8, 4, 0, 6], 6);