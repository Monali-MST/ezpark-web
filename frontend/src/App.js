//import HomePage from "./Pages/HomePage/HomePage";
//import Table from "./Pages/StaticView/Tables";

import RevenueFunctionM from "./Pages/StaticView/RevenueFunctionM";
import RevenueFunctionW from "./Pages/StaticView/RevenueFunctionW";
import RevenueFunctionD from "./Pages/StaticView/RevenueFunctionD";

import RefundFPFunctionM from "./Pages/StaticView/RefundFPFunctionM";
import RefundFPFunctionW from "./Pages/StaticView/RefundFPFunctionW";
import RefundFPFunctionD from "./Pages/StaticView/RefundFPFunctionD";

import DoughnutFunctionM from "./Pages/StaticView/DoughnutFunctionM";
import DoughnutFunctionW from "./Pages/StaticView/DoughnutFunctionW";
import DoughnutFunctionD from "./Pages/StaticView/DoughnutFunctionD";


function App() {
  return (
    <div>
      <div style={{padding:50}}>
        <DoughnutFunctionM /> 
      </div>
      <div style={{padding:50}}>
        <DoughnutFunctionW /> 
      </div>
      <div style={{padding:50}}>
        <DoughnutFunctionD /> 
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

      <div style={{padding:50}}>
        <RefundFPFunctionM/>
      </div>
      <div style={{padding:50}}>
        <RefundFPFunctionW/>
      </div>
      <div style={{padding:50}}>
        <RefundFPFunctionD/>
      </div> 

    </div>
  );
}

export default App;
