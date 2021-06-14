
let mymap = L.map('mapid').setView([43.610, 3.876], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2FiYWdvb2wiLCJhIjoiY2twZTc0OTFwMXRsdjJ6b2d5NjRhaDllMyJ9.njhiqa0HxCPgZkTX0GV8FQ', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 15,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'your.mapbox.access.token'
}).addTo(mymap);
let marker1 = L.marker([43.61, 3.87]).addTo(mymap);
let marker2 = L.marker([43.59, 3.878]).addTo(mymap);
let marker3 = L.marker([43.63, 3.871]).addTo(mymap);
let marker4 = L.marker([43.61, 3.861]).addTo(mymap);
let marker5 = L.marker([43.60, 3.895]).addTo(mymap);

marker1.bindPopup("<img src='site1.jpg' alt='Site 1' width='150px'/>");
