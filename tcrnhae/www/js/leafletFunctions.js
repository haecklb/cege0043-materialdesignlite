var client;

function addPointLinePoly(){
	//add a point
	L.marker([51.5, -0.09]).addTo(mymap);
	//add a line
	L.polyline([[51.5, -0.09], [51.509, -0.08]]).addTo(mymap);
	//add a polygon with 3 end points(i.e. a triangle)
	L.polygon([
		[51.509, -0.08],
		[51.503, -0.06],
		[51.51, -0.047]
	],{
		color:'red',
		fillColor:'#f03',
		fillOpacity: 0.5
	}).addTo(mymap).bindPopup("I am a polygon.");

}

addPointLinePoly()