import React from "react";
import Footer from "../../../commanComponenets/footer";
import HeaderAfter from "../../../commanComponenets/headerafterlogin";


const Staffassignments = () => {

    const data = ""
    return (<>

        <HeaderAfter />

        <div className="container">


            <div className="row">
                <div className="col-12 " >


                    <div className="col-6 " style={{ margin: "10px auto" }}>









                    <div className="col">


<label for="validationCustom01" className="form-label">Select Batch.</label>
<div className="col">
    <input type="text" className="form-control" id="validationCustom01" placeholder="Mark" required="" />
</div>

<label for="validationCustom01" className="form-label">Select Date & Date..</label>
<div className="col">
    <input type="text" className="form-control" id="validationCustom01" placeholder="Mark" required="" />
</div>

<label for="validationCustom01" className="form-label">Select Subjects..</label>
<div className="col">
    <input type="text" className="form-control" id="validationCustom01" placeholder="Mark" required="" />
</div>

<label for="validationCustom01" className="form-label">Date For Submit.. </label>
<div className="col">
    <input type="text" className="form-control" id="validationCusto1m0" placeholder="Mark" required="" />
</div>



<input type="file"  className="form-control my-3" name="" id="" />


<button type="submit" className="btn btn-primary form-control col "> Save Exam</button>


</div>




                    </div>
                </div>











            </div>
        </div>


        <Footer />
    </>

    )
}



export default Staffassignments;