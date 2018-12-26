//     var arr=[];
//     var x =0; 

//        parseInt(x);

//        // parseInt(r);
//        // parseInt(l);


// function add() {
//     var x = document.getElementById("authors").value;
//     var t;
//     for(var m=1;m<=x;m++){
//     	arr[m]=m;
//       t = document.createElement("INPUT");
//     t.setAttribute("type","text");
//     t.setAttribute("name",arr[m]);
//     document.getElementById("demo").appendChild(t);  
//     }

// console.log(arr[0]+"vbg")

//     //   t = document.createElement("INPUT");
//     // t.setAttribute("type","button");
//     // t.setAttribute("value","Start simulation");

//     // t.setAttribute("onclick","sort(0)");   
// //merge start is the fn where divide actus=ally gets called multiple times

//     // document.getElementById("demo").appendChild(t);

// }

// function dividestart(){
//     console.log("ho");
//     var count = 0;
//     //here,we start counting with 0 ... because in the first iteration we dont want any space between any two blocks 
//     //the count variable is to keep check on which iteration of divide is on ... & then accordingly increast space betn the divided elements  
//     var interval = 2000 ;
//     var max ; 
//             //here interval can be passed as parameter taken from user
//             var x = document.getElementById("authors").value;
// if(x>3)
//     max=2;
// else
//     if(x>5)
//         max=3;
//     else
//         if(x>9)
//             max=4;

// for(i=0;i<=max;i++){
//     console.log("ho");

//  setTimeout(divide(count),interval);
//  count++; 
// }
// }


// 	function divide(count){

//             var x = document.getElementById("authors").value;

// var ble = count * 10 ;
// console.log("vv"+ble);
// var kk ; 
	
// var paper = Raphael("container", window.innerWidth , window.innerHeight); 
// //height , wid of container 
// for(var i=1;i<=x;i++)
// {

//     kk = 50*i + ble+i*ble;
//     console.log(kk);
//     console.log(count+"kikik");

// var rect = paper.rect(kk,3 * count, 50, 50);
// //top left coordinates , height , width 
// //arghhhhhhhh why is this loc not working .. ill check after dinner 
// // ok so ... once thus is done ..... 
// // the very last coordinates can be saved and.
//  // using them 
// var string = arr[i]; 
// var t = paper.text(kk, 10*count , string);

// }
// }


// //heres a thought , in every stage na 
// // highlight ... whatever is getting selected ...... and then redraw the same thing niche ....
//  ///


//     function sort(l,r) 
//     { 
// // x.toPrecision(0);
// // l.toPrecision(0);
// // r.toPrecision(0);

//         console.log("hi"+l+r);
//         if (l < r && r>=1 && l >=1 ) 
//         { 
//         console.log("hi2");

//             // Find the middle point 
//             var m = (l+r)/2; 

//             //like here .. highligh the l to r in the main array and redraw it below 
//             // just keep doing it .. hahahah 
//             // i dont really think its funny tho 
//             // its madd ... ok just sto[ p]

// //for loop from l to r ... and just redraw it below for now .... 

// for(i=l;i<=m;i++)
// {
//     console.log("drawig"+arr[i]) ; 
//     // var rect = paper.rect(50*i,50, 50, 50);
//     // var t = paper.text(kk, 10*count , string);
//     //we prolly need to keep a global array or just a variable to check in which position the blocks will be getting displayed ....... 

// }
//             // Sort first and second halves 
//             sort(l, m); 
//             sort(m+1, r); 
//             // Merge the sorted halves 
//             merge(l, m, r); 
//         } 
//     }














/**
     * Merge sort algorithm implementation
     *
     * @param {Array} list the list to be sorted.
     * */
    function mergeSort(list) {

        var len = list.length;
        // an array of length one or less is technically a sorted list.
        // This is our base case.
        if (len < 2) {
            return list;
        }
        // round up so that first half is equal to or greater than second
        // This means that if we have an odd numbered length,
        // The first half will be greater than the second half
        // Don't have to do this, but simply a stylistic choice.
        var middleIndex = Math.ceil(len / 2),

            // Split current li into two: left and right list.
            leftList   = list.slice(0, middleIndex),
            rightList  = list.slice(middleIndex, len);

for(i=0;i<leftList.length;i++){
//making blocks for the very first time... 
//here .. to keep record of where it is .... as in which iteration ... as in at what exact height must we print the block s. .... we can make use of the 
// list ka l ength ka function ... obvio .. an inverse functiion ... 
var bb = Number(50*i) + Number( Number(list.length - leftList.length)*50) ; 
console.log("drawing now .. left mein " + bb ) ;
 var rect = paper.rect(bb , 90 + (list.length - leftList.length)*80, 50, 50);
 
}

console.log("left");
        leftList = mergeSort(leftList);


for(i=0;i<rightList.length;i++){
//making blocks for the very first time... 
var bbb = Number(50*i )+ Number(Number(list.length - rightList.length)*50)
console.log("drawing now .. right mein "+bbb) ;

 var rect = paper.rect(bbb,90 + (list.length - rightList.length)*80, 50, 50);
}

console.log("right");
        rightList = mergeSort(rightList);

        return merge(leftList, rightList);
    }

    /**
     * Solve the sub-problems and merge them together
     * to form a sub-solution.
     * 
     * Bubble up until we find the solution
     * */
    function merge(leftList, rightList) {
        var result = [];
        while (leftList.length > 0 && rightList.length > 0) {
            var leftItem = leftList[0],
                rightItem = rightList[0];
            if (leftItem > rightItem) {
                result.push(rightItem);
                rightList.shift();
            } else {
                result.push(leftItem);
                leftList.shift();  // remove item that was pushed in
            }
        }

        // if left list has items, add what is left to the results
        while (leftList.length !== 0) {
            result.push(leftList[0]);
            leftList.shift();
        }

        // if right list has items, add what is left to the results
        while (rightList.length !== 0) {
            result.push(rightList[0]);
            rightList.shift();
        }

        // Combine/merge the left and right list after
        // comparing and sorting the results in order.
        return result;
    }

    var list = [11, 29, 8, 15, 900, 20, 90];
    var paper ; 
function mer(){

    paper = Raphael("container", window.innerWidth , window.innerHeight); 
for(i=0;i<list.length;i++){
//making blocks for the very first time... 
 var rect = paper.rect(50*i,30, 50, 50);
}

    var result = mergeSort(list);

    console.log(result);
}