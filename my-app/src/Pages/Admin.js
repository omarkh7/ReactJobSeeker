
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Applicant from './Applicants';
import JobSeekers from './JobSeekers';

export default function Admin() {
  const[pushUpdate,setPushUpdate]=useState(true)
  
  return (
    <div>
    <Applicant pushUpdate={pushUpdate} setPushUpdate={setPushUpdate}/>
    <JobSeekers pushUpdate={pushUpdate} setPushUpdate={setPushUpdate} />
    </div>
  );
}

