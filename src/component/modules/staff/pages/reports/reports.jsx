import React from "react";
import Footer from "../../../commanComponenets/footer";
import HeaderAfter from "../../../commanComponenets/headerafterlogin";


const Staffreports = () => {
    return (<>

        <HeaderAfter />

<div className="container">
    <div className="row">



        <div className="col-md-3 ">
            <div className="exams_info my-1">
                <div className="card text-center py-5  user-select-none" style={{borderRadius:"10px",fontSize:"50px",  cursor:"pointer"   }}>
                <i class="bi bi-mortarboard-fill"></i>
                    <h5> My Assistance </h5>
                </div>
            </div>
        </div>




        <div className="col-md-3">
            <div className="exams_info my-1">
                <div className="card text-center py-5  user-select-none" style={{borderRadius:"10px" ,fontSize:"50px", cursor:"pointer"    }}>
                    <i className="bi bi-laptop-fill"></i>
                    <h5>Courrse Progress</h5>
                </div>
            </div>
        </div>

        
        <div className="col-md-3 ">
            <div className="exams_info my-1">
                <div className="card text-center py-5  user-select-none" style={{borderRadius:"10px",fontSize:"50px",  cursor:"pointer"   }}>
                <i class="bi bi-mortarboard-fill"></i>
                    <h5> Student Performance</h5>
                </div>
            </div>
        </div>







        <div className="col-md-3 ">
            <div className="exams_info my-1">
                <div className="card text-center py-5  user-select-none" style={{borderRadius:"10px",fontSize:"50px",  cursor:"pointer"   }}>
                <i class="bi bi-mortarboard-fill"></i>
                    <h5> Asssaignment </h5>
                </div>
            </div>
        </div>










    </div>
</div>

        <Footer />
    </>

    )
}



export default Staffreports;