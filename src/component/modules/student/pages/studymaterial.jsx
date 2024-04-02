import React from "react";
import Header from '../../commanComponenets/header'
import Footer from "../../commanComponenets/footer";
import HeaderAfter from "../../commanComponenets/headerafterlogin";


const StudyMaterialStudenty = () => {

    const studymaterial = [
        {
            img: "./img/syllabus1.jpeg",
            name: "Java full stack Development",
            duration: "30",
            fees: "30,000"
        },
        {
            img: "./img/react1.jpeg",
            name: "React js",
            duration: "60",
            fees: "50,000"
        }, {
            img: "./img/AWS.png",
            name: "AWS",
            duration: "00",
            fees: "10000"
        }, {
            img: "./img/angular.jpeg",
            name: "Angular",
            duration: "90",
            fees: "30,000"
        },
        {
            img: "./img/c and c++.jpeg",
            name: "C/C++ Programming...",
            duration: "60",
            fees: "10000"
        }
        ,
        {
            img: "./img/big data.png",
            name: "Big Data and analytics",
            duration: "60",
            fees: "8000"
        }, {
            img: "./img/syllabus1.jpeg",
            name: "Capus Recrutment Training",
            duration: "60",
            fees: "8000"
        }, {
            img: "./img/python.jpeg",
            name: "Python ",
            duration: "00",
            fees: "8000"
        },
        {
            img: "./img/software testing.jpeg",
            name: "Softwear Testing",
            duration: "90",
            fees: "8000"
        }

        ,
        {
            img: "./img/syllabus1.jpeg",
            name: "DevOps",
            duration: "00",
            fees: "8000"
        }

    ]



    return (<>


        <HeaderAfter />





        <div className="container">


            <div className="row    row-cols-1 row-cols-sm-2  row-cols-md-3  row-cols-lg-5 g-3 " style={{ justifyContent: "center" }}>
                {studymaterial.map((e) => {
                    return <div className="col">

                        <div className="card">
                            <img src={e.img} style={{height:"90px",width:"100%"}} alt="card-grid-image" />
                            <div className="card-body">
                                <h5 className="card-title text-center" style={{fontSize:"14px"}}>{e.name}</h5>
                                <p style={{fontSize:"14px", margin:"0px" }}>Duration : {e.duration} : Days</p>
                                <p style={{fontSize:"14px", margin:"0px" }}>Fees : $ {e.fees}</p>
                            </div>
                        </div>
                    </div>


                })}
            </div>


        </div>



























        <Footer />

    </>)
}


export default StudyMaterialStudenty;