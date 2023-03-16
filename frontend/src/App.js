//import HomePage from "./Pages/HomePage/HomePage";
//import Table from "./Pages/StaticView/Tables";
import BarFunction from "./Pages/StaticView/BarFunction";
import BarFunctionW from "./Pages/StaticView/BarFunctionW";
import BarFunctionD from "./Pages/StaticView/BarFunctionD";
import RevenueFunctionM from "./Pages/StaticView/RevenueFunctionM";
import RevenueFunctionW from "./Pages/StaticView/RevenueFunctionW";
import RevenueFunctionD from "./Pages/StaticView/RevenueFunctionD";

function App() {
  return (
    <div>
      <div style={{padding:50}}>
        <BarFunction /> 
      </div>
      <div style={{padding:50}}>
        <BarFunctionW/>
      </div>
      <div style={{padding:50}}>
        <BarFunctionD/>
      </div>
      <div style={{padding:50}}>
        <RevenueFunctionM/>
      </div>
      <div style={{padding:50}}>
        <RevenueFunctionW/>
      </div>  
      <div style={{padding:50}}>
        <RevenueFunctionD/>
      </div>  
        
    </div>
  );
}

export default App;
