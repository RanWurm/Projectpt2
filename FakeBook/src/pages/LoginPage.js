import React from 'react'
import '../css/pagesCss/LoginPage.css'
import Login from '../inputs/Login'
import HomePageText from '../decoratives/HomePageText'

export default function LoginPage() {
  return (
	<div className='parent'>
		<div className='right_child'>
		<HomePageText/>
		</div>
		<div className='left_child'>
		<Login ></Login>
		</div>
		</div>	
  )
}
