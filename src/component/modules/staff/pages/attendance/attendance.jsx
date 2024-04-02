import React from "react";
import Footer from "../../../commanComponenets/footer";
import HeaderAfter from "../../../commanComponenets/headerafterlogin";


const Takeattendence = () => {


    const students = [
        {
            id:"11111",
            name:'vishal',
            cource:"java full stack ",
            phone:"+7972001963",
            performance:"good",
            progress:75
        },
        {
            id:"11111",
            name:'vishal',
            cource:"java full stack ",
            phone:"+7972001963",
            performance:"good",
            progress:75
        },
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


        <h1 className="text-center my-2 mb-3">Take Attendence</h1>

<div className="container user-select-none overflow">
<div className="row">




<div className="col-12 align-item-center justify-content-center d-flex ">
<span className="lef">
<i class="bi bi-arrow-left-circle mx-2"  style={{width:"600px", height:"50px" , fontSize:"35px"}}></i>

</span>
<span className="col-8 card text-center" style={{width:"600px", height:"50px"}}>
   <p className="my-2" style={{fontWeight:"600"}}>01/01/2023</p>
</span>
<span className="rgt">

<i class="bi bi-arrow-right-circle mx-2"  style={{width:"600px", height:"50px" , fontSize:"35px"}}></i>
</span>
</div>





<div className="col-12 text-center my-2">


<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="radioInline" id="inlineRadioDefault"/>
  <label class="form-check-label" for="inlineRadioDefault">Present</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="radioInline" id="inlineRadioChecked" />
  <label class="form-check-label" for="inlineRadioChecked">Absent</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="radioInline" id="inlineRadioChecked" />
  <label class="form-check-label" for="inlineRadioChecked">On leave</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="radioInline" id="inlineRadioChecked" />
  <label class="form-check-label" for="inlineRadioChecked">Holiday</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="radioInline" id="inlineRadioChecked" />
  <label class="form-check-label" for="inlineRadioChecked">Set</label>
</div>


</div>









<div className="card mb-4">
                        <div className="card-body">
                            <div className="row">

{students.map((e)=> {
                                <div className="card-title col-1 text-center ">
                                    <i style={{fontSize:"45px"}} class="bi bi-mortarboard"></i>
                                </div>


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
        <Footer />
    </>

    )
}



export default Takeattendence;