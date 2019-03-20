function trackAndCircle(){
	trackLocation();
	getPort();
	addPointLinePoly();
	getFormData();
}

function startup(){
	document.addEventListener('DOMContentLoaded', function(){
		trackAndCircle();
	}, false);
}

