// Initialize and add the map
let map;

async function initMap(l,n) {
// The location of Uluru
const position = { lat: l, lng:n };
// Request needed libraries.
//@ts-ignore
const { Map } = await google.maps.importLibrary("maps");
const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

// The map, centered at Uluru
map = new Map(document.getElementById("map"), {
zoom: 4,
center: position,
mapId: "DEMO_MAP_ID",
});

// The marker, positioned at Uluru
const marker = new AdvancedMarkerElement({
map: map,
position: position,
title: "Uluru",
});
}
function getmap(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(sucess,error)
  
     }else{
      alert('update your browser');
     }
    }
    function sucess(obj){
        try{
            document.getElementsByTagName("p")[0].remove();
        } catch(err){
            console.log("no p");
        }
        var lat=obj.coords.latitude;
        var lon=obj.coords.longitude;
        var timestamp = new Date().toLocaleString();
        document.getElementById("tab").style.display = "table";
        document.getElementById("map").style.height = "70%";
        document.getElementById("lat").innerHTML = `${lat}`;
        document.getElementById("lon").innerHTML = `${lon}`;
        document.getElementById("time").innerHTML = `${timestamp}`;
        initMap(lat,lon);

    }
    function error(e){
      switch(e.code){
              case 1:
                document.getElementById("map").style.height = "0";
                document.getElementById("tab").style.display = "none";
                   var msg = document.createElement("p");
                   var ms = document.createTextNode (`you need to give me permission to get your location`);
                   msg.appendChild(ms);
                   document.body.appendChild(msg);
              break;
           }
    }
    document.getElementById("getmap").addEventListener("click",getmap);