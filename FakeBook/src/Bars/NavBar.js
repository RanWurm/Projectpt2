import React from 'react'
import SearchTab from '../inputs/SearchTab';
import '../css/BarsCss/NavBar.css'

export default function NavBar({logo,firstHandleClick}) {
  return (
	<div className = "navbar">
	<div className="left_col">
			<img className = "fb_icon " src = {logo}/>
			<SearchTab id = {"tab"}></SearchTab>
			<button className='button' onClick={firstHandleClick}>log-out</button>
			<button className='button' >dark-mode</button>
	</div>
	</div>
  );
}
