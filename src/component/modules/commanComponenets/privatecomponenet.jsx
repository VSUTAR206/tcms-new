import React from "react";
import { Navigate, Outlet } from "react-router-dom";


const Privatecompo = () =>{
    const auth = localStorage.getItem('user')
    return auth? <Outlet/> : alert("Pls login first ") ,  <Navigate to="/"/>
}



export default Privatecompo;