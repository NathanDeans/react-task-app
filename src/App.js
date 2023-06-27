import React, { Component, useState } from "react";

export default function App() {
  const{info, setinfo} = useState;


  

 
  
  
  
  
  return(
     <div>
     <form className="resumeForm">
      <label htmlFor="Name">Name</label>
      <input value={info} onChange={e => setinfo(e.target.value)} type="text" id="info"/>
     </form>
     <h1>{info}</h1>
     </div>
  )
}

