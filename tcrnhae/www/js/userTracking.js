function trackLocation(){
	if(navigator.geolocation){
		navigator.geolocation.watchPosition(showPosition);
	} else {
		document.getElementById('showLocation').innerHTML="Geolocation is not supported by this browser.";
			}
		}

function showPosition(position){
	L.marker([position.coords.latitude, position.coords.longitude]).addTo(mymap).bindPopup("<b>You were here</b>");
	mymap.setView([position.coords.latitude, position.coords.longitude], 13)
}