import React from "react";
import Footer from "../../../commanComponenets/footer";
import HeaderAfter from "../../../commanComponenets/headerafterlogin";


const StaffAttendence = () => {
    return (<>

        <HeaderAfter />

        <div className="container user-select-none">

            <div className="row">

                <div className="col-md-4">
                    <table class="table table-bordered">

                        <tbody>
                            <tr>

                                <td>Mark</td>
                                <td>Otto</td>

                            </tr>
                            <tr>

                                <td>Jacob</td>
                                <td>Thornton</td>

                            </tr>
                            <tr>

                                <td >Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <div className="col-md-8 text-center user-select-none">


                    <h1>Student Name</h1>

                    <span className="mx-2"> <input class="form-check-input" type="radio" style={{backgroundColor:"red"}} disabled />
                    Present</span>
                    <span className="mx-2"> <input class="form-check-input" type="radio" style={{backgroundColor:"blue"}} disabled/>
                    Absent</span>
                    <span className="mx-2"> <input class="form-check-input" type="radio" style={{backgroundColor:"green"}} disabled/>
                    Leave</span>
                    <span className="mx-2"> <input class="form-check-input" type="radio"   style={{backgroundColor:"gray"}} disabled/>
                    Holiday</span>
                </div>





            </div>


<div className="col-12 text-center" style={{display:"flex", justifyContent:"space-around" , fontSize:"50px"}}>
<i class="bi bi-arrow-left-circle"></i>
   <h2> October 2023</h2>
   <i class="bi bi-arrow-right-circle"></i>
</div>


            <div class="table-responsive">
  <table class="table">
    <thead>
      <tr className="text-center">
  
        <th scope="col">Sunday</th>
        <th scope="col">Monday</th>
        <th scope="col">Tuesday</th>
        <th scope="col">Wendnesday</th>
        <th scope="col">Thursday</th>
        <th scope="col">Friday</th>
        <th scope="col">Saturday</th>
      </tr>
    </thead>
    <tbody>
      <tr className="text-center">
   
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        
      </tr>
      <tr className="text-center">
        
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
     
      </tr>
      <tr className="text-center">
     
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
    
      </tr>
    </tbody>
  </table>
</div>
        </div>
        <Footer />
    </>

    )
}



export default StaffAttendence;