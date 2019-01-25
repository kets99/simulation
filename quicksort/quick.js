

async function quickSort(list,value) {
    var len = list.length;
    if (len <= 1) {
        return list;
    }
    // Partitioning operation
    var leftList = [];
    var rightList = [];
    var pivot = list[len - 1];      // LastElement

var time =3000 ; 
 var tt =   await sleep(time);

var m = Number(value-1) ; 

    for (var i = 0; i < len - 1; i++) {
        var currentItem = list[i];
        // Add to left list if pivot is less than array.
        if (currentItem < pivot) {
            leftList.push(currentItem)
        } else {
            rightList.push(currentItem)
        }
    }

//lets just remake whatever is above and we can then do animations on it :)

 tt =   await sleep(time);


 for(i=0;i<len;i++)
 {

var bm = locations[value][i].elem ;
var bm1 = locations[value][i].text ;


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

locations[m][i] = item ; 

 }





//     //now .. well create blocks for the left and right list and put them accordingly .. 
// //lets just make boundaries and keep em for the left and right lists ... 

// var bb = Number(50) + Number( Number(5 - value)*50) ; 
// var bb1 = Number(bb +28) ;

// //for left one
// //it'll start from the start

// //for right one
// //length of left list +one more block for pivot ... 

// var rightposition = Number(leftList.length + 1) ; 

// var leftcount = 0;
// var rightcount = 0 ;

//     for (var i = 0; i < len - 1; i++) {
//         var currentItem = list[i];
//         // Add to left list if pivot is less than array.
//         if (currentItem < pivot) {

// var bp = Number(list.length - i ) ; 
// var bp1 = Number(list.length - bp ) ; 

//  item = new Item(
//             paper.rect(50*bp1,bb, 50,50),
//              //adding text separately ... coz theres no parent child relation in raphael ///
//             paper.text(50*bp1+28, bb1 , list[i]).attr({
//   "font-weight": "bold" , 
//    'font-size': '25px'
// })  );

//  //now we'll just add this item to the locations array 
// locations[m][i] = item ; 


//         } else {
//             rightList.push(currentItem)
//         }
//     }



//     for(i=0;i<leftList.length;i++)
//     {

//     }






//     // Add pivot to front of right array
//     rightList.unshift(pivot);

    //at this point , all the work has been done .. and two  lists are ready with 0th posn of the right being the pivot ..  

console.log("printing list at this point .. right then left .. ");

for(i=0 ; i< leftList.length ; i++)
console.log(leftList[i]);


for(i=0 ; i< rightList.length ; i++)
console.log(rightList[i]);

    // Combine the partitioned items
    return quickSort(leftList).concat(quickSort(rightList));
}


//problem : this is global 
// it causes line 18 to get fucking confused
var list = [3, 155, 19, 83, 7, 18, 8, 10];

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

function main(){


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

console.log(quickSort(list,val));
}


function sleep(ms) {
    console.log("wtf");
  return new Promise(resolve => setTimeout(resolve, ms));
}

