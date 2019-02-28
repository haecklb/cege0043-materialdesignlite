function trackLocation(){
	if(navigator.geolocation){
		navigator.geolocation.watchPosition(showPosition);
	} else {
		document.getElementById('showLocation').innerHTML="Geolocation is not supported by this browser.";
	}
}
function showPosition(position){
	document.getElementById('showLocation').innerHTML="Latitude:"+position.coords.latitude+"<br>Longitude:"+position.coords.longitude;
	L.marker([position.coords.latitude, position.coords.longitude]).addTo(mymap)
		.bindPopup("<b>You were here</b>");
	//change the map zoom so that all the data is shown
	//mymap.fitBounds(L.marker.getBounds());
}
