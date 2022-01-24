import React from 'react';
import { ImpulseSpinner } from "react-spinners-kit";


// eslint-disable-next-line
export default ({text})=>{
  return(
    <div className="d-flex flex-column justify-content-center align-items-center" style={{height: 'calc(100vh - 200px)'}}>
      <ImpulseSpinner size={80} frontColor="#BC4A3C"/>
      <h6 className="text-muted mt-4">{text?text:'Loading...'}</h6>
    </div>
  )
}