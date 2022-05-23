
import { Button, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Applicant from './Applicants';
import JobSeekers from './JobSeekers';

export default function Admin() {
  const[pushUpdate,setPushUpdate]=useState(true)
  
  return (
    <div>

       <Button variant="contained" type="submit" onClick={()=>{window.location.pathname="Home"}} style={{ width: 100 + '%' }}> LOG OUT</Button>
      
       
      <Typography style={{textAlign:'center'}}><h3>Applicants</h3></Typography>
    <Applicant pushUpdate={pushUpdate} setPushUpdate={setPushUpdate}/>
    <Typography style={{textAlign:'center'}}><h3>Employees</h3></Typography>
    <JobSeekers pushUpdate={pushUpdate} setPushUpdate={setPushUpdate} />
    </div>
  );
}

