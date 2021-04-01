import React from 'react'
import restaurantVid from "../../../src/assets/img/projects/restaurant.mp4"
import shelterTechVid from "../../../src/assets/img/projects/shelterTech.mp4"
import toDoListVid from "../../../src/assets/img/projects/toDoList.mp4"
import exerciseTrackerVid from "../../../src/assets/img/projects/exerciseTracker.mp4"

import "./projects.css"

function projects() {
  return (
    <div id="projects" style={{paddingTop:"45px"}}>
      <h1 className="pt-3 text-center font-details-b pb-3"  >PRO<span  style={{color:"yellow"}} >JECTS</span></h1>

      <div className="grid-container">
        <div className="grid-item">
          <video idth="320" height="240" controls>
            <source src={restaurantVid}  type="video/mp4"/>
          </video>
          <div className="text">
            <a href="https://github.com/ivanleeswe/newasianpearlwebsite" className="link">
              Restaurant Website
            </a>
            <div className="techStack">
              JavaScript, React, HTML, CSS
            </div>
            <br/>
            <br/>
            <div className="description">
              Come check out our menu whether you are on your desktop or phone! I built this responsive website for customers to access to restaurant resources on all devices.
            </div>
          </div>
        </div>

        <div className="grid-item">
          <video idth="320" height="240" controls>
            <source src={shelterTechVid}  type="video/mp4"/>
          </video>
          <div className="text">
            <a href="https://github.com/ShelterTechSF/sheltertech.org" className="link">
              ShelterTech Website
            </a>
            <div className="techStack">
              JavaScript, React, HTML, CSS, TypeScript, Storybook, Clubhouse, Figma
            </div>
            <br/>
            <div className="description">
              Technology is needed for the homeless population to get the help they need. I am proud to have been part of this open-source project to build and successfully launch the website for ShelterTech, a non-profit organization.
            </div>
          </div>
        </div>

        <div className="grid-item">
          <video idth="320" height="240" controls>
            <source src={toDoListVid}  type="video/mp4"/>
          </video>
          <div className="text">
            <a href="https://github.com/ivanleeswe/todolist-reacthooks" className="link">
              To Do List
            </a>
            <div className="techStack">
              JavaScript, React, HTML, CSS, React Hooks
            </div>
            <br/>
            <br/>
            <div className="description">
              Need to keep track of your tasks? Here's the app for it! I built this using React and then built it again using React hooks.
            </div>
          </div>
        </div>

        <div className="grid-item">
          <video idth="320" height="240" controls>
            <source src={exerciseTrackerVid}  type="video/mp4"/>
          </video>
          <div className="text">
            <a href="https://github.com/ivanleeswe/ExerciseTracker/tree/master/backend" className="link">
              Exercise Tracker
            </a>
            <div className="techStack">
              JavaScript, React, HTML, CSS, MongoDB Atlas, React router, Bootstrap, Mongoose, Express, Node.js
            </div>
            <br/>
            <br/>
            <div className="description">
              Keeping track of our workouts is essential to mad gains! Built this application with the MERN stack.
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default projects
