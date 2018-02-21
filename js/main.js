

/*
 * Display the navigation menu drop down
 */
function display_dropdown() {
	var elements = document.getElementsByClassName('dropdown')[0].getElementsByTagName('li');

	for (var i = 0; i < elements.length; i += 1) {
		elements[i].style.visibility = "visible";
		elements[i].style.display = "block";
	}
	document.getElementsByClassName('nav')[0].style.border = "none";
}

/*
 * Hide the navigation menu drop down
 */
function hide_dropdown() {
	var elements = document.getElementsByClassName('dropdown')[0].getElementsByTagName('li');

	for (var i = 2; i < elements.length; i += 1) {
		elements[i].style.visibility = "hidden";
		elements[i].style.display = "none";
	}
	document.getElementsByClassName('nav')[0].style.border = "border-bottom: 1px solid #64B5F6";
}
