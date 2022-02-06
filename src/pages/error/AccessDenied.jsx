import React from "react";
import { Button } from "@mui/material";
import { ArrowBack } from '@mui/icons-material';
import logo from "assets/svg/access_denied.svg";

export default function AccessDenied({history}) {
  return (
    <div className="app-wrapper" style={{height: '95%'}}>
      <div className="d-flex flex-column justify-content-center align-items-center h-100">
        <img width="20%" src={logo} alt="Access Denied" />
        <h1 className="text-primary font-weight-bold _heartbeat">Access Denied!</h1>
        <h5 className="text-muted my-3">
          Sorry, you have no permission to access this panel.
        </h5>
        <Button
          color="primary"
          variant="contained"
          className="w-25"
          size="small"
          onClick={()=>history.goBack()}
        >
          <ArrowBack fontSize="small"/> &nbsp; Go Back
        </Button>
      </div>
    </div>
  );
}
