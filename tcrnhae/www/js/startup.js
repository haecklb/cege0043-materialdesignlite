function startup(){
	document.addEventListener('DOMContentLoaded', function(){
		trackAndCircle();
	}, false);
}

function trackAndCircle(){
	trackLocation();
	addPointLinePoly();
}