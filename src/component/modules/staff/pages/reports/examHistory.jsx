import React from "react";
import Footer from "../../../commanComponenets/footer";
import HeaderAfter from "../../../commanComponenets/headerafterlogin";


const StaffExamHistory = () => {
    return (<>

        <HeaderAfter />

        <div className="container user-select-none">
            <div className="row">

                <div className="col-12 text-center">
                    <h1>Assignment List</h1>
                </div>
                <div className="col-6 ">

                    <div className="text-center " style={{ fontSize: "25px" }}>
                        <i className="bi bi-arrow-left-circle mx-2"></i>
                        <span>October 2023</span>
                        <i className="bi bi-arrow-right-circle mx-2 "></i></div >

                    <div className="table-responsive">
                        <table className="table">
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


                <div className="col-6 card my-3">
                    <h3 className="text-center my-2"> List of assignment  </h3>
                    <hr />



                </div>

                <div className="col-12 my-3">

                <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>



                </div>
            </div>
        </div>

        <Footer />
    </>

    )
}



export default StaffExamHistory;