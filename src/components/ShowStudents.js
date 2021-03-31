import React,{useState,useEffect} from 'react'
import axios from 'axios';
const ShowStudents = () => {

    const [data,setdata] = useState([]);

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/show/admissionform")
        .then((res)=>
        {
            setdata(res.data)
        }).catch((err)=>{console.log(err);})
    },[])

    return (
<div>
        <div className="container">
  <ul className="responsive-table">
    <li className="table-header">
      <div className="col col-3">Name</div>
      <div className="col col-3">Father's Name</div>
      <div className="col col-3">Email</div>
      <div className="col col-3">Address</div>
    </li>
    {data.map((item,index)=>{
        return(
    <li key={index} className="table-row">
      <div className="col col-3" data-label="Job Id">{item.Full_Name}</div>
      <div className="col col-3" data-label="Customer Name">{item.Father_Name}</div>
      <div className="col col-3" data-label="Amount">{item.Email}</div>
      <div className="col col-3" data-label="Payment Status">{item.Address}</div>
    </li>
        );
    }
    )
    }
  </ul>
</div>
        </div>
    )
}

export default ShowStudents;
