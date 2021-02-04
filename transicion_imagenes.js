var counter = 1;
setinterval(function(){
	document.getelementbyid("radio1" + counter).checked = true;
	counter++;
	if(counter>6){
		counter = 1;
	}
},3000);