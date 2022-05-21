import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { Box, Card, Paper } from "@material-ui/core";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const ApplicationForm = ({cardOptions}) => {
 const params = new URLSearchParams(window.location.search)
 const[fname,setFname]=useState("")
 const[lname,setLname]=useState("")
 const[email,setEmail]=useState("")
 const[number,setNumber]=useState("")
 const[loc,setLoc]=useState("")
 const[dep,setDep]=useState("")
useEffect(()=>{
    if(params.get('id')){
        setDep(params.get("id"))
    }
},[])
  const handleSubmit = async(event) => {
    event.preventDefault();
    if(fname&&lname&&email&&number&&loc&&dep){
        try{
        const res=await axios.post(`https://localhost:7072/AddApplicationform?fname=${fname}&lname=${lname}&email=${email}&phonenb=${number}&addresslocation=${loc}&departmentsid=${dep}`);
        }catch(e){
            console.log(e)

            toast.error("oops something went wrong",3000)

        }
        toast.success("Your Application has been submitted",3000)
        setFname("")
        setLname("")
        setEmail("")
        setNumber("")
        setLoc("")
        setDep("")
    }
    else{
        toast.error("Please Fill the form",3000)
    }
  };
  return (
    <Box>
    <Paper elevation={4} style={{width:"40%",margin:"auto",marginTop:"2em",padding:"2em"}}>
    <form onSubmit={handleSubmit}>
      <Grid container alignItems="center" justify="center" direction="column">
        <Grid style={{width:"100%"}}>
          <TextField
            fullWidth
            id="name-input"
            name="name"
            label="First Name"
            type="text"
            value={fname}
            onChange={(e)=>{setFname(e.target.value)}}
          />
        </Grid>
        <Grid style={{width:"100%"}}>
          <TextField
          fullWidth
            id="name-input"
            name="name"
            label="Last Name"
            type="text"
            value={lname}
            onChange={(e)=>{setLname(e.target.value)}}
          />
        </Grid>
        <Grid style={{width:"100%"}}>
          <TextField
          fullWidth
            id="name-input"
            name="name"
            label="Email"
            type="text"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
          />
        </Grid>
        <Grid style={{width:"100%"}}>
          <TextField
          fullWidth
            id="name-input"
            name="name"
            label="Address"
            type="text"
            value={loc}
            onChange={(e)=>{setLoc(e.target.value)}}
          />
        </Grid>
        <Grid style={{width:"100%"}}>
          <TextField
          fullWidth
            id="age-input"
            name="age"
            label="Phone Number"
            type="number"
            value={number}
            onChange={(e)=>{setNumber(e.target.value)}}
          />
        </Grid>
        <Grid style={{width:"100%" ,margin:"2em 0"}}>
          <FormControl fullWidth>
           {cardOptions.length &&<Select
              name="Department"
              value={dep}
              onChange={(e)=>{setDep(e.target.value)}}
            >
               {cardOptions && cardOptions.length &&cardOptions.map((card)=>
                <MenuItem key={card.value} value={card.value}>
                {card.label}
              </MenuItem>
               )}
            </Select>}
          </FormControl>
        </Grid>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Grid>
    </form>
    </Paper>
    <ToastContainer />
    </Box>
  );
};
export default ApplicationForm;