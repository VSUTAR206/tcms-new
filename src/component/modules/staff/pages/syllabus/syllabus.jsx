import React from "react";
import Footer from "../../../commanComponenets/footer";
import HeaderAfter from "../../../commanComponenets/headerafterlogin";


const Syllabus = () => {

    const studymaterial = [
        {
            img: "./img/syllabus1.jpeg",
            name: "Java full stack Development",
    
        },
        {
            img: "./img/react1.jpeg",
            name: "React js",
    
        }, {
            img: "./img/AWS.png",
            name: "AWS",

        }, {
            img: "./img/angular.jpeg",
            name: "Angular",
    
        },
        {
            img: "./img/c and c++.jpeg",
            name: "C/C++ Programming...",

        }
        ,
        {
            img: "./img/big data.png",
            name: "Big Data and analytics",
        }, {
            img: "./img/syllabus1.jpeg",
            name: "Capus Recrutment Training",
        }, {
            img: "./img/python.jpeg",
            name: "Python ",
        },
        {
            img: "./img/software testing.jpeg",
            name: "Softwear Testing",
        }

        ,
        {
            img: "./img/syllabus1.jpeg",
            name: "DevOps",
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
                               
                            </div>
                        </div>
                    </div>


                })}
            </div>


        </div>



























        <Footer />

    </>)
}


export default Syllabus;