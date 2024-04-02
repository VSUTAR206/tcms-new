import React from "react";
import Header from '../../commanComponenets/header'
import Footer from "../../commanComponenets/footer";
import '../../../../App.css'



const StaffDashboard = () => {


  return (<>
    <Header />

    <div className="container overflow-auto">

      <div className="row">
        <div className="col-6 ">
          <h3 className="text-center">Staff menu</h3>
          <div className="row    row-cols-1 row-cols-sm-1  row-cols-md-2  row-cols-lg-3 g-3 " style={{ justifyContent: "center" }}>
            <div className="col">

              <div className="card">
                <img src="./img/syllabus1.jpeg" className="card-img-top" alt="card-grid-image" />
                <div className="card-body">
                  <h5 className="card-title"> Acadamy</h5>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src="./img/syllabus1.jpeg" className="card-img-top" alt="card-grid-image" />
                <div className="card-body">
                  <h5 className="card-title">My Batches</h5>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src="./img/syllabus1.jpeg" className="card-img-top" alt="card-grid-image" />
                <div className="card-body">
                  <h5 className="card-title">Attendance</h5>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src="./img/syllabus1.jpeg" className="card-img-top" alt="card-grid-image" />
                <div className="card-body">
                  <h5 className="card-title">Syllabus</h5>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src="./img/syllabus1.jpeg" className="card-img-top" alt="card-grid-image" />
                <div className="card-body">
                  <h5 className="card-title">Study Materials</h5>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src="./img/syllabus1.jpeg" className="card-img-top" alt="card-grid-image" />
                <div className="card-body">
                  <h5 className="card-title">Exams</h5>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src="./img/syllabus1.jpeg" className="card-img-top" alt="card-grid-image" />
                <div className="card-body">
                  <h5 className="card-title">Reports</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-6">

          <marquee behavior="" className="my-1 text-center" direction="up" style={{ border: "1px solid red", width: "550px", height: "200px", borderRadius: "12px" }}>
            <h2 style={{ color: "red" }}>Java Test</h2>
            <p>Date: 2021</p>
          </marquee>

          <div id="carouselDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
              <li data-bs-target="#carouselDark" data-bs-slide-to="0" className="active"></li>
              <li data-bs-target="#carouselDark" data-bs-slide-to="1"></li>
              <li data-bs-target="#carouselDark" data-bs-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" style={{ border: "1px solid red", width: "550px", height: "330px", objectFit: "cover", overflow: "none", borderRadius: "12px" }}>
              <div className="carousel-item active">
                <img src="./img/background1.jpeg" className="d-block w-100" alt="Slide 1" />
                <div className="carousel-caption d-none d-sm-block">

                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="./img/background1.jpeg" className="d-block w-100" alt="Slide 2" />
                <div className="carousel-caption d-none d-sm-block">

                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="./img/background1.jpeg" className="d-block w-100" alt="Slide 3" />
                <div className="carousel-caption d-none d-sm-block">

                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselDark" role="button" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselDark" role="button" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </a>
          </div>

        </div></div>
    </div>

    <Footer />
  </>
  )
}

export default StaffDashboard;