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
import { Box, Button, ButtonGroup, Card, FormControl, MenuItem, Select, TextField } from '@material-ui/core';
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

function Applicant({pushUpdate,setPushUpdate}) {
  const classes = useStyles();
  const[applicant,setApplicant]=useState([])
  const[cardOptions,setCardOptions]=useState([])

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
  useEffect(()=>{
    fetchApplicants();
  },[pushUpdate])
  const fetchApplicants=async()=>{
    let res=await axios.get('https://localhost:7072/GetApplicationForm');
    setApplicant(res.data)
  }
  const DeleteApplicant=async(id)=>{
    const res=await axios.delete(`https://localhost:7072/DeleteApplicant?ApplicationformSID=${id}`)
    toast.success("Deleted Succesfully",2000)
    setPushUpdate((prev)=>!prev)
  }
  const AcceptApplicant=async(id,name,depart,num)=>{
      console.log(cardOptions)
      let majorIndex=cardOptions.findIndex((element) => element.value === depart);
      if(majorIndex==-1){
        toast.error("oops something went wrong",3000)
        return;
      }
      else{
        const res=await axios.post(`https://localhost:7072/AddJobSeeker?name=${name}&major=${cardOptions[majorIndex].label}&Phonenumber=${num}`);
        const res2=await axios.delete(`https://localhost:7072/DeleteApplicant?ApplicationformSID=${id}`)
        setPushUpdate((prev)=>!prev)
        toast.success("Accepted Applicant",2000)
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
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Address</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {applicant && applicant.length && applicant.map((row) => (
            <TableRow key={row.jobSeekerSID}>
              <TableCell component="th" scope="row">
                {row.applicationformSID}
              </TableCell>
              <TableCell align="center">{row.firstName} {row.lastName}</TableCell>
              <TableCell align="center"> <FormControl fullWidth>
           {cardOptions.length &&<Select
              value={row.departmentSID}
              disabled
            >
               {cardOptions && cardOptions.length &&cardOptions.map((card)=>
                <MenuItem key={card.value} value={card.value}>
                {card.label}
                </MenuItem>)}
                </Select>}
                </FormControl>
                  </TableCell>
                  <TableCell align="center">{row.phoneNumber}</TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.addresslocation}</TableCell>
              <TableCell align="right"> <ButtonGroup style={{gap:"1em"}}>
                  <Button color="secondary" variant="contained"  onClick={()=>{DeleteApplicant(row.applicationformSID)}}>Delete</Button>
                  <Button color="primary" variant="contained" onClick={()=>{AcceptApplicant(row.applicationformSID ,row.firstName,row.departmentSID,row.phoneNumber);}}>Accept</Button>
                  </ButtonGroup></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Applicant