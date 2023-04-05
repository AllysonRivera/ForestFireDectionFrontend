import React from 'react';
import './Home.css';
import MapSection from '../map/Map.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFire,faLink} from '@fortawesome/free-solid-svg-icons';

const Home = () => { 
  return (
      <div className = "cont">
        <div className= "alerts">
          <h1 className = "title">Alerts</h1>
          <div className = "note">          
            <h2><i className='fireIcon'><FontAwesomeIcon icon={faFire} /></i> Fire Detected</h2>
            <div className='info'>
              <p>Region: </p>
              <p>Camera: </p>  
            </div>
            
            <div className='link'>

              <i className='fireIcon'><FontAwesomeIcon icon={faLink} /></i>
            </div>
          </div>
        </div>
        <div className='mapArea'>
          <MapSection location={{lat: 37.42216, lng: -122.08427}} zoomLevel={17} />
        </div>
      </div>
    
  )

}

export default Home;