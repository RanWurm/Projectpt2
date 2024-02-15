import React from 'react'
import Edit from '../res/edit.png'
import Button from './Button'

export default function EditButton({handleClick}) {
  return (
<div className="component-container">
	<div className='delete-button'>
  	<Button id = "interaction-button" className="delete-button "onClick={handleClick} icon = {Edit}/>	
	</div>	
 
</div>

  )
}
