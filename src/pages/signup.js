import {Grid,Paper, Avatar,Typography,TextField,Box,Radio,RadioGroup,FormControl,FormControlLabel,FormLabel,} from "@mui/material";
import React, { useState } from "react";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { useNavigate } from "react-router-dom";
import {signupUser} from "../config/firebase/firebasemthod";
import Buttons from "../componenet/button";
import sendData from "../config/firebase/firebasedatabase";

const Signup = () => {
  const paperstyle = {
    Padding: "30px 20px",
    width: "500px",
    margin: "20px auto",
  };
  const heading = { fontweight: "bold", margin: "-10px 0 0 0" };
  const avatrastyle = { backgroundColor: "green", bottom: "20px" };
  const txt = { top: "3px" };
  const btnstyle = {
    margin: "8px 80px",
    Padding: "100px",
    top: 10,
    marginBottom: "50px",
    backgroundColor: "green"
  };
  const radio = { right: 115, bottom: -10 };
  const gp = { display: "inline", margin: "5px 0 -12px 0 " };

  const [userObj, setUserObj] = useState({});
  const [loader, setLoader] = useState(false);

  //    const navigate = useNavigate();
  const navigate = useNavigate();
  const SignupUser = () => {


if(!userObj.email){
    return alert("Email is required ! ") ;
}
if(!userObj.password || userObj.password.length < 6 ){
    return alert ( "Pasword is required ! and it should more than 6 characters ! ");
}
setLoader(true);
    // console.log(userObj);
    signupUser(userObj) . 
    then ((res) => {
      setLoader(false);
        console.log(res);
        sendData(userObj , "users" , res.user.uid) 
        . then (()=>{
          console.log("Data saved ! ");
        })
        alert("Successfully signup ! ")
        navigate(`/login`);
    }) .catch((err)=>{
      setLoader(false);
        console.log(err);
        console.log("Error occur");

    }) ;
 };
  return (
    <>
      <Grid>
        <Paper elevation={10} style={paperstyle}>
          <Grid align="center">
            <Avatar sx={{ width: 66, height: 66 }} style={avatrastyle}>
              {" "}
              <HowToRegIcon />{" "}
            </Avatar>
            <h2 style={heading}>Sign Up</h2>
            <Typography variant="caption">
              Please fill this form to register yourself !{" "}
            </Typography>
          </Grid>
            <TextField
              sx={{ width: "32ch" }}
              label="Name"
              placeholder="name *"
              // required = "true "
              id="standard-basic"
              variant="standard"
              style={txt}
            />

            <TextField
              sx={{ width: "32ch" }}
              label="email"
              // required = "true "
              placeholder="email *"
              id="standard-basic"
              variant="standard"
              onChange={(e) =>
                setUserObj({ ...userObj, email: e.target.value })
              }
              style={txt}
            />

            <TextField
              sx={{ width: "32ch" }}
              label="Phone no"
              placeholder="contact *"
              id="standard-basic"
              //required = "true "
              variant="standard"
              type="number"
              style={txt}
            />

            <FormControl component="fieldset">
              <FormLabel component="legend" style={radio}>
                Gender
              </FormLabel>
              <RadioGroup
                aria-labelledby="gender"
                name="gender"
                style={gp}
                // value={gender} onChange={(e) => setGender(e.target.value)}
              >
                <FormControlLabel
                  value="Female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="Male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="Other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
            <TextField
              sx={{ width: "32ch" }}
              label="Password"
              placeholder="password *"
              type="password"
              // required = "true "
              id="standard-basic"
              variant="standard"
              onChange={(e) =>
                setUserObj({ ...userObj, password: e.target.value })
              }
              //value={password} onChange={(e) => setPassword(e.target.value)}
              style={txt}
            />
            <TextField
              sx={{ width: "32ch" }}
              label="Confirm Password"
              //  required = "true "
              placeholder="re-type password *"
              type="password"
              id="standard-basic"
              variant="standard"
              style={txt}
            />

            {/*     
        <FormGroup style={check} >
    <FormControlLabel   control={<Checkbox unchecked = "true" /> } 
    label ="I accept all the term & conditions." />
    </FormGroup> */}
            {/* <Button
            disabled = {disabled || loader }
              sx={{ width: "32ch" }}
              type="submit"
              color="success"
              variant="contained"
              style={btnstyle}
              onClick={SignupUser}
             // loading = {loader}   
            >
              {" "}
              Sign in{" "}
            </Button> */}

            <Box>
              <Buttons
               sx={{ width: "32ch" }}
               style={btnstyle}
                loading = {loader}
                onClick={SignupUser}
                
                label = "Sign Up  " >   
            </Buttons>
            </Box>

            {/* <Typography  style={signin}> Already Signup ?
         <Link to="/Login" >
            Sign In 
    </Link>
    </Typography> */}
        </Paper>
      </Grid>
    </>
  );
};
export default Signup;
