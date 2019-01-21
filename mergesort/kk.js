

function sleep(ms) {
    console.log("wtf");
  return new Promise(resolve => setTimeout(resolve, ms));
}


async function bb(val){
if(val==1)
	return "kets" ;
else{
	console.log(val);
	var val1 = val - 1 ;
	bb(val1);
	try{
	let kk =    await sleep(2000);
	console.log(kk);

}
catch(error){
		console.log(error);

	}

		console.log("second");
}
}

function main1() {
	// body...
	var tt = bb(3);
	console.log("main"+tt);
}