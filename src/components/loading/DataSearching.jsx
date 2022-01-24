import React from 'react';


// eslint-disable-next-line
export default ({text})=>{
  return(
    <div className="d-flex flex-column justify-content-center align-items-center animate__animated animate__zoomIn" style={{height: 'calc(100vh - 200px)'}}>
      <div className="ka-loading-icon"/>
      <h6 className="ka-loading-text text-muted mt-4">{text?text:'Searching...'}</h6>
    </div>
  )
}