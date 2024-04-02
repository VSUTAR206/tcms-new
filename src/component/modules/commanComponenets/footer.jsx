import React from "react";
import "../../../App.css"

const Footer = () => {


    return (

        <div className="container-fluid footer  user-select-none ">

            <div className="row navbar fixed-bottom navbar-light bg-light">

               

                <div className="col-2 "></div>
                <div className="col-7 text-center my-2">
                    <p1>@Interface-11 .PVT.LTD</p1>
                </div>
                <div className="col-3 icons">
                    <i class="bi bi-whatsapp float-end mx-2 pointer"   ></i>
                    <i class="bi bi-instagram  float-end  mx-2 pointer"></i>
                    <i class="bi bi-facebook float-end mx-2 pointer"   ></i>
                    <i class="bi bi-linkedin float-end mx-2 pointer"></i>



                </div>
            </div>
        </div>
    )
}

export default Footer;