import React from "react";
import Footer from "../../../commanComponenets/footer";
import HeaderAfter from "../../../commanComponenets/headerafterlogin";


const StudentMyExam = () => {
    return (<>

        <HeaderAfter />

<div className="container">
    <div className="row">
        <div className="col-md-3 offset-3">
            <div className="exams_info">
                <div className="card text-center py-5  " style={{borderRadius:"10px",fontSize:"50px",  cursor:"pointer"   }}>
                <i class="bi bi-mortarboard-fill"></i>
                    <h5>Exams & Asssaignment History</h5>
                </div>
            </div>
        </div>
        <div className="col-md-3 ">
            <div className="exams_info">
                <div className="card text-center py-5  " style={{borderRadius:"10px" ,fontSize:"50px", cursor:"pointer"    }}>
                    <i className="bi bi-laptop-fill"></i>
                    <h5>Exams & Asssaignment History</h5>
                </div>
            </div>
        </div>
    </div>
</div>

        <Footer />
    </>

    )
}



export default StudentMyExam;