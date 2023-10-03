import React from 'react'
import './Menu.css'

function Menu(props) {
  return (
    <div className="home-image">
      <div className="imagecondent">
        <img src={props.data.imageurl} alt="" />
        <h1>{props.data.title}</h1>
        <p>{props.data.content}</p>
      </div>
    </div>
  )
}

export default Menu