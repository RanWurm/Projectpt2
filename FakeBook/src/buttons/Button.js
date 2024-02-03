import React from 'react';
import './Button.css';

function Button({ id, icon,meme = "no" }) {
    const handleClick = () => {
		if(meme === 'yes'){
			window.open('https://www.youtube.com/watch?v=IEKeg_2oJFI', '_blank');
		}
       
    };

    return (
        <button id={id} onClick={handleClick}>
            <img className={id} src={icon} alt="Button Icon" />
        </button>
    );
}

export default Button;
