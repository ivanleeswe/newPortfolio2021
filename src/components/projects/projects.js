import React from 'react'
import restaurantVid from "../../../src/assets/img/projects/restaurant.mp4"
import shelterTechVid from "../../../src/assets/img/projects/shelterTech.mp4"
import toDoListVid from "../../../src/assets/img/projects/toDoList.mp4"

import "./projects.css"

function projects() {
  return (
    <div >
      <h1 className="pt-3 text-center font-details-b pb-3">PRO<span  style={{color:"yellow"}} >JECTS</span></h1>

      <div id="projects" className="grid-container">
        <div className="grid-item">
          <video idth="320" height="240" controls>
            <source src={restaurantVid}  type="video/mp4"/>
          </video>
          <div>
            Restaurant Website
          </div>
        </div>

        <div className="grid-item">
          <video idth="320" height="240" controls>
            <source src={shelterTechVid}  type="video/mp4"/>
          </video>
          <div>
            ShelterTech Website
          </div>
        </div>

        <div className="grid-item">
          <video idth="320" height="240" controls>
            <source src={toDoListVid}  type="video/mp4"/>
          </video>
          <div>
            To Do List
          </div>
        </div>

      </div>
    </div>
  )
}

export default projects
