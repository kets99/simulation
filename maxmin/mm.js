
var item ; 

var paper ; 
var rect ; 

function Item(elem, text) {
    this.elem = elem;
    this.text = text;
}

var time = 2000 ; 

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function mm (){
      var list = [1,2,37,4];
      var last = Number(list.length-1) ; 


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




var list2 = maxMin(list,0,last);
console.log(list2[0]+" "+list2[1]) ; 

}



 function maxMin(list,i,j){

console.log("called"+i+j);

  var localmin,localmax ; 
  var mid,max1,min1,max2,min2;
  var arr = [] ; 
  var result1 = [] ;
  var result2 = [] ; 


  if(i==j)
  {
      localmin = list[i];
      localmax = list[i];
}
// else 
//   if(i==j-1)

 else {

  
        // if P is not small, divide P into sub-problems.
        // where to split the set
        mid = (i + j) / 2 | 0;
        // Solve the sub-problems.
        result1 = maxMin( list, i, mid);    
        result2 = maxMin( list, mid+1, j);
        max1 = result1[0];
        min1 = result1[1];
        max2=result2[0];
        min2=result2[1];
        // Combine the solutions.
        if (max1 < max2) localmax = max2;
        else localmax=max1;
        if (min1 < min2) localmin = min1;
        else localmin=min2;
    }

    arr[0] = localmax;
    arr[1] = localmin;
    return arr;
}

