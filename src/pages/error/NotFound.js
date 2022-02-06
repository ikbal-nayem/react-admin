import React from "react";
import {useNavigate} from 'react-router-dom';
import { Button } from "@mui/material";
import { ArrowBack } from '@mui/icons-material';
import {ReactComponent as Logo404} from "assets/svg/404.svg";

export default function NotFound() {
  const navigate = useNavigate()
  
  return (
    <div className="app-wrapper" style={{height: '95%'}}>
      <div className="d-flex flex-column justify-content-center align-items-center h-100">
        <Logo404 width={250}/>
        <h1 className="text-primary font-weight-bold _heartbeat">Page Not Found!</h1>
        <h5 className="text-muted my-3">
          Sorry, The page you are looking for is not exist.
        </h5>
        <Button
          color="primary"
          variant="contained"
          className="w-25"
          size="small"
          onClick={()=>navigate(-1)}
        >
          <ArrowBack fontSize="small"/> &nbsp; Go Back
        </Button>
      </div>
    </div>
  );
}
