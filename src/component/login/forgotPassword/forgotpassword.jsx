import React from "react";
import { Link } from "react-router-dom";
import '../../../App.css'



const Forpass = () => {
    return (<>




        <div className="container-fluid bg-img">


            <div className="container  ">
                <div className="row">
                    <div className="card my-5 py-5 user-select-none" >
                        <div className="row g-0 fullwidth my-3" >
                            <h1 className="text-center">Forgot password</h1>
                            <p className="text-center ">Please enter the email address you'd like your password reset information send to  </p>

                            <div className="col-md-12 mb-3">
                                <label for="validationCustom01" className="form-label">Enter e-mail address</label>
                                <div className="col-md-4">
                                <input type="text" className="form-control" id="validationCustom01" placeholder="Mark" required="" />
                                </div>
                            </div>

                            <div className="form-floating mb-3">
                                <button type="button" className="btn btn-primary">Request OTP </button>

                            </div>

                            
                            <div className="col-md-12 mb-3">
                                <label for="validationCustom01" className="form-label">Enter OTP</label>
                                <div className="col-md-4">
                                <input type="text" className="form-control" id="validationCustom01" placeholder="Mark" required="" />
                                </div>
                            </div>

                            <div className="form-floating mb-3">
                                <button type="button" className="btn btn-primary">Submit </button>

                            </div>


                        
                    <div className="form-floating">
                    <Link to="/Setpass"> <p className="text-primary">Back to Login</p></Link>
                    </div>
                    
                        

                        </div>
                    </div>

                </div>
            </div>


        </div >




    </>


    )
}



export default Forpass;