// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import asabenehImage from './images/asabeneh.jpg'
import "./styles.css"

const name = "Asabenah Yetayeh"
const title = "Senior Developer"
const country = "Finland"


const header = (
  <div >
    <img className='image-wrapper' src={asabenehImage} alt='asabaneh image'></img>
    <h2>{name}</h2>
    <p>{title}, {country}</p>
  </div>
)

const skills = ["HTML", "CSS", "Sass", "JS", "React", "Redux", "Node", "MongoDB", "Python", "Flask", "Django", "NumPy", "Pandas", "Data Analysis", "MYSQL"]
const skillsFormatted = skills.map((skill) => <button className='button-wrapper'>{skill}</button>)

const main = (
  <div>
    <h2>Skills</h2>
    {skillsFormatted}
  </div>
)

const time = " Aug 30, 2020"
const footer = (
  <div>
    <p>Joined on {time}</p>
  </div>

)


const app = (
  <div className='app'>
    {header}
    {main}
    {footer}
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)