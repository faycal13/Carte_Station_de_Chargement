var mymap = L.map('mapid').setView([43.296482, 5.369779999999992], 10);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.pirates',
    accessToken: 'pk.eyJ1IjoiZmF5Y2FsMTMiLCJhIjoiY2pjdWpvdHI1MTV0ZzJ2bzVueXg3NW1qeSJ9.S__ts0R0kU_XFCNHe0_eIQ'
}).addTo(mymap);
function showTab(tab) {
    console.log(tab[0].Xlongitude);
    var i = 0;
    while (i < tab.length) {
        var marker = L.marker([tab[i].Ylatitude, tab[i].Xlongitude]).addTo(mymap);
        var info = "<strong>" + tab[i].n_station + "</strong>" + "<br>" + tab[i].ad_station;
        marker.bindPopup(info);
        i++;
    }
}
d3.csv("Data/BORNES-RECHARGE-AGREGATION-REGION-V10082017V4.csv", function (error, data) {
    if (error)
        throw error;
    showTab(data);
    //console.log(data.Xlongitud); // [{"Hello": "world"}, …]
});
/*class ChargingStation {
//Attributs
  builder: string;
  operator: string;
  brand: string;
  idStation: string;
  nameStation: string;
  addressStation: string;
  codeInsee: number;
  longitude: number;
  latitude: number;
  nbPowerOutlet: number;
  idPowerOutlet: string;
  powerMax: number;
  outletType: string;
  rechargeAccess: string;
  accessibility: string;
  webSite: string;
  date: string;

constructor(longitude: number, latitude: number, nameStation: string, addressStation: string, rechargeAccess: string, nbPowerOutlet: number, powerMax?: number){

  this.longitude = longitude;
  this.latitude = latitude;
  this.nameStation = nameStation;
  this.addressStation = addressStation;
  this.rechargeAccess = rechargeAccess;
  this.nbPowerOutlet = nbPowerOutlet;
  this.powerMax = powerMax;
}

}*/
