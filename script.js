function myFunc () {
	
	var pic = document.getElementById("Image1");
		pic.style.visibility = "hidden";

};

// AJAX function call 


function httpresponse(){
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200) //
    {
    document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
    }
  else{
   	document.getElementById("myDiv").innerHTML = ("Waiting for Response...! ready state is : "+xmlhttp.readyState+ " status is: "+
   		xmlhttp.status);
    }
  }

xmlhttp.open("GET","https://www.yahoo.com/",true);
xmlhttp.send();
};


function newFunc() {

	var sho = document.getElementById("Image2");
//	sho.style.alignSel f= "center";
	sho.style.visibility =  "hidden";

	};
	
