import React from "react";
import Footer from "../../commanComponenets/footer";
import HeaderAfter from "../../commanComponenets/headerafterlogin";


const MyBatches = () => {
    const students = [
        {
            id:"11111",
            name:'vishal',
            cource:"java full stack ",
            phone:"+7972001963",
            performance:"good",
            progress:75
        },
    ]
    return (<>

        <HeaderAfter />

        <div className="container overflow-auto">


            <div className="row">




                <div className="col-12">





                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="row">

                                <div className="card-title col-1 text-center">
                                    <i style={{fontSize:"45px"}} class="bi bi-mortarboard"></i>
                                </div>

{students.map((e)=> {

    return ( <>
    
    
    <div className="card-title col-3 text-left">
                                    <p style={{fontSize:"12px", fontWeight:"800"}}>ID:{e.id}</p>
                                    <p style={{fontSize:"12px", fontWeight:"800"}}>MO.NO:{e.phone}</p>
                                </div>

<div className="card-title col-3 text-left">
                                    <p style={{fontSize:"12px", fontWeight:"800"}}>Name:{e.name}</p>
                                    <p style={{fontSize:"12px", fontWeight:"800"}}>Cource:{e.cource}</p>
                                </div>

                                <div className="card-title col-5 text-left">
                                    <span class="progress">
                                        <span class="progress-bar" role="progressbar" style={{ width:`${e.progress+"%"} `} } aria-valuenow="100%" aria-valuemin="0" aria-valuemax="100">{e.progress} %</span>
                                        <span></span>
                                    </span>
                                    <p className="my-2">Performance :
                                        <span className="mx-3">Good .</span>
                                    </p>
                                </div>

    </>

)} )}




                            </div>
                        </div>
                    </div>



















                </div>
            </div>
        </div>

        <Footer />
    </>

    )
}



export default MyBatches;