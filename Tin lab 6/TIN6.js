function ConverterCelcius(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputCelcius").innerHTML=(valNum-32)/1.8;
}

function ConverterFahrenheit(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputFahrenheit").innerHTML=(valNum+32)*1.8;
}

var par = setTimeout(function(){ parSpawn()},5000);

function parSpawn(){
	var i = "new p";
	document.getElementById("spawn").innerHTML=i;
}

function passCheck() {
  var x = document.getElementById("password").value;
  var ret;

  if (isNaN(x)) {
    ret = "false";
	document.getElementById("password").style.color="red";
  } else {
    ret = "true";
	document.getElementById("password").style.color="black";
  }
  document.getElementById("ret").innerHTML = ret;
  
}

function emailCheck(){
	var x = document.getElementById("email").value;
	var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	var ret2;
	if(x.match(pattern)){
		ret2 ="true";
		document.getElementById("email").style.color="black";
	} else {
		ret2 = "false";
		document.getElementById("email").style.color="red";
	}
	 document.getElementById("ret2").innerHTML = ret2;

}

function addRow() {
  var table = document.getElementById("table");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = "new";
  cell2.innerHTML = "new";
}



