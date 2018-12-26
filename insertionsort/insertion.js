async function insertionSort (items) {
  for (var i = 1; i < items.length; i++) {
    let value = items[i]

    //at this time , highlight the "value item " .... and then check if its at correct position or needs to be replaced ... 
    //we can recognize the cube ... by using the 50 * i => where i rep the respcitive block
    console.log("before1");
      await sleep(3000);
    console.log("after1");

paper.rect(50*i,30, 50, 50).attr({
  fill : "red",
  });
       await sleep(2000);

console.log(" coloring"+i);
var flag =0 ;
   // store the current item value so it can be placed right
    for (var j = i - 1; j > -1 && items[j] > value; j--) {
console.log("going in fn or not ?? ") ; 
//now ,if at all it goes into this loop ... the i one will change its position and be sifted to the bottom .. temporarily .. 
if(flag == 0)
{
        flag = 1 ;
        await sleep(7000);

  console.log(" animating"+j);
  var m = (i/2) ; 

    paper.rect(50*i,30, 50, 50).animate({ 'width': 50, 'height': 50, 'fill': 'purple', 'x': 50*m, 'y': 100 }, 4000, "easeInOut" );
    paper.text(50*i,30, 50, 50).animate({ 'width': 50, 'height': 50, 'fill': 'purple', 'x': 50*m, 'y': 100 }, 4000, "easeInOut" );

            await sleep(4000);

}
//     console.log("break");
   await sleep(3000);

//     console.log("breakdone");


// loop through the items in the sorted array (the items from the current to the beginning)
      // copy each item to the next one
      items[j + 1] = items[j] ; 

var m = Number(j+1); 
    paper.rect(50*j,30, 50, 50).animate({ 'width': 50, 'height': 50, 'fill': 'blue', 'x': 50*m , 'y': 30 }, 4000, "easeInOut" );
    paper.text(50*j,30, 50, 50).animate({ 'width': 50, 'height': 50, 'fill': 'blue', 'x': 50*m, 'y': 30 }, 4000, "easeInOut" );




    }
    // the last item we've reached should now hold the value of the currently sorted item
    items[j + 1] = value 
   await sleep(4000);

if(flag == 1 )
{

var m = Number(j+1); 
    paper.rect(50*m,100, 50, 50).animate({ 'width': 50, 'height': 50, 'fill': 'blue', 'x': 50*m , 'y': 30 }, 4000, "easeInOut" );
    paper.text(50*m,100, 50, 50).animate({ 'width': 50, 'height': 50, 'fill': 'blue', 'x': 50*m, 'y': 30 }, 4000, "easeInOut" );

}

   await sleep(4000);

paper.rect(50*i,30, 50, 50).attr({
  fill : "white" }) ;
  
  

// paper.rect(50*m,100, 50, 50).attr({
//   fill : "white" 
// stroke:"white"}) ;
  
}


  //after the ith iteration is done .... decolor that repective node .. because duh ... you dont want it to be colored for some one elses iteration also 

// });
  return items
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var paper ; 
var rect ; 
function sort(){
  //insertionSort(list);

  //the first creating of the cubes to store the numbers list 


    paper = Raphael("container", window.innerWidth , window.innerHeight); 
for(i=0;i<list.length;i++){
//making blocks for the very first time... 
 rect = paper.rect(50*i,30, 50, 50);

 //adding text separately ... coz theres no parent child relation in raphael /// 
var string = list[i] ; 
var t = paper.text(50*i, 30 , string).attr({
  "size":"30" ,
  "font-weight": "bold"
});


}



console.log(insertionSort(list)) // [ 17, 20, 26, 31, 44, 54, 55, 77, 93 ]
}

const list = [4,3,2,1]




function rem()
{
  //  paper.rect(50*3,100, 50, 50).animate({ 'width': 50, 'height': 50, 'fill': 'purple', 'x': 50*2, 'y': 200 }, 4000, "easeInOut" );


paper.rect(50*2,30, 50, 50).attr({
  fill : "white",
  
});


  console.log("kdglgfikl");

//    paper.rect(50*2,30, 50, 50).attr({
//   fill : "green"
// });

  rect.removeData({ 'x': 50*2, 'y': 30 });



}
