import React from "react";
import Footer from "../../../commanComponenets/footer";
import HeaderAfter from "../../../commanComponenets/headerafterlogin";


const StaffSetExams = () => {

    const data = ""
    return (<>

        <HeaderAfter />

        <div className="container">


            <div className="row">
                <div className="col-12 " >


                    <div className="col-6 " style={{ margin: "10px auto" }}>









                    <div className="col">


<label for="validationCustom01" className="form-label">Select Branch.</label>
<div className="col">
    <input type="text" className="form-control" id="validationCustom01" placeholder="Mark" required="" />
</div>

<label for="validationCustom01" className="form-label">Select Batch</label>
<div className="col">
    <input type="text" className="form-control" id="validationCustom01" placeholder="Mark" required="" />
</div>

<label for="validationCustom01" className="form-label">Select Date & Date </label>
<div className="col">
    <input type="text" className="form-control" id="validationCustom01" placeholder="Mark" required="" />
</div>

<label for="validationCustom01" className="form-label">Select Subject </label>
<div className="col">
    <input type="text" className="form-control" id="validationCusto1m0" placeholder="Mark" required="" />
</div>


<label for="validationCustom01" className="form-label">Select Mode of exam </label>
<div className="col">
    <input type="text" className="form-control" id="validationCusto1m0" placeholder="Mark" required="" />
</div>




<button type="submit" className="btn btn-primary form-control my-3 "> Save Exam</button>


</div>




                    </div>
                </div>











            </div>
        </div>


        <Footer />
    </>

    )
}



export default StaffSetExams;