import React from 'react';
import './Home.css';
import MapSection from '../map/Map.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFire,faLink} from '@fortawesome/free-solid-svg-icons';

const cameras = {
  "Hawkins Peak":[38.33412,-120.88257, "https://www.alertwildfire.org/region/centralcoast/?camera=Axis-HawkinsPeak", "Central Coast"],
  "Sierria at Tahoe":[38.79798,-120.05791, "https://www.alertwildfire.org/region/centralcoast/?camera=Axis-Sierra", "Central Coast"],
  "Leek Springs":[38.63779,-120.27008, "https://www.alertwildfire.org/region/centralcoast/?camera=Axis-Leek", "Central Coast"],
  "Armstrong Lookout 2":[38.54199,-120.38578, "https://www.alertwildfire.org/region/centralcoast/?camera=Axis-ArmstrongLookout2", "Central Coast"],
  "Mt. Danaher":[38.74337,-120.65529, "https://www.alertwildfire.org/region/centralcoast/?camera=Axis-MtDanaher", "Central Coast"],
  "Mt. Zion 2":[38.39453,-120.65495,"https://www.alertwildfire.org/region/centralcoast/?camera=Axis-MtZion2", "Central Coast"],
  "Kennedy Mine":[38.36566,-120.77957, "https://www.alertwildfire.org/region/centralcoast/?camera=Axis-KennedyMine", "Central Coast"],
  "Gold Country":[38.33587,-120.90334, "https://www.alertwildfire.org/region/centralcoast/?camera=Axis-GoldCountry", "Central Coast"],
  "West Point CA":[38.39993,-120.52414, "https://www.alertwildfire.org/region/centralcoast/?camera=Axis-WestPoint", "Central Coast"],
  "North Mokelumne":[38.45776,-120.27472, "https://www.alertwildfire.org/region/centralcoast/?camera=Axis-NorthMok", "Central Coast"],
  "Big Hill":[38.83953,-120.41119, "https://www.alertwildfire.org/region/centralcoast/?camera=Axis-BigHill", "Central Coast"],
  "Bald Mtn El Dorado 2":[38.90226,-120.69752, "https://www.alertwildfire.org/region/centralcoast/?camera=Axis-BaldCA2", "Central Coast"],
  "Bunker Hill":[39.05865,-120.38681, "https://www.alertwildfire.org/region/centralcoast/?camera=Axis-Bunker", "Central Coast"],
  "Alpine Meadows CTC":[39.14617,-120.23661, "https://www.alertwildfire.org/region/centralcoast/?camera=Axis-Gibraltar2", "Central Coast"],
  "Mt. Lincoln":[39.29206,-120.33051, "https://www.alertwildfire.org/region/centralcoast/?camera=Axis-Lincoln", "Central Coast"],
  "Tahoe Donner":[39.34864,-120.27695, "https://www.alertwildfire.org/region/centralcoast/?camera=Axis-TahoeDonner", "Central Coast"],
  "Sage Hen":[39.43062,-120.31025, "https://www.alertwildfire.org/region/centralcoast/?camera=Axis-Sagehen5", "Central Coast"],
  "Alder Hill":[39.34996,-120.19112, "https://www.alertwildfire.org/region/centralcoast/?camera=Axis-alderhill", "Central Coast"],
  "Martis Peak":[39.28755,-120.04692, "https://www.alertwildfire.org/region/centralcoast/?camera=Axis-Martis", "Central Coast"],
  "Babbitt Peak":[39.60384,-120.10769, "https://www.alertwildfire.org/region/centralcoast/?camera=Axis-Babbitt", "Central Coast"],
  "Gibraltar2": [34.46501, -119.67852, "https://www.alertwildfire.org/region/centralcoast/?camera=Axis-Gibraltar2", "Central Coast"],
  "Fallen Lead Lake": [38.85943,-120.06296,"https://www.alertwildfire.org/region/centralcoast/?camera=Axis-FallenLeaf","Central Coast" ],
  "Montebello Preserve": [37.31019, -122.15438, "https://www.alertwildfire.org/region/centralcoast/?camera=Axis-MontebelloPreserve", "Central Coast"],
  "Foothills Park": [37.36243, -122.15438, "https://www.alertwildfire.org/region/centralcoast/?camera=Axis-FoothillsPark", "Central Coast"],
  "Mt. Diablo West": [37.83288, -121.97081, "https://www.alertwildfire.org/region/centralcoast/?camera=Axis-MtDiabloWest","Central Coast"],
  "Rockpile": [38.68344, -122.98688, "https://www.alertwildfire.org/region/centralcoast/?camera=Axis-Rockpile","Central Coast"],
  "Mt. Konocti": [39.01365, -122.84962, "https://www.alertwildfire.org/region/centralcoast/?camera=Axis-Konocti", "Central Coast"],
}

const cameraArr = [];
var name1;
var lng1;
var lat1;
var web1;
var region1;

class Camera {
  constructor(name, lat, lng, web, region){
    this.name = name;
    this.lat = lat;
    this.lng = lng;
    this.web = web;
    this.region = region;
  }
}

for(var camera_name in cameras) {
  var value = cameras[camera_name];
  const camera = new Camera(camera_name, value[0], value[1], value[2], value[3])
  cameraArr.push(camera);
}

// const Gibraltar2 = new Camera("Gibraltar2", 34.46501, -119.67852, "https://www.alertwildfire.org/region/centralcoast/?camera=Axis-Gibraltar2", "CentralCoast");
var cameraTry = "Babbitt Peak";

for(let i = 0; i < cameraArr.length; i++){
  if(cameraArr[i].name == cameraTry){
    name1 = cameraArr[i].name;
    lng1 = cameraArr[i].lng;
    lat1 = cameraArr[i].lat;
    web1 = cameraArr[i].web;
    region1 = cameraArr[i].region;
  }
}



const Home = () => { 
  return (
      <div className = "cont">
        <div className= "alerts">
          <h1 className = "title">Alerts</h1>
          <div className = "note">          
            <h2><i className='fireIcon'><FontAwesomeIcon icon={faFire} /></i> Fire Detected</h2>
            
            <div className='info'>
              <p>Region: {region1}</p>
              <p>Camera: {name1}</p>  
            </div>
            
            <div className='link'>
              <a href = {web1}> <i className='fireIcon'><FontAwesomeIcon icon={faLink} /></i> </a> 
            </div>
         
          </div> 
        </div>
        <div className='mapArea'> 
          <MapSection location={{lat: 39.60384, lng: -120.10769}} zoomLevel={10} />
        </div>
      </div>
    
  )

}

export default Home;