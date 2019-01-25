
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function binarySearch(sortedArray, searchValue, minIndex, maxIndex,locations,val) {
    'use strict';

console.log("well hello");
    var currentIndex;
    var currentElement;

    while (minIndex <= maxIndex) {
        // Find the value of the middle of the array
        var middleIndex = (minIndex + maxIndex) / 2 | 0;
        currentElement = sortedArray[middleIndex];
        
        console.log("mid"+middleIndex+"curr"+currentElement);
        // It's the same as the value in the middle - we can return!
        if (currentElement === searchValue)
        {
            //in this case ... make it green !! :) 

   await sleep(time);

var bm = locations[val][middleIndex].elem ;
var bm1 = locations[val][middleIndex].text ;


bm.attr({
  fill : "green",
  });
       return middleIndex;
        }


        // Is the value less than the value in the middle of the array
        if (currentElement < searchValue) {
            //hence,search in the second half of the array ... so ... highlight that .. and draw it below 
var m = Number(middleIndex + 1) ; 
   await sleep(time);

            for(var i=m;i<=maxIndex;i++)
            {
                console.log("num 1 val i "+val +"i "+i);
                var bm = locations[val][i].elem ;
                var bm1 = locations[val][i].text ;


                bm.attr({
                    fill : "yellow"
                });

            }

                var val = Number(val-1) ; 
   await sleep(time);

            for(var i=m;i<=maxIndex;i++)
            {

var bb =Number(50+ Number(5- Number(5 - val))*50) ; 
var bb1 = Number(bb +28) ;

 item = new Item(
            paper.rect(50*i,bb, 50,50),
             //adding text separately ... coz theres no parent child relation in raphael ///
            paper.text(50*i+28, bb1 , sortedArray[i]).attr({
  "font-weight": "bold" , 
   'font-size': '25px'

})  );

 console.log("aa setting for val "+val+"i "+i);

 locations[val][i] = item ; 


            }


   await sleep(time);

          return binarySearch(sortedArray, searchValue, middleIndex + 1, maxIndex,locations,val);
        }
        // Is the value greater than the value in the middle of the array
        if (currentElement > searchValue) {


var m = Number(middleIndex) ; 
   await sleep(time);

            for(var i=minIndex;i<=m;i++)
            {
                console.log(" time 2 val i "+val +"i "+i);
                var bm = locations[val][i].elem ;
                var bm1 = locations[val][i].text ;

                bm.attr({
                    fill : "yellow"
                });

            }

                var val = Number(val-1) ; 
   await sleep(time);

            for(var i=minIndex;i<=m;i++)
            {

var bb =Number(50+ Number(5- Number(5 - val))*50) ; 
var bb1 = Number(bb +28) ;

 item = new Item(
            paper.rect(50*i,bb, 50,50),
             //adding text separately ... coz theres no parent child relation in raphael ///
            paper.text(50*i+28, bb1 , sortedArray[i]).attr({
  "font-weight": "bold" , 
   'font-size': '25px'

})  );

 console.log("bb setting for val "+val+"i "+i);

 locations[val][i] = item ; 


            }
   await sleep(time);

          return binarySearch(sortedArray, searchValue, minIndex, middleIndex,locations,val);
        }
    }

    return -1;
}
var time = 2000 ; 
function bsr(list,key){
    var val ; 

// The array with all of our numbers
//var list = [1,2,4,5,10,12,44,78,99];

// The value we are looking for in the array
var valueToFind = key;

// The starting index point in the array
var minIndex = 0;

// The full size of the array
var maxIndex = list.length - 1;


var k =Math.log2(list.length);
 val = Math.ceil(k) ; 
paper = Raphael("container", window.innerWidth , window.innerHeight); 

var location = paper.set();

var locations = []; 

  for (var i=0;i<list.length;i++) {
     locations[i] = [];
  }


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
}

location = paper.set();


var result = binarySearch(list, valueToFind, minIndex, maxIndex,locations,val);

var p = document.getElementById("sol");
    p.innerHTML += '<p>Edges and Weights :</p>';


console.log('The index position is: ', result);
console.log('The value is: ', list[result]);
} 

var paper ; 
var rect ; 

function Item(elem, text) {
    this.elem = elem;
    this.text = text;
}

var item ; 
