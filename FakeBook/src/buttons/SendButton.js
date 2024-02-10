import Send from '../res/send_button.png'
import '../css/buttonsCss/Button.css'
import Button from './Button';

function SenButton({id}){
	
	return (
        <Button id = "send_button" icon = {Send}></Button>
    );
} export default SenButton;