import React from "react";
import "../../../App.css"
import { Link } from "react-router-dom";

const HeaderAfter = () => {


    const user = false
    return (<>

        <div className="container-fluid user-select-none">
            <div className="row">
                <div className="col-7 my-1">
                    <img src="./img/logo1.png" style={{ width: "120px" }} alt="" />


                </div>


                <div className="col-5 " style={{ display: "flex", justifyContent: "end" }}>
                    <div className="icon my-2 mx-3" style={{ fontSize: "35px", color: "blue" }} >
                        <i className="bi bi-arrow-left-circle-fill"></i>
                    </div>

<button style={{border:"none" , backgroundColor:"white"}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
    
                    <img src="./img/profile_icon.png" className="mx-1 my-3" style={{ width: "40px", float: "inline-end", borderRadius: "50%" }} alt="" />
</button>

                </div>

              
                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasRightLabel">User Menu</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">

                    <i class="bi bi-person-circle" style={{fontSize:"10 0px", float:"right"}}></i>
                        <h5 className="my-4"> <Link style={{textDecoration:"none"}} to={"/"}>My Profile</Link></h5>
                        <h5 className="my-4">   <i class="bi bi-gear"></i> <Link style={{textDecoration:"none"}} to={"/"}>Setting</Link></h5>
                        <h5 className="my-4">  <i class="bi bi-buildings"></i> <Link style={{textDecoration:"none"}} to={"/"}>About us</Link></h5>
                        <h5 className="my-4"> <i class="bi bi-info-circle"></i> <Link style={{textDecoration:"none"}} to={"/"}>Help</Link></h5>
                        <h5 style={{position:"absolute",bottom:"100px"}}> <i class="bi bi-box-arrow-left mx-3"></i><Link style={{textDecoration:"none"}} to={"/"}>LogOut</Link></h5>
                        
                       
                    </div>
                </div>







                <hr />
            </div>


        </div>
    </>
    )
}

export default HeaderAfter;