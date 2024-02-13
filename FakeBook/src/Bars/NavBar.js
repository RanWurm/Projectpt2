import React from 'react'
import SearchTab from '../inputs/SearchTab';
import '../css/BarsCss/NavBar.css'

export default function NavBar({logo}) {
  return (
	<div className = "navbar">
	<div className="left_col">
			<img className = "fb_icon " src = {logo} alt = 'Facebook Logo'/>
			<SearchTab id = {"tab"}></SearchTab>
	</div>
	</div>
  );
}
