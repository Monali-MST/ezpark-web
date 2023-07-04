import React from "react";


function Complete() {
    const img1 = new URL("../../Assets/congrats.jpg", import.meta.url);
  
  return (
    <div className="Complete-container">
      <div className="image-container">
          <img src={img1} alt="Success" />
         </div>
      <div/>
      </div>
    
  );
}

export default Complete;