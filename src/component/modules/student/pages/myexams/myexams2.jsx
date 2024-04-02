import React from "react";
import Footer from "../../../commanComponenets/footer";
import HeaderAfter from "../../../commanComponenets/headerafterlogin";


const StudentMyExamHistory = () => {

    const data = ""
    return (<>

        <HeaderAfter />
<div className="container">

    <div className="row my-5">
        <div className="card my-5">
{data? data : <h3 className="text-center my-5 " style={{fontFamily:"cursive"}}>No History Found....</h3>}

        </div>
    </div>
</div>


        <Footer />
    </>

    )
}



export default StudentMyExamHistory;