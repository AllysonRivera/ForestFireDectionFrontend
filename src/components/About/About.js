import React from 'react';
import './About.css';
const About= () => { 
  return (
      <div>
         <section className='section'>
            <div className='container'>
              <div className='row'>
                  <div className='col-md-12 mb-4 text-center'>
                      <h1 className='heading'> Our Project</h1>
                      <div className='underline mx-auto'></div>
                  </div>
                  <p className='par'>
                    Every year wildfires destroy millions of acres ,
                  and the amount of destruction that these fires cause 
                  puts homes, infrastructures, businesses and our own 
                  health at risk. Due to the impact that these fires 
                  have companies have been looking for imporve first 
                  responders response time. Alert Wildfire is a company 
                  that has installed over 700 cameras in several locations
                   that are currently being monitored by volunteers. However, 
                   it is extremely difficult, and not reliable to have humans 
                   trying to monitor all these cameras therefore, by automating
                    this task, it can result in a more reliable detection of 
                    forest fires, which can allow first responders the chance 
                    to identify a fire faster. We built this website that uses 
                    a machine learning algroithm that we developed to detect the 
                    presence of fires on cameras from ALERT Wildfire. Signing up 
                    and loging in to this website will allow you to get notifications
                     when a camera has detected a fire. The alert will provide information 
                     such as the region of the camera, the name of the camera, a link to 
                     see live fotage of the camera. Next to the alert is a map that pinpoints the 
                     cameras location. We hope to imporve the response time to 
                     forest fires and provide useful information to help first responders.
                  </p>
                </div>
              </div>
        </section>
        <section className='section1'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 mb-4 text-center'>
                      <h1 className='heading'> Meet the Team</h1>
                      <div className='underline mx-auto'></div>
              </div>
                {/* Card */}
                <div className='col-md-4'>
                  <div className='card shadow'>
                    <img src="04_George_Sarkis.png" className='w-100 border-bottom'/>
                    <div className='card-body'>
                      <h6>George Sarkis</h6>
                      <div className='underline1 mx-auto'></div>
                      <p>
                        Team Mentor
                      </p>
                    </div>
                  </div>      
                </div>

                {/* Card 1 */}
                <div className='col-md-4'>
                  <div className='card shadow'>
                    <img src="04_Moon_Dante.png" className='w-100 border-bottom'/>
                    <div className='card-body'>
                      <h6>Dante Moon</h6>
                      <div className='underline1 mx-auto'></div>
                      <p>
                      I'm a fourth year computer science student at CSUMB with a concentration in data science. 
                      For this project I primarily worked on the back end, collecting data, training models, and building an API to enable communication between the front end and back end.
                      </p>
                    </div>
                  </div>      
                </div>

                {/* Card 2 */}
                <div className='col-md-4'>
                  <div className='card shadow'>
                    <img src="04_Allyson_Rivera.png" className='w-100 border-bottom'/>
                    <div className='card-body'>
                      <h6>Allyson Rivera</h6>
                      <div className='underline1 mx-auto'></div>
                      <p>
                        I am a 4th year Computer Science major at CSUMB with a concentration in software engineering. 
                        For this porject I designed and developed the web application.
                        I also created the camera database and used GoogleAPI to show the cameras location.

                      </p>
                    </div>
                  </div>      
                </div>

                {/* Card 3 */}
                <div className='col-md-4'>
                  <div className='card shadow'>
                    <img src="04_Hartojo_Nico.png" className='w-100 border-bottom'/>
                    <div className='card-body'>
                      <h6>Nico Hartojo</h6>
                      <div className='underline1 mx-auto'></div>
                      <p>
                      I am currently wrapping up my last semester at California State University, Monterey Bay and am studying Computer Science with a concentration in Data Science. I am originally from Colorado and play for CSUMB’s baseball team. 
                      As a data scientist, I primarily worked on the machine learning model used to detect fires in the ALERTWildfire camera feeds.
                      </p>
                    </div>
                  </div>      
                </div>

                {/* Card 4 */}
                <div className='col-md-4'>
                  <div className='card shadow'>
                    <img src="04_Pisal_Prajwal.png" className='w-100 border-bottom'/>
                    <div className='card-body'>
                      <h6>Prajwal Pisal</h6>
                      <div className='underline1 mx-auto'></div>
                      <p>
                      I am a senior studying Computer Science with a focus on Software Engineering at CSUMB. 
                      I contributed to the project by connecting the live API to the frontend, enabling the system to generate fire alerts using a machine learning model. 
                      Additionally, I created the "About" section page, allowing users to modify their password and customize their location for personalized forest fire alerts.
                      </p>
                    </div>
                  </div>      
                </div>
            </div>      
          </div>
                  
         </section>
    </div>
    
  )
}

export default About