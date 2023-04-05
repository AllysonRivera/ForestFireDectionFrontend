import React from 'react';
import './Home.css';

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
        <div class="map">
           {/* <Map /> */}
        </div>
      </div>
    
  )

}

export default Home