import React from 'react'

//you can add export
const divStyle = {
  border:"1px solid blue", 
  width:"30%", 
  margin:"0 35% 0 35%", //top right bottom left
  borderRadius:'15px'
}

export default function TitleComponent({text}) {
  return (
    <div style={{
      border:"3px solid #a4de02", 
      width:"60%", 
      margin:"0 20% 0 20%", //top right bottom left
      borderRadius:'20px',
      backgroundColor: "#a4de02",
      padding:"5px 0 5px 0"
      }}>
     {text}
    </div>
  )
}
