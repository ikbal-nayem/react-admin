import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import asyncComponent from '../../util/asyncComponent';
// import FilterRoute from 'components/FilterRoutes';
// import user_type from 'util/user_type';


const User = asyncComponent(() => import('./User'))
const NotFound = asyncComponent(() => import('../error/NotFound'))

const ConfigurationRoutes = ()=>{
  // if(pathname === '/configuration')
  //   return <Navigate to="/" />

  return(
    <Routes>
      <Route path="/user" element={<User/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}

export default ConfigurationRoutes;