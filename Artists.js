window.onload = function(){
	
	addLI("Miley Cyrus");
}


function addLI(artist)
{
	var newElement = document.createElement("li");
	var myText = document.createTextNode(artist);
	newElement.appendChild(myText);

	var myList = document.getElementById("myList");
	myList.appendChild(newElement);
}
