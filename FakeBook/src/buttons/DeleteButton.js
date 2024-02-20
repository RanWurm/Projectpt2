import React from 'react'
import TrashCan from '../res/garbage.png'
import Button from './Button'
export default function DeleteButton({handleClick}) {
  return (
<div className="component-container">
	<div className='delete-button'>
  	<Button id = "interaction-button" className="delete-button "onClick={handleClick} icon = {TrashCan}/>	
	</div>	
 
</div>

  )
}
