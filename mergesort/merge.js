    function mergeSort(list,time,value) {

        var len = list.length;
        if (len < 2) {
            return list;
        }
        var middleIndex = Math.ceil(len / 2),

            // Split current li into two: left and right list.
            leftList   = list.slice(0, middleIndex),
            rightList  = list.slice(middleIndex, len);
console.log("left"+value);


var value = value - 1 ; 
console.log("lets see the list") ; 
for(i=0;i<leftList.length;i++)
console.log(list[i]); 




        leftList = mergeSort(leftList,time,value);
console.log("right"+value);
console.log("lets see the list") ; 

for(i=0;i<rightList.length;i++)
console.log(list[i]); 
        rightList = mergeSort(rightList,time,value);
console.log("merge");

        return merge(leftList, rightList);
    }

    /**
     * Solve the sub-problems and merge them together
     * to form a sub-solution.
     * 
     * Bubble up until we find the solution
     * */
    function merge(leftList, rightList) {
        console.log("called") ; 
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

    var list = [11, 28, 8, 15, 50, 20, 90];

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
}

location = paper.set();

//user can select time 

var time = 1000 ; 

console.log(mergeSort(list,time,val)) // [ 17, 20, 26, 31, 44, 54, 55, 77, 93 ]

}