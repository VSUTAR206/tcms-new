import React from "react";
import "../../../App.css"

const Header = () => {

    
    const user = false
    return (<>

        <div className="container-fluid">
            <div className="row">
                <div className="col-7 my-2">
                    <img src="./img/logo1.png" style={{ width: "120px" }} alt="" />

                          
                </div>


                <div className="col-5 ">

                    <img src="./img/setting_icon.png" className="mx-1 my-3" style={{ width: "40px", float: "inline-end", borderRadius: "50%" }} alt="" />
                    <img src="./img/profile_icon.png" className="mx-1 my-3" style={{ width: "40px", float: "inline-end", borderRadius: "50%" }} alt="" />
                    <img src="./img/bell.png" className=" my-2" style={{ width: "55px", float: "inline-end", borderRadius: "50%" }} alt="" />

                </div>
                <hr/>


                
            </div>
        </div>
    </>
    )
}

export default Header;