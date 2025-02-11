 import React from 'react'
import './cubes.css';

 const Cube = ({ className }) => {
    return (
      <div className={`cube ${className}`}>
        {/* Each cube face */}
        <div className="face front"></div>
        <div className="face back"></div>
        <div className="face right"></div>
        <div className="face left"></div>
        <div className="face top"></div>
        <div className="face bottom"></div>
      </div>
    );
  }
 
 function Cubes() {
   return (
     <div className='scene1'>
        <div className="cube-group">
        {/* 6 Cubes with unique animation timings */}
        <Cube className="cube1" />
        <Cube className="cube2" />
        <Cube className="cube3" />
        <Cube className="cube4" />
        <Cube className="cube5" />
        <Cube className="cube6" />
      </div>
     </div>
   )
 }
 
 export default Cubes