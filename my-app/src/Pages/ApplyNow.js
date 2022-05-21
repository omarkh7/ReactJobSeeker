import axios from "axios";
import react, { useEffect, useState } from "react";
import ApplicationForm from "./ApplicationForm/ApplicationForm";

function ApplyNow() {
  const [cardOptions, setCardOptions] = useState([]);

  useEffect(()=>{
    fetchData()
  },[])

  async function fetchData(){
    const res=await axios.get('https://localhost:7072/GetAllDepartments');
    let deps=[];
    res.data.forEach(department => {
      deps.push({label:department.departmentName,value:department.departmentSID})
    });
    setCardOptions(deps)
  }

  useEffect(()=>{
    fetchData();
  },[])

    return (
      <div >
        <ApplicationForm cardOptions={cardOptions}/>
  </div>
    );
  }
  
  export default ApplyNow;
  