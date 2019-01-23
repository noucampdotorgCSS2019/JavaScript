// Use these functions to do each part of the exercise

function part1()
{
	console.log("-- part1 --");
	var fname="Tom";
	var lname="Jones";

	console.log(`first name= ${fname}`);

	// add code here!
}

function part2()
{
	console.log("-- part2 --");
	var celsius=0;
	
	// add code here! [F = (C*9/5)+32]
}

function part3()
{
	console.log("-- part3 --");
	var mark = prompt("Input your mark:");
	console.log(`mark = ${mark}`);

	// add code here!
}


function part4()
{
	console.log("-- part4 --");

	// add code here! (Use a for loop)
}


function sqr(number)
{
	return number*number;
}

function part5()
{
	console.log("-- part5 --");

	// add code here!
}


function part6()
{
	console.log("-- part6 --");
	var lotto = [10,15,20,25,30,35];  // your lotto numbers
	var draw = [10,15,20,25,41,42];   // draw numbers

	console.log("My Lotto numbers:");

	// add code here!
}


function part7()
{
	console.log("-- part7 --");
	var lotto = [10,15,20,25,30,35];
	var draw = [10,15,20,25,41,42];

	document.write("<h3>My Numbers</h3>");
	for(var i=0;i<lotto.length;i++)
		document.write(`<img src='images/lottoimages/${lotto[i]}.png'>`);

	// add code here!
}

