import React, { Component } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import forms from "../Css/forms.css"
import { Button, Paper, Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
export default class Contact extends Component {
  state = {
    name: "",
    message: "",
    email: "",
    subject: "",
    sent: false,
    buttonText: "Send Message",
    emailError: false,
  };



  
  resetForm = () => {
    this.setState({
      name: "",
      message: "",
      email: "",
      subject: "",
      buttonText: "Message Sent",
    });

    setTimeout(() => {
      this.setState({ sent: false });
    }, 3000);
  };

  handleChangeEmail(e) {
    if (
      !e.target.value.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      this.setState({
        email: e.target.value,
      });
      this.setState({ emailError: true });

      if (this.state.email === "") {
        // check if the input is empty
        this.setState({ emailError: false });
      }
    } else {
      this.setState({ email: e.target.value, emailError: false });
    }
  }

  formSubmit = async (e) => {
    e.preventDefault();
    
    toast.success("Email Sent will get back to you shortly",3000)
    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
      subject: this.state.subject,
    };

    try {
      this.setState({ sent: true }, this.resetForm());
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div className="row1">
<Typography><h1>Contact Us</h1> </Typography>

<Grid container>
     <Grid item xs={6}> 
     <Typography><h4>Need to get in touch with us?Either fill out the form
with your inquiry or find the department email you'd
like to contact below.</h4></Typography>
<div>
<Grid container sx={{ color: "text.primary" }} >
<Grid item xs={1}>
        <HomeOutlinedIcon />
      </Grid>
      <Grid item xs={4}>
        <Typography>Address: Beirut, Lebanon</Typography>
      </Grid>
    </Grid>

    <Grid container sx={{ color: "text.primary" }} >
<Grid item xs={1}>
        <ContactPhoneOutlinedIcon />
      </Grid>
      <Grid item xs={5}>
        <Typography>Phonenumber: +961123123</Typography>
      </Grid>
    </Grid>
    <Grid container sx={{ color: "text.primary" }} >
<Grid item xs={1}>
        <EmailOutlinedIcon />
      </Grid>
      <Grid item xs={5}>
        <Typography>Email: info@jobseekers.com</Typography>
      </Grid>
    </Grid>
    
    </div>
    <br></br>
<img src={"media/about1.jpg"} className='banner2'  alt="about1" />
     </Grid>
     <Grid item xs={6}>
     <Paper elevation={4} style={{width:"40%",margin:"auto",marginTop:"2em",padding:"2em"}}>
     <form className="contact-form" onSubmit={(e) => this.formSubmit(e)}>
      <TextField
        id="standard-multiline-flexible"
        label="Subject"
        placeholder="Enter Subject"
        variant="outlined"
        multiline
        rowsMax={4}
        value={this.state.message}
        onChange={(e) => this.setState({ message: e.target.value })}
        required
        type="text"
      />
      <br />
      <br />
      <br />

      <TextField
        id="outlined-basic"
        placeholder="Enter your name"
        label="Name"
        variant="outlined"
        value={this.state.name}
        onChange={(e) => this.setState({ name: e.target.value })}
        required
        type="text"
      />
      <br />
      <br />
      <br />

      <TextField
        id="outlined-basic"
        label="Email"
        placeholder="Enter email address"
        variant="outlined"
        value={this.state.email}
        onChange={(e) => this.handleChangeEmail(e)}
        error={this.state.emailError}
        required
        type="email"
      />
      <br />
      <br />
      <br />
      <TextField
        id="outlined-basic"
        placeholder="Enter Message"
        label="Message"
        variant="outlined"
        value={this.state.subject}
        onChange={(e) => this.setState({ subject: e.target.value })}
        required
      />
      <br />
      <br />
      <br />
      <div className="button--container">
        <Button type="submit" color="primary" variant="contained"> {this.state.buttonText}</Button>
      </div>
    </form>
</Paper>

     </Grid>
</Grid>




      <ToastContainer/>
    </div>
    );
  }
}