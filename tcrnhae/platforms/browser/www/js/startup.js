function trackAndCircle(){
	getPort();
	trackLocation();
	addPointLinePoly();
	
}

function startup(){
	document.addEventListener('DOMContentLoaded', function(){
		trackAndCircle();
	}, false);
}

