function trackAndCircle(){
	getPort();
	trackLocation();
	addPointLinePoly();
	startFormDataLoad();
}

function startup(){
	document.addEventListener('DOMContentLoaded', function(){
		trackAndCircle();
	}, false);
}

