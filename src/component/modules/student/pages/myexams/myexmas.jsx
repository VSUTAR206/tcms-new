import React from "react";
import Footer from "../../../commanComponenets/footer";
import HeaderAfter from "../../../commanComponenets/headerafterlogin";


const StudentMyExamPendinmgList = () => {

    const data = ""
    return (<>

        <HeaderAfter />







<h3 style={{textAlign:"center",textDecoration:'underline'}}>My Exams</h3>

        <div class="table-responsive">
  <table class="table my-5">
    <thead>
      <tr className="text-center">
  
        <th scope="col">sr.no</th>
        <th scope="col">Subject</th>
        <th scope="col">Exam Date</th>
        <th scope="col">Exam Time</th>
        <th scope="col">Mode Of Exam </th>
        <th scope="col">Select</th>
       </tr>
    </thead>
    <tbody>
      <tr className="text-center">
   
        <td>1</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
  
        
      </tr>
      <tr className="text-center">
        
        <td>2</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>

     
      </tr>
      <tr className="text-center">
     
        <td>3</td>
        <td>Cell</td>
        <td>Cevcbcvbcxvbll</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        
      </tr>
    </tbody>
  </table>
</div>


        <Footer />
    </>

    )
}



export default StudentMyExamPendinmgList;