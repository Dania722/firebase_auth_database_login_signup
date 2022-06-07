import React  from   "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import  {Avatar}  from "@mui/material";
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Link } from "@mui/material";
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {loginUser} from "../config/firebase/firebasemthod";
import Buttons from "../componenet/button";





const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  
const Login = (props) => {
    const paperstyle ={Padding:20 , width:'500px' ,margin:"25px auto" }
    const avatrastyle={backgroundColor :'green' , bottom:'20px' }
    const heading = {fontweight:'bold' , marginTop: "-20px" }
    // const btnstyle={marginTop:'-10px' , Padding:'10px'}
    const txt = { bottom:'15px'  }
    const check = { margin:"auto 80px" }
    const signin = {margin:"15px 10px 0 0 " }
    const forgot = {margin:"-35px 0px  10px 195px  " }

    const [userObj, setUserObj] = useState({});
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();
   

    const LoginUser = () => {
      //     navigate(`/login`);
  if(!userObj.email){
      return alert("Email is required ! ") ;
  }
  if(!userObj.password || userObj.password.length < 6 ){
      return alert ( "Pasword is required ! and it should more than 6 characters ! ");
  }
  setLoader(true);
      // console.log(userObj);
      loginUser(userObj) . 
      then ((success) => {
        setLoader(false);
          console.log(success);
          alert("Successfully login   ! ")
          navigate(`/${success.user.uid}`);
      }) .catch((err)=>{
        setLoader(false);
          console.log(err);
          console.log("Error occur");
  
      }) ;
   };


  

    

    return (



          <Grid>
<Paper  align = 'center' elevation={10} style={paperstyle}>
    <Grid align = 'center'>
    <Avatar sx={{ width: 66, height: 66 }}  style={avatrastyle} >  <ManageAccountsOutlinedIcon/> </Avatar>
   <h2 style={heading}>Sign In</h2>
    </Grid  >
    <TextField 
 
sx={{ width: "32ch" }}
placeholder="Enter your email address  *"
id="standard-basic"
variant="standard"
       style={txt} 
       required={true}
      //  value = {name}
       onChange={(e) =>
        setUserObj({ ...userObj, email: e.target.value })
      }  />





      <TextField 
           required={true}
           sx={{ width: "32ch" }}
           label="Password"
           placeholder="password *"
           type="password"
           id="standard-basic"
           variant="standard"
           onChange={(e) =>
             setUserObj({ ...userObj, password: e.target.value })
           }
           //value={password} onChange={(e) => setPassword(e.target.value)}
           style={txt}
           />


                <div class="form-inline">
                   
<FormGroup style={check}>
<FormControlLabel 
 control={<Checkbox unChecked />} 
 label ="Remember me " />
</FormGroup>
<Typography   style={forgot} >
     <Link href="#" >
        Forgot password
</Link>
</Typography> 
  </div>

{/* <Button  
sx={{ width: '32ch' }} 
 type='submit' 
 color='success' 
  variant="contained"
   style={btnstyle}
  //  onClick={Signin}
   > 
   Sign in
   </Button> */}



   <Box>
              <Buttons
               sx={{ width: "32ch" }}
              //  style={btnstyle}
                loading = {loader}
                onClick={LoginUser}
                
                label = "Sign Up  " >   
            </Buttons>
            </Box>

<Typography  style={signin}> Do you have an account ?
     <Link href="/signup">
        Sign Up 
</Link>
</Typography>


</Paper>
</Grid>
    )
}
export default Login;

















