import React from 'react'
import SearchTab from '../inputs/SearchTab';
import '../css/BarsCss/NavBar.css'

export default function NavBar({logo,firstHandleClick}) {
  return (
	<div className = "navbar">
	<div className="left_col">
			<img className = "fb_icon " src = {logo}/>
			<SearchTab id = {"tab"}></SearchTab>
			
	</div>
		<div className='right_col'>
				<button className='button' >dark-mode</button>	
				<button className='button' onClick={firstHandleClick}>log-out</button>	
		</div>
		
	</div>
  );
}
