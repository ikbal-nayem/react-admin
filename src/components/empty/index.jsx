import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Button} from '@mui/material';
import {ReactComponent as EmptySVG} from 'images/svg/empty.svg';



const Empty = ({text, width, btn, btn_text, btn_action})=>{
  const navigate = useNavigate()
  const goHome = ()=> navigate('/')
  
  return(
    <div className="animate__animated animate__fadeIn">
      <div className="d-flex flex-column justify-content-center align-items-center p-3">
        {/* <img width={width||"350px"} src={empty_svg} alt="."/> */}
        <EmptySVG width={width||"300px"}/>
        <div className="animate__animated animate__bounceIn">
          <h4 className="font-weight-bold my-4">{text?text:"Empty list"}</h4>
        </div>
        {btn &&
          <Button variant="contained" size="small" color="secondary" onClick={btn_action?btn_action:goHome}>
            {btn_text?btn_text:'Go Home'}
          </Button>
        }
      </div>
    </div>
  )
}

export default Empty;