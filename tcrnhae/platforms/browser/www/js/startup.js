function trackAndCircle(){
	trackLocation();
	addPointLinePoly();
	getEarthquakes();
	getPort();
}

function startup(){
	document.addEventListener('DOMContentLoaded', function(){
		trackAndCircle();
	}, false);
}

