
    async function mergeSort(list,time,value) {

          'use strict';
  var len = list.length;

        console.log("lemgth"+len) ; 
        // an array of length one or less is technically a sorted list.
        // This is our base case.
        if (len < 2) {
            console.log("am i even here ")
            return list;
        }
        // round up so that first half is equal to or greater than second
        // This means that if we have an odd numbered length,
        // The first half will be greater than the second half
        // Don't have to do this, but simply a stylistic choice.
        var middleIndex = Math.ceil(len / 2),

            // Split current list into two: left and right list.
            leftList   = list.slice(0, middleIndex),
            rightList  = list.slice(middleIndex, len);
  
 var m = value-1 ; 

for(i=0;i<leftList.length;i++){

console.log(locations[value][i].elem+"i am");

var bm = locations[value][i].elem ;
var bm1 = locations[value][i].text ;

bm.attr({
  fill : "red",
  });

var bb = Number(50) + Number( Number(5 - value)*50) ; 
var bb1 = Number(bb +28) ;

//height will be det by the leftlist.length ... 

var bp = Number(list.length - i ) ; 
var bp1 = Number(list.length - bp ) ; 

 item = new Item(
            paper.rect(50*bp1,bb, 50,50),
             //adding text separately ... coz theres no parent child relation in raphael ///
            paper.text(50*bp1+28, bb1 , list[i]).attr({
  "font-weight": "bold" , 
   'font-size': '25px'
})  );

 //now we'll just add this item to the locations array 
locations[m][i] = item ; 
}

 var vv = await sleep(time);
 console.log("hi");
 console.log('left got called ');
// console.log(m+"lets print m haha im actually pissed lol ");
        leftList = mergeSort(leftList,time,m);
   //await sleep(time);

console.log("buuutttt?");

console.log("1vaalue " + value +"i is "+ i);
var k = i ;

for(var i=0;i<rightList.length;i++){
 var mm =   await sleep(time);

   var kk = Number(k + i) ; 
    var m = value-1 ; 

console.log("2value " + value +"i is "+ kk);

//for thisa na , we have to access stuff from the actual list that was passed ... not just the right list ... thats why 
// we will usethe current index + leftlist.length .... hmm 

var br = locations[m][kk].elem ;
var br1 = locations[m][kk].text ;

br.attr({
  fill : "red",
  });

var bb = Number(50) + Number( Number(5-value)*50) ; 
var bb1 = Number(bb +28) ;


//the width .. as in .. how muc h to the right the block will be drawn .. 
// this will be decided aas a function of ... the rightlist.length ... 


var bp1 = Number(list.length - kk ) ; 
//var bp1 = Number(list.length - bp ) ; 


//height will be det by the rightlist.length ... 
 item = new Item(
            paper.rect(50*bp,bb, 50,50),
             //adding text separately ... coz theres no parent child relation in raphael ///
            paper.text(50*bp+28, bb1 , list[kk]).attr({
  "font-weight": "bold" , 
   'font-size': '50px'

})  );

 var m = value-1 ; 

//now well just add this item to the locations array 
locations[m][kk] = item ;


}
var kk =    await sleep(time);

console.log('right');

        rightList = mergeSort(rightList,time,m);

 var tt =   await sleep(time);

        return merge(leftList, rightList);

    }

    /**
     * Solve the sub-problems and merge them together
     * to form a sub-solution.
     * 
     * Bubble up until we find the solution
     * */
    function merge(leftList, rightList) {       
     console.log("i got callled")

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
var rect ; 
var locations = []; 


var k =Math.log2(list.length);




var val = Math.ceil(k) ; 

console.log("hi"+val) ; 


  for (var i=0;i<list.length;i++) {
     locations[i] = [];
  }


function Item(elem, text) {
    this.elem = elem;
    this.text = text;
}

var item ; 
function mer(){


//this is to find out ... how many steps will it get ... well recursed for ... 

    paper = Raphael("container", window.innerWidth , window.innerHeight); 

var location = paper.set();


for(i=0;i<list.length;i++){
//making blocks for the very first time...

 item = new Item(
            paper.rect(50*i,30, 50,50),
             //adding text separately ... coz theres no parent child relation in raphael ///
            paper.text(50*i+28, 30+28 , list[i]).attr({
  "font-weight": "bold" , 
   'font-size': '25px'

})  );

    locations[val][i] = item;

    console.log(val+" "+i);
}

location = paper.set();

//user can select time 

var time = 1000 ; 

console.log(mergeSort(list,time,val)) ;// [ 17, 20, 26, 31, 44, 54, 55, 77, 93 ]

}


function sleep(ms) {
    console.log("wtf");
  return new Promise(resolve => setTimeout(resolve, ms));
}

//what we gonna do here is ... find the closest power to 2 of the given number of elements ... and make a locations multi dim array for the same ... 
// and then everytime those get created ... just store them there ........ 