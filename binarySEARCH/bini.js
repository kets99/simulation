function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (arr[mid] === target) {
            //this is the base condition .. when a match has been found ... highlight this to green and bye bye ... our work here is done :) 
            return mid;
        }
//before this step .. 

        if (arr[mid] < target) {
            //in this case , just highlight this to yellow for a certain time .. and then white again .. then .. go on and binarySearch will be called for this again .. 

            left = mid + 1;
        } else {
            
            right = mid - 1;
        }
    }
    return -1;
}


    function bs(list){
    //var list = [11, 28, 8, 15, 50, 20, 90];



       kk=   binarySearch(list, 20) ;  
       //then , using innnerHTML this can be printed on the screen ... 
       console.log(kk);
    }