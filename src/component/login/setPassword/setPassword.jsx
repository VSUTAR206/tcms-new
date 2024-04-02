import React from "react";
import { Link } from "react-router-dom";


const Setpass = () =>{
    return (
<>
<div className="container-fluid bg-img">


    <div className="container  ">
        <div className="row">
            <div className="card my-5 py-5 user-select-none" >
                <div className="row g-0 fullwidth my-3" >
                    <h1 className="text-center">Set password</h1>
                    <p className="text-center ">Your password must be atlest six characters ans should combination of number , letters nd special characters  </p>

                    <div className="col-md-12 mb-3">
                        <label for="validationCustom01" className="form-label">Set password</label>
                        <div className="col-md-4">
                        <input type="text" className="form-control" id="validationCustom01" placeholder="Mark" required="" />
                        </div>
                    </div>


                    
                    <div className="col-md-12 mb-3">
                        <label for="validationCustom01" className="form-label">Confirm Passeord</label>
                        <div className="col-md-4">
                        <input type="text" className="form-control" id="validationCustom01" placeholder="Mark" required="" />
                        </div>
                    </div>

                    <div className="form-floating mb-3">
                        <button type="button" className="btn btn-primary">Submit </button>

                    </div>


                    <div className="form-floating">
                    <Link to="/"> <p className="text-primary">Back to Login</p></Link>
                    </div>
                    
                

                </div>
            </div>

        </div>
    </div>


</div >




</>

    )
}



export default Setpass;