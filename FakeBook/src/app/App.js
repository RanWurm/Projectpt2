import FeedPage from '../pages/FeedPage';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
function App() {
  return (
    <Router>
      <div>
      <header><title></title></header>
      <Routes>
        <Route path ="/" element = {<LoginPage/>}/>
        <Route path ="/feed" element = {<FeedPage/>}/>
        <Route path ="/register" element = {<RegisterPage/>}/>
      </Routes>
      </div>
    </Router>

  );
}

export default App;
