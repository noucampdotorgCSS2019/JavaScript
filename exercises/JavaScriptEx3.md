# JavaScript Exercise 3 – Event Handling
		
> Note:: Complete ALL the exercises in this section.


## Fetch latest Repository Branch

```
$ cd /DRIVE/xampp/htdocs/JavaScript
$ git pull --no-edit https://github.com/noucampdotorgCSS/JavaScript.git latest
$ git status

```

Check your ``htdocs/JavaScript`` folder.  You should have some new files in it.


# Part 1

1.	Examine the code in ``FirstEvent.html`` and then open it in your browser with [http://localhost/JavaScript/FirstEvent.html](http://localhost/JavaScript/FirstEvent.html).  Understand why a mouse click in the hyperlink causes the ``alert()`` message to appear.

1.	Examine the code in ``ButtonEvent.html`` and then open it in your browser with [http://localhost/JavaScript/ButtonEvent.html](http://localhost/JavaScript/ButtonEvent.html).  Understand why a mouse click in the button causes the ``alert()`` message to appear.

1.	Examine the code in ``DropDownEvent.html`` and then open it in your browser with [http://localhost/JavaScript/DropDownEvent.html](http://localhost/JavaScript/DropDownEvent.html).  Understand why a change in the dropdown causes the ``alert()`` message to appear.

1.	Examine the code in ``TextBoxEvent.html`` and then open it in your browser with [http://localhost/JavaScript/TextBoxEvent.html](http://localhost/JavaScript/TextBoxEvent.html).  Understand why a keyup in the text box causes a message to appear in the console log tab.



# Part 2

1.	You are meant to keep your HTML and JavaScript code separate. 

	Examine the code in ``FirstEventV2.html`` and ``script.js``.  Then open it in your browser with [http://localhost/JavaScript/FirstEventV2.html](http://localhost/JavaScript/FirstEventV2.html).  

	This code is typical of how you can do all Event Handling in JavaScript.


1.	Examine the code in ``ButtonEventV2.html`` and ``ButtonEventV2.js``.

	Modify the code in ``ButtonEventV2.js`` so an alert is displayed when the button is clicked.


1.	Examine the code in ``DropDownEventV2.html`` and ``DropDownEventV2.js``.

	Modify the code in ``DropDownEventV2.js`` so an alert displays the type of fruit selected.


1.	Examine the code in ``TextBoxEventV2.html`` and ``TextBoxEventV2.js``.

	Modify the code in ``TextBoxEventV2.html`` and ``TextBoxEventV2.js`` so data about the event appears in the console log tab.

1.	Push your code to **your private** repository on GitHub.  Type these commands into your *Git Bash* client:

	```
	$ cd /<DRIVE>/xampp/htdocs/JavaScript
	$ git status
	$ git add .
	$ git commit -m "Exercise 3 - Part 3 DONE|PARTIAL|HELP"
	$ git push origin master
	$ git status

	```

# Part 3

1.	Examine the code in ``fruit1.html`` and ``fruit1.js``.  Add the necessary code to change the colour of all paragraphs to red.  Use the method ``setAttribute("style","color:red");``


1.	Add to the HTML code in ``fruit1.html`` a ``<button>`` with the caption *Style*. 
	Only when this button is clicked should the paragraphs be coloured red.
	

	
1.	Examine the code ``fruit2.html`` and create a JavaScript file called ``fruit2.js`` to change the ``<span>``
	value to the selection made from the dropdown box.


1.	Modify the JavaScript file ``fruit2.js`` to change the colour of the ``<h1>`` heading to blue when 
	the user moves the mouse over it.  And when the mouse leaves the heading the colour should be restored to black.

	See [HTML DOM Events](http://www.w3schools.com/jsref/dom_obj_event.asp)
	
	
1.	Examine the code in ``toUpper.html`` and using JavaScript in a file called ``toUpper.js`` allow the user 
	to type text in the first textbox and when the *To Upper* button is pressed display the text 
	input using uppercase in the second textbox.
	 
	This link will be useful – [JavaScript String Reference](http://www.w3schools.com/jsref/jsref_obj_string.asp)

1.	Examine the HTML code in ``favouriteV2.html`` and create a JavaScript file ``favouriteV2.js`` to update the ``<b>`` element with the correct colour when a new colour is selected from the dropdown box.

	You must capture the ``onchange`` event associated with the dropdown box. 



1.	Push your code to **your private** repository on GitHub.  Type these commands into your *Git Bash* client:

	```
	$ cd /<DRIVE>/xampp/htdocs/JavaScript
	$ git status
	$ git add .
	$ git commit -m "Exercise 3 - Part 3 DONE|PARTIAL|HELP"
	$ git push origin master
	$ git status

	```


# Part 4

Fetch latest version of the repository:

```
$ cd /DRIVE/xampp/htdocs/JavaScript
$ git pull --no-edit https://github.com/noucampdotorgCSS/JavaScript.git latest
$ git status

```

Check your ``htdocs/JavaScript`` folder.  You should have a new subfolder called ``liveMatch`` with some code and images files.

1.	Watch this [video](https://media.heanet.ie/page/205da5282eae9bd73455e8f82f4b5c27) that illustrates a program that records match events for a GAA match.  You will use the files given in the ``liveMatch`` folder to replicate this functionality.  

1.	Push your code solutions to **your private** repository on GitHub.  Type these commands into your *Git Bash* client:

	```
	$ cd /<DRIVE>/xampp/htdocs/JavaScript
	$ git status
	$ git add .
	$ git commit -m "Match Events - Part 4 DONE|PARTIAL|HELP"
	$ git push origin master
	$ git status

	```

