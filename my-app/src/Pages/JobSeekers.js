import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { Button, ButtonGroup, FormControl, MenuItem, Select, TextField } from '@material-ui/core';
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles({
  table: {
    width: "80%",
    margin:"auto",
    marginTop:"2em",
    marginBottom:"4em"
  },
});

function JobSeekers({pushUpdate,setPushUpdate}) {
  const classes = useStyles();
  const[seekers,setSeekers]=useState([])
  const[stage,setStage]=useState('Update')
  const[active,setActive]=useState(0)
  const[fname,setFname]=useState("")
  const[dep,setDep]=useState("")
  const[number,setNumber]=useState("")
  const[cardOptions,setCardOptions]=useState([])

  async function fetchData(){
    const res=await axios.get('https://localhost:7072/GetAllDepartments');
    let deps=[];
    res.data.forEach(department => {
      deps.push({label:department.departmentName,value:department.departmentName})
    });
    setCardOptions(deps)
  }
  useEffect(()=>{
    fetchData();
  },[])
  useEffect(()=>{
    fetchSeekers();
  },[pushUpdate])
  const fetchSeekers=async()=>{
    let res=await axios.get('https://localhost:7072/GetAllJobSeekers');
    setSeekers(res.data)
  }
  const DeleteSeeker=async(id)=>{
    const res=await axios.delete(`https://localhost:7072/DeleteJobSeeker?JodSeekerSID=${id}`)
    toast.success("Deleted Succesfully",2000)
    setPushUpdate((prev)=>!prev)
  }
  const UpdateSeeker=async(id,name,depart,num)=>{
      if(stage=="Update"||active!=id){
        setActive(id);
        setStage("Save")
        setFname(name)
        setDep(depart)
        setNumber(num)
      }
      else{
        const res=await axios.put(`https://localhost:7072/UpdateJobSeeker?NewJobSeekerName=${fname}&NewJobSeekerMajor=${dep}&NewPhoneNumber=${number}&JobSeekerSID=${id}`);
        setPushUpdate((prev)=>!prev)
        toast.success("Updated Succesfully",2000)
        setActive(0);
        setStage("Update")
        setFname("")
        setDep("")
        setNumber("")
      }
   
}

  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Department</TableCell>
            <TableCell align="center">Phone Number</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {seekers && seekers.length && seekers.map((row) => (
            <TableRow key={row.jobSeekerSID}>
              <TableCell component="th" scope="row">
                {row.jobSeekerSID}
              </TableCell>
              <TableCell align="center"><TextField onChange={(e)=>{setFname(e.target.value)}} disabled={stage!="Save" || active!=row.jobSeekerSID} value={stage=="Save" && active==row.jobSeekerSID?fname: row.jobSeekerName}></TextField></TableCell>
              <TableCell align="center"> <FormControl fullWidth>
           {cardOptions.length &&<Select
              value={stage=="Save" && active==row.jobSeekerSID?dep:row.jobSeekerMajor}
              onChange={(e)=>{setDep(e.target.value)}}
              disabled={stage!="Save" || active!=row.jobSeekerSID}
            >
               {cardOptions && cardOptions.length &&cardOptions.map((card)=>
                <MenuItem key={card.value} value={card.value}>
                {card.label}
              </MenuItem>
               )}
            </Select>}
          </FormControl>
                  </TableCell>
              <TableCell align="center"><TextField onChange={(e)=>{setNumber(e.target.value)}} disabled={stage!="Save" || active!=row.jobSeekerSID} value={stage=="Save" && active==row.jobSeekerSID?number:row.phoneNumber}></TextField></TableCell>
              <TableCell align="right"> <ButtonGroup style={{gap:"1em"}}>
              {stage!="Save" || active!=row.jobSeekerSID?<Button color="secondary" variant="contained"  onClick={()=>{DeleteSeeker(row.jobSeekerSID)}}>Delete</Button>:null}
                  <Button color="primary" variant="contained" onClick={()=>{UpdateSeeker(row.jobSeekerSID,row.jobSeekerName,row.jobSeekerMajor,row.phoneNumber);}}>{stage =="Save" &&active==row.jobSeekerSID?"Save":"Update"}</Button>
                  </ButtonGroup></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ToastContainer/>
    </TableContainer>
  )
}

export default JobSeekers