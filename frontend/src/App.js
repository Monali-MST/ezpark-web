
import "./App.css";
import NavBarAdmin from "./Components/NavBarAdmin/NavBarAdmin";
import SlotAdmin from "./Components/SlotsAdmin/SlotsAdmin";
import ZoneA from "./Components/ZoneA/ZoneA";
import { BrowserRouter as Router,Routes, Route}from 'react-router-dom';



function App() {
  return (
    <div>
      <Router>
      <ZoneA/>
      <Routes>
        <Route path="/"> </Route>
      </Routes>
      </Router>
      

    </div>

  
  );
}

export default App;
