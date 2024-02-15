import FeedPage from '../pages/FeedPage';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import { useState,useRef} from 'react';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

function App() {
  let users = useRef([]);
	const [approvToBrowse,setApproveToBrowse] = useState(false);
	let premissionToFeed = useRef(approvToBrowse);

	const handleSecurity = (approval) =>{
    setApproveToBrowse(approval);
    premissionToFeed.current = approval;
 	 }

  return (
    <div>
    <Router>
	  <Routes>
    <Route path ="/" element = {<LoginPage isApproveToBrowse={approvToBrowse} onApproveToBrowse={handleSecurity} premissionRef={premissionToFeed}/>}/>
	  <Route path ="/feed" element = {<FeedPage isApproveToBorwse={approvToBrowse} onApproveToBrowse={handleSecurity} premissionRef={premissionToFeed}/>}/>
	  <Route path ="/register" element = {<RegisterPage/>}/>
    </Routes>
    </Router>
    </div>
   

  );
}

export default App;
