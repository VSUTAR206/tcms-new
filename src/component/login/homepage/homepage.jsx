import React from "react";
import { Link } from "react-router-dom";
import '../../../App.css'


const Homepage = () => {

    

    const createuser = () =>{
        const user = "vishal"
        const auth = localStorage.setItem("user")
    }
    return (<>

    <div className="container-fluid bg-img">

    
    <div className="container  ">
        <div className="row">
            <div className="card my-5 py-5 user-select-none" >
                <div className="row g-0 fullwidth my-3" >
                    <div className=" col-sm-12 col-lg-6 my-5">
                        <img src="./img/logo1.png" className="img-fluid w-100 user-select-none" alt="card-horizontal-image" />
                    </div>
                    <div className="col-sm-12 col-lg-6 my-3">
                        <div className="card-body">
                            <h5 className="card-title  text">Login Page</h5>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                <label for="floatingPassword">Password</label>
                            </div>
                            <div className="form-floating mb-3">
                                <button type="button" className="btn btn-primary">Login </button>

                            </div>
                            <div className="form-floating">
                                <Link to="/Forpass"><p className="text-primary" onClick={createuser}>Forgot password..?</p></Link>
                            </div>
                            <div className="form-floating">
                            <Link to="/StudentEnqForm"> <p className="text-primary">Student Enquiry Form</p></Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>


    </div>


    </>



    )


}



export default Homepage;