import React,{useState,useEffect} from 'react';
import Select from 'react-select'
import './App.css';
import axios from 'axios';
import {Button} from 'react-bootstrap';
const AdmissionForm = () => {

    const Department = [
      { value: 'IT', label: 'IT', Name : "Department" },
      { value: 'BBA', label: 'BBA', Name : "Department" },
      { value: 'URDU', label: 'URDU', Name : "Department" }
    ]

    const Gender = [
      { value: 'Male', label: 'Male', Name : "Gender" },
      { value: 'Female', label: 'Female', Name : "Gender" },
    ]

    const MatricBoard = [
      { value: 'Gujranwala', label: 'Gujranwala', Name : "Matric_Board" },
      { value: 'Lahore', label: 'Lahore', Name : "Matric_Board" },
    ]

    const InterBoard = [
      { value: 'Gujranwala', label: 'Gujranwala', Name : "Inter_Board" },
      { value: 'Lahore', label: 'Lahore', Name : "Inter_Board" },
    ]

    const [formdata,setformdata] = useState({
      Full_Name : "",
      Father_Name : "",
      Gender : "",
      CNIC : "",
      DOB : "",
      Email : "",
      Phone : "",
      Address : "",
      Department : "",
      Matric_Roll : "",
      Matric_Total_Marks : "",
      Matric_Obtained_Marks : "",
      Matric_Board : "",
      Inter_Roll : "",
      Inter_Total_Marks : "",
      Inter_Obtained_Marks : "",
      Inter_Board : "",
    });

    const change = (e) => {
      setformdata({
        ...formdata,
        [e.target.name] : e.target.value
      })
    }

    const changeselect = (e) => {
      setformdata({
        ...formdata,
        [e.Name] : e.value
      })
    }

    const set = (e) => {
      e.preventDefault()
      if (formdata.Gender === "" || formdata.Department === "" || formdata.Matric_Board === "" || formdata.Inter_Board === "")
      {
        console.log("Incomplete Form")
      }
      else
      {
        axios.post(`http://127.0.0.1:8000/post/admissionform`,formdata)
        .then((res)=>{console.log("Yes",res)})
        .catch((err)=>{console.log("No",err)})
      }
    }

    return (
      <React.Fragment>
        <div className="container register">
                <div className="row">
                    <div className="col-md-3 register-left ">
                        <img style={{marginTop:"150px"}} className="w-100" src="https://www.seekpng.com/png/full/126-1269360_icon-student-icon-for-new-student.png" alt="gmc_logo"/>
                        <h3><b>Welcome to GMC</b></h3>
                        <p><b>You are a few steps away from Entering into GMC</b></p>
                    </div>
                    <div className="col-md-9 register-right">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 className="register-heading"><b>Application Form</b></h3>                                
                                <div className="row register-form">
                                    <div className="col-md-6">
                                      <hr className="col-md-12" />
                                      <h4 className="col-md-12 text-primary"><b>Personal Info</b></h4>
                                      <hr className="col-md-12" />  
                                        <div className="form-group">
                                            <input type="text" name="Full_Name" className="form-control" onChange={change} placeholder="Your Full Name *"  required/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="Father_Name" className="form-control" onChange={change} placeholder="Your Father's Name *"  required/>
                                        </div>
                                        <div className="form-group">
                                            <Select name="Gender" onChange={changeselect} placeholder="Male/Female" options={Gender} required />
                                        </div>
                                        <div className="form-group">
                                            <input type="number" name="CNIC" onChange={change} minLength="13" className="form-control" placeholder="Your CNIC/B-Form *" required />
                                        </div>
                                        <div className="form-group">
                                            <input type="date" name="DOB" onChange={change} className="form-control" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                      <hr className="col-md-12" />
                                      <h4 className="col-md-12 text-primary"><b>Contact Info</b></h4>
                                      <hr className="col-md-12" /> 
                                        <div className="form-group">
                                            <input type="email" name="Email" onChange={change} className="form-control" placeholder="Your Email *" required />
                                        </div>
                                        <div className="form-group">
                                            <input type="number" name="Phone" onChange={change} minLength="11" className="form-control" placeholder="Your Phone *"  required/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="Address" onChange={change} className="form-control" placeholder="Your Address *"  required/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                    <hr className="col-md-12" />
                                      <h4 className="col-md-12 text-primary"><b>Select BS Department</b></h4>
                                      <hr className="col-md-12" /> 
                                      <div className="form-group">
                                            <Select name="Department" onChange={changeselect} placeholder="Select BS Department" options={Department} required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                      <hr className="col-md-12" />
                                      <h4 className="col-md-12 text-primary"><b>Matric Details</b></h4>
                                      <hr className="col-md-12" />  
                                        <div className="form-group">
                                            <input type="number" name="Matric_Roll" onChange={change} className="form-control" placeholder="Your Matric Roll #"  required/>
                                        </div>
                                        <div className="form-group">
                                            <input type="number" name="Matric_Total_Marks" onChange={change} className="form-control" placeholder="Total Marks in Matric"  required/>
                                        </div>
                                        <div className="form-group">
                                            <input type="number" name="Matric_Obtained_Marks" onChange={change} className="form-control" placeholder="Obtained Marks in Matric" required />
                                        </div>
                                        <div className="form-group">
                                            <Select name="Matric_Board" onChange={changeselect}  placeholder="Select Board" options={MatricBoard} required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                      <hr className="col-md-12" />
                                      <h4 className="col-md-12 text-primary"><b>Inter Details</b></h4>
                                      <hr className="col-md-12" />  
                                      <div className="form-group">
                                            <input type="number" name="Inter_Roll" onChange={change} className="form-control" placeholder="Your Inter Roll #"  required/>
                                        </div>
                                        <div className="form-group">
                                            <input type="number" name="Inter_Total_Marks" onChange={change} className="form-control" placeholder="Total Marks in Inter"  required/>
                                        </div>
                                        <div className="form-group">
                                            <input type="number" name="Inter_Obtained_Marks" onChange={change} className="form-control" placeholder="Obtained Marks in Inter" required />
                                        </div>
                                        <div className="form-group">
                                            <Select name="Inter_Board" onChange={changeselect} placeholder="Select Board" options={InterBoard} required />
                                        </div>
                                        <Button onClick={set} className="btnRegister">Apply</Button>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </React.Fragment>
    );
};

export default AdmissionForm;
