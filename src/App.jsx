import { useState } from 'react'
import './App.css'
import Header from './component/modules/commanComponenets/header'
import HeaderAfter from './component/modules/commanComponenets/header'
import Homepage from './component/login/homepage/homepage'
import Forpass from './component/login/forgotPassword/forgotpassword'
import Footer from './component/modules/commanComponenets/footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Privatecompo from './component/modules/commanComponenets/privatecomponenet'
import Setpass from './component/login/setPassword/setPassword'
import AboutUs from './component/modules/commanComponenets/aboutus'
import StudentEnqForm from './component/login/studentEnquiryForm/studentEnquiryform'
import StudentDaashboard from './component/modules/student/1dashboard/studentdashboard'
import AdminDashboard from './component/modules/admin/1dashboard/adminDashboard'
import StaffDashboard from './component/modules/staff/1dashboard/staffdashboard'
import Myacadamy from './component/modules/student/pages/myacadamy'
import MyCourses from './component/modules/student/pages/tutionFees'
import StudentAttendence from './component/modules/student/pages/attendance'
import StudentMyExam from './component/modules/student/pages/myexams/myexam'
import StudentMyExamHistory from './component/modules/student/pages/myexams/myexams2'
import StudentMyExamPendinmgList from './component/modules/student/pages/myexams/myexmas'
import StudyMaterialStudenty from './component/modules/student/pages/studymaterial'
import AssignMentList from './component/modules/student/pages/myassaignment'
import StaffMyacadamy from './component/modules/staff/pages/myAcadany'
import MyBatches from './component/modules/staff/pages/student'
import Takeattendence from './component/modules/staff/pages/attendance/attendance'
import StaffAttendence from './component/modules/staff/pages/attendance/attendance2'
import Syllabus from './component/modules/staff/pages/syllabus/syllabus'
import StaffMyExams from './component/modules/staff/pages/myExams/myExams'
import Staffassignments from './component/modules/staff/pages/myExams/assaignments'
import StaffSetExams from './component/modules/staff/pages/myExams/setExams'
import Staffreports from './component/modules/staff/pages/reports/reports'
import StudentAttendenceHistory from './component/modules/staff/pages/reports/attendance'
import StaffExamHistory from './component/modules/staff/pages/reports/examHistory'
import StaffBatches from './component/modules/staff/pages/reports/batches'
import AdminBatches from './component/modules/admin/pages/batches/batches'
import Addbatch from './component/modules/admin/pages/batches/addBatches'

function App() {
  const [count, setCount] = useState(0)
  const auth = localStorage.getItem("user")

  return (<>
  
  <BrowserRouter>
 
  <Routes>

    <Route element={<Privatecompo/>}>

    </Route>



    <Route path='/' element={<Homepage/>}/>
    <Route path='/home' element={<Homepage/>}/>
    <Route path='/Setpass' element={<Setpass/>}/>
    <Route path='/Forpass' element={<Forpass/>}/>
    <Route path='/AboutUs' element={<AboutUs/>}/>
    <Route path='/StudentEnqForm' element={<StudentEnqForm/>}/>
    <Route path='/StudentDaashboard' element={<StudentDaashboard/>}/>
    <Route path='/StaffDashboard' element={<StaffDashboard/>}/>
    <Route path='/AdminDashboard' element={<AdminDashboard/>}/>
    <Route path='/Myacadamy' element={<Myacadamy/>}/>
    <Route path='/MyCourses' element={<MyCourses/>}/>
    <Route path='/StudentAttendence' element={<StudentAttendence/>}/>
    <Route path='/StudentMyExam' element={<StudentMyExam/>}/>
    <Route path='/StudentMyExamHistory' element={<StudentMyExamHistory/>}/>
    <Route path='/StudentMyExamPendinmgList' element={<StudentMyExamPendinmgList/>}/>
    <Route path='/StudyMaterialStudenty' element={<StudyMaterialStudenty/>}/>
    <Route path='/AssignMentList' element={< AssignMentList/>}/> 
    <Route path='/StaffMyacadamy' element={< StaffMyacadamy/>}/> 
    <Route path='/MyBatches' element={< MyBatches/>}/> 
    <Route path='/Takeattendence' element={< Takeattendence/>}/> 
    <Route path='/StaffAttendence' element={< StaffAttendence/>}/> 
    <Route path='/Syllabus' element={< Syllabus/>}/> 
    <Route path='/StaffMyExams' element={< StaffMyExams/>}/> 
    <Route path='/Staffassignments' element={< Staffassignments/>}/> 
    <Route path='/StaffSetExams' element={< StaffSetExams/>}/> 
    <Route path='/Staffreports' element={< Staffreports/>}/> 
    <Route path='/StudentAttendenceHistory' element={< StudentAttendenceHistory/>}/> 
    <Route path='/StaffExamHistory' element={< StaffExamHistory/>}/> 
    <Route path='/StaffBatches' element={< StaffBatches/>}/> 
    <Route path='/AdminBatches' element={< AdminBatches/>}/> 
    <Route path='/Addbatch' element={< Addbatch/>}/> 

  </Routes>
  

  </BrowserRouter>
  </>
  )
}

export default App
