import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import {
  Grid,
  CircularProgress,
  Button,
  TextField,
  Fade,
} from "@mui/material";
import useStyles from "./styles";
import {ReactComponent as Logo} from "assets/svg/logo.svg";
import { useUserDispatch, loginUser } from "../../context/UserContext";

const Login = React.memo((props)=>{
  const navigate = useNavigate()
  var classes = useStyles();
  var userDispatch = useUserDispatch();

  var [isLoading, setIsLoading] = useState(false);
  var [error, setError] = useState(false);
  var [username, setUsername] = useState("");
  var [password, setPassword] = useState("");


  return (
    <Grid container className={classes.container}>
      <div className={classes.logotypeContainer}>
        <Logo className={`${classes.logotypeImage} animate__animated animate__fadeIn`}/>
        <h2 className={`${classes.logotypeText} m-0 animate__animated animate__bounceIn animate__delay-1s`}>Admin Panel</h2>
      </div>
      <div className={classes.formContainer}>
        <div className={`${classes.form} animate__animated animate__rollIn`}>
          <form onSubmit={() =>
                    loginUser(
                      userDispatch,
                      username,
                      password,
                      navigate,
                      setIsLoading,
                      setError,
                    )}>
            <h2 className={classes.greeting}>Admin Login</h2>
            <hr/>
            <TextField
              InputProps={{
                classes: {underline: classes.textFieldUnderline, input: classes.textField},
              }}
              value={username}
              onChange={e => setUsername(e.target.value)}
              margin="normal"
              label="Username"
              variant="outlined"
              placeholder="Username/Phone number"
              fullWidth
              required
              autoFocus
              error={error}
            />
            <TextField
              InputProps={{
                classes: {underline: classes.textFieldUnderline, input: classes.textField},
              }}
              value={password}
              onChange={e => setPassword(e.target.value)}
              margin="normal"
              label="Password"
              variant="outlined"
              placeholder="Password"
              type="password"
              fullWidth
              required
              error={error}
            />
            <Fade in={error}>
              <strong className={classes.errorMessage}>
                Login Failed! Invalid username or password &#x1F612;
              </strong>
            </Fade>
            <div className={classes.formButtons}>
              {isLoading ? (
                <CircularProgress size={26} className={classes.loginLoader} />
              ) : (
                <Button 
                  disabled={username.length === 0 || password.length === 0}
                  type="submit"
                  className="w-50"
                  variant="contained"
                  color="primary"
                  size="small"
                >
                  Login
                </Button>
              )}
            </div>
          </form>
        </div>
        <small className={classes.copyright}>
          All rights are reserved  - {new Date().getFullYear()}
        </small>
      </div>
    </Grid>
  );
})

export default Login;



