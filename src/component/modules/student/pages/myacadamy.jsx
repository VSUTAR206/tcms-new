import React from "react";
import Footer from "../../commanComponenets/footer";
import HeaderAfter from "../../commanComponenets/headerafterlogin";


const Myacadamy = () => {
    return (<>

        <HeaderAfter/>

        <div className="container user-select-none">

<div className="row">



        <table class="table table-borderless" style={{fontSize:"30px"}}> 
  <thead>
    <tr>
      <th><i class="bi bi-123"></i></th>
      <th>Academic id </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th ><i class="bi bi-person"></i></th>
      <td>UserName</td>
    </tr>

    <tr>
      <th ><i class="bi bi-person"></i></th>
      <td>UserName</td>
    </tr>
   
    <tr>
      <th ><i class="bi bi-envelope"></i></th>
      <td>E-mail</td>
    </tr>
   

    <tr>
      <th ><i class="bi bi-phone"></i></th>
      <td>Mobile Number</td>
    </tr>

    <tr>
      <th ><i class="bi bi-geo-alt"></i></th>
      <td>Location </td>
    </tr>

  </tbody>
</table>
        
</div>
        </div>

        <Footer />
    </>

    )
}



export default Myacadamy;