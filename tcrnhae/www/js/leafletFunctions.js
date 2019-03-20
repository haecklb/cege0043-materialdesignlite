var client;
var earthquakes;
var tablegeomlayer;

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


//create the code to get the table geojson data using an XMLHttpRequest
function getTableGeom(tablename, geomcolumn){
	client=new XMLHttpRequest();
	var url = 'http://developer.cege.ucl.ac.uk:'+ httpPortNumber +'/getGeoJSON/' +tablename+ '/' +geomcolumn;
	alert(url);
	client.open('GET',url);
	client.onreadystatechange=tableGeomResponse;
	client.send();
}

//create the code to wait for the response from the data server, and process the response once received
//this function listens out for the server to say the data is ready (has state 4)
function tableGeomResponse(){
	if(client.readyState==4){
		var tablegeom=client.responseText;
		loadTableGeomLayer(tablegeom);
	}
}

function loadTableGeomLayer(tablegeom){
	//convert text to JSON
	var tablegeomjson=JSON.parse(tablegeom);

	//add the JSON layer onto the map-it will appear using the default icons
	tablegeomlayer=L.geoJson(tablegeomjson).addTo(mymap);

	//change the map zoom so that all the data is shown
	mymap.fitBounds(tablegeomlayer.getBounds());
}




//create a variable to hold the layer itself
var earthquakelayer;
//create the code to get the earthquakes data using an XMLHttpRequest
function getEarthquakes(){
	client=new XMLHttpRequest();
		
client.open('GET','https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson');
	client.onreadystatechange=earthquakeResponse;
	client.send();
}
//create the code to wait for the response from the data server, and process the response once received
//this function listens out for the server to say the data is ready (has state 4)
function earthquakeResponse(){
	if(client.readyState==4){
		var earthquakedata=client.responseText;
		loadEarthquakelayer(earthquakedata);
	}
}

//convert the received data-which is text-to JSON format and add it to the map
function loadEarthquakelayer(earthquakedata){
	//convert the text to JSON
	var earthquakejson=JSON.parse(earthquakedata);
	earthquakes=earthquakejson;

	//load the geoJSON layer
	earthquakelayer=L.geoJson(earthquakejson,
		{
			//use point to layer to create the points
			pointToLayer:function(feature,latlng)
			{
			//look at the GeoJSON file-specificlaly at the properties-to see the earthquake magnitude and use a different marker depending on its value
			//also include a pop-up that shows the place value of the earthquakes
			if(feature.properties.mag>1.75){
				return L.marker(latlng, {icon:testMarkerRed}).bindPopup("<b>"+feature.properties.place+"</b>");
			}
			else{
			//magnitude is 1.75 or less
			return L.marker(latlng, {icon:testMarkerPink}).bindPopup("<b>"+feature.properties.place+"</b>");;
			}
		},
	}).addTo(mymap);

	//change the map zoom so that all the data is shown
	mymap.fitBounds(earthquakelayer.getBounds());
}
//create custom markers
var testMarkerRed=L.AwesomeMarkers.icon({
	icon:'play',
	markerColor:'red'
});
var testMarkerPink=L.AwesomeMarkers.icon({
	icon:'play',
	markerColor:'pink'
});



