import React from 'react';
import './SideOptions.css'


const SideOptions = ({Icon, option="deafult"}) => {
  return (
    <div className='sideOption'>
      {Icon && <Icon className="sideOption__icon" />}
      {Icon ? <h4>{option}</h4> : <p>{option}</p>}
    </div>
  )
}

export default SideOptions;
