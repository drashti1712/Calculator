function myFunction(elem) {
	var box = document.getElementById("display");
	box.value = box.value+elem.innerHTML;
}

function calculate(){
	var str = document.getElementById("display").value;
	var operator = "";
	if (str.indexOf('+') > -1) {
	  operator = "+";
	}else if (str.indexOf('-') > -1) {
	  operator = "-";
	}else if (str.indexOf('*') > -1) {
	  operator = "*";
	}else if (str.indexOf('/') > -1) {
	  operator = "/";
	}
    var NumberOne = str.split(operator)[0];
    var NumberTwo = str.split(operator)[1];
    var op1 = parseFloat(NumberOne);
    var op2 = parseFloat(NumberTwo);
	var res=0.0;
	switch(operator){
		case '+':
		res = op1+op2;
		break;
		case '-':
		res = op1-op2;
		break;
		case '*':
		res = op1*op2;
		break;
		case '/':
		res = op1/op2;
		break;
		default:
		document.getElementById("display").value = "ERROR";
	}
	document.getElementById("display").value = res;
}



function back() {
    var value = document.getElementById("display").value;
    document.getElementById("display").value = value.substr(0, value.length - 1);
}

function on(){
	if(document.getElementById("display").value==""){
		document.getElementById("display").value="0";	
	}
	else{
		document.getElementById("display").value="";	
	}
}