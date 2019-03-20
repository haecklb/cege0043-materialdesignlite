function trackAndCircle(){
	getPort();
	trackLocation();
	addPointLinePoly();
	//getFormData();
}

function startup(){
	document.addEventListener('DOMContentLoaded', function(){
		trackAndCircle();
	}, false);
}

