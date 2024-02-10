import React from 'react';
import '../css/buttonsCss/Button.css';


function Button({ id, icon :propImg,meme = "no" ,onClick:propOnclick,txt}) {
    
    const defaultHandleClick = () => {
		if(meme === 'yes'){
			window.open('https://www.youtube.com/watch?v=IEKeg_2oJFI', '_blank');
		}
       
    };
    const handleClick = propOnclick ? propOnclick : defaultHandleClick;
    
    return (
        <button id={id} onClick={handleClick}>
            <img className={id} src={propImg} alt="" />
            <div>{txt}</div>
        </button>
    );
}

export default Button;
