import React from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import Layout from "./Layout/Layout";
import Login from "../pages/login";
import { useUserState } from "../context/UserContext";
// import asyncComponent from 'util/asyncComponent';
// import user_type from 'util/user_type';


const App = React.memo(()=>{
  var { isAuthenticated, userInfo } = useUserState();

  const PrivateRoute = React.useCallback(()=>{
    document.title = "Shop" + window.location.pathname.replace('/', ' | ').replace(/\b\w/g, c => c.toUpperCase())
    return isAuthenticated ? <Outlet/> : <Navigate to="login"/>
  }, [isAuthenticated])

  // const SysAdmin = ({ component, ...rest })=>{
  //   React.useEffect(()=>{
  //     document.title = "System-Admin | Shop"
  //   }, [])
  //   return (
  //     <Route
  //       {...rest}
  //       render={props =>
  //         isAuthenticated && userInfo.role===user_type.SYSADMIN
  //           ? ( React.createElement(component, props) )
  //           : ( <Navigate to={{pathname: "/", state: {from: props.location}}}/> )
  //       }
  //     />
  //   );
  // }

  const PublicRoute = React.useCallback(()=>{
    return isAuthenticated  ? <Navigate replace to="/"/> : <Outlet/>
  }, [isAuthenticated])


  // #######################################################################


  return (
    <Routes>
      <Route path="/login" element={<PublicRoute/>}>
        <Route path="/login" element={<Login/>}/>
      </Route>
      {/* <SysAdmin path="/sysadmin" component={asyncComponent(() => import("../pages/sysadmin"))} /> */}
      <Route path="*" element={<PrivateRoute/>}>
        <Route path="*" element={<Layout/>}/>
      </Route>
    </Routes>
  );
})


export default App;