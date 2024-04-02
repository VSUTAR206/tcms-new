import React from "react";
import { Link } from "react-router-dom";
import Header from "../../modules/commanComponenets/header";


const StudentEnqForm = () => {
    return (


        <div className="container-fluid">

            <div className="row">
                <div className="col-12">
                    <h1 className="text-center py-2">Student Enquiry Form</h1>
                </div>
            </div>
            <div className="container">


                <div className="row">


                    <div className="col-md-12 card ">

                        <div className="row my-2">
                            <div className="col-4 ">


                                <label for="validationCustom01" className="form-label">Name:</label>
                                <div className="col">
                                    <input type="text" className="form-control" id="validationCustom01" placeholder="Mark" required="" />
                                </div>

                                <label for="validationCustom01" className="form-label  my-2">E-mail id:</label>
                                <div className="col">
                                    <input type="text" className="form-control" id="validationCustom01" placeholder="Mark" required="" />
                                </div>

                                <label for="validationCustom01" className="form-label">ZAny other Courses</label>
                                <div className="col">
                                    <input type="text" className="form-control" id="validationCustom01" placeholder="Mark" required="" />
                                </div>

                                <label for="validationCustom01" className="form-label  my-2">Information about Batch interest</label>
                                <div className="col">
                                    <input type="text" className="form-control" id="validationCustom01" placeholder="Mark" required="" />
                                </div>

                                <label for="validationCustom01" className="form-label  my-2">Batch date</label>
                                <div className="col">
                                    <input type="text" className="form-control" id="validationCustom01" placeholder="Mark" required="" />
                                </div>





                            </div>
                            <div className="col-4 ">

                                <label for="validationCustom01" className="form-label">Mobile No.</label>
                                <div className="col">
                                    <input type="text" className="form-control" id="validationCustom01" placeholder="Mark" required="" />
                                </div>



                                <label for="validationCustom01" className="form-label">Education Qualification</label>
                                <div className="col">
                                    <input type="text" className="form-control" id="validationCustom01" placeholder="Mark" required="" />
                                </div>

                                <label for="validationCustom01" className="form-label">Select Current Status</label>
                                <div className="col">
                                    <input type="text" className="form-control" id="validationCustom01" placeholder="Mark" required="" />
                                </div>


                                <label for="validationCustom01" className="form-label">How did you find us</label>
                                <div className="col">
                                    <input type="text" className="form-control" id="validationCustom01" placeholder="Mark" required="" />
                                </div>


                                <label for="validationCustom01" className="form-label ">Batch Time</label>
                                <div className="col-12">
                                    <input type="text" className="form-control" id="validationCustom01" placeholder="Mark" required="" />
                                </div>




                            </div>
                            <div className="col-4">


                                <label for="validationCustom01" className="form-label">Watsapp no.</label>
                                <div className="col">
                                    <input type="text" className="form-control" id="validationCustom01" placeholder="Mark" required="" />
                                </div>

                                <label for="validationCustom01" className="form-label">Year of passing..</label>
                                <div className="col">
                                    <input type="text" className="form-control" id="validationCustom01" placeholder="Mark" required="" />
                                </div>

                                <label for="validationCustom01" className="form-label">Organization if employed</label>
                                <div className="col">
                                    <input type="text" className="form-control" id="validationCustom01" placeholder="Mark" required="" />
                                </div>

                                <label for="validationCustom01" className="form-label">Experience</label>
                                <div className="col">
                                    <input type="text" className="form-control" id="validationCustom01" placeholder="Mark" required="" />
                                </div>





                            </div>






                            <div className="col-12">
                                <div className="row text-center"  style={{color:"blue"}}>

                                    <div className="col-12">
                                        <div className="form-floating my-3 col-12" >
                                            <button type="button" className="btn btn-primary col-6">Save </button>

                                        </div>
                                    </div>


                                    <div className="col-3">
                                    <i class="bi bi-telephone"></i>
                                        <p>+91 7276838776</p>
                                    </div>
                                    <div className="col-3">
                                        <i class="bi bi-whatsapp"></i>
                                        <p>+91 8276838776</p>
                                    </div>
                                    <div className="col-3">
                                    <i class="bi bi-facebook"></i>
                                        <p>interface11</p>
                                    </div>
                                    <div className="col-3">
                                    <i class="bi bi-instagram"></i>
                                        <p>interfae11</p>
                                    </div>
                                    <div className="col-3">
                                    <i class="bi bi-hash"></i>
                                        <p>info@interface11</p>
                                    </div>

                                    <div className="col-3">
                                    <i class="bi bi-linkedin"></i>
                                        <p>interface11 pvt.ltd</p>
                                    </div>
                                    <div className="col-3">
                                    <i class="bi bi-globe"></i>
                                        <p>www.interface.11.in</p>
                                    </div>

                                </div>

                                <p className="text-center" style={{color:"blue"}}><i class="bi bi-geo-alt"></i>
                                
                                4th floor , Waris height,Opp, Ellora Palace , Dhankawdi , pune 411.043</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}



export default StudentEnqForm;