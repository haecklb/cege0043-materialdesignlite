function trackAndCircle(){
	trackLocation();
	addPointLinePoly();
}

function startup(){
	document.addEventListener('DOMContentLoaded', function(){
		trackAndCircle();
	}, false);
}

