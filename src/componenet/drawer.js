import * as React   from 'react';
import PropTypes from 'prop-types';
import {AppBar , Box , CssBaseline , Divider , Drawer , IconButton , List , ListItem , ListItemButton , ListItemText
 , ListItemIcon   } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SpeedIcon from '@mui/icons-material/Speed';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate  } from 'react-router-dom';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import { logoutUser } from '../config/firebase/firebasemthod';

//import "./app.css";
const drawerWidth = 240;
const style = {marginLeft:"35px"}



function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

const [username, setUsername] = useState("");
const [userObj, setUserObj] = useState({});
const obj = {username};
const navigate = useNavigate();
const dashboard= () =>{
  navigate(`/dashboard/${username}`, {state: obj});
  }

//   function signout (){
//     setError('')
//     try{
//         await logoutUser()
//         history.push('/ogin')
//     }
//     catch {
// setError('Failed to logout')
//     }
//   }
const LogoutUser =() => {
logoutUser(userObj).
then(()=>{
  console.log("logout successfully !")
  navigate(`/Login`)
}) .catch ((err)=>{
  console.log("error in logout  !")
})
}



  const drawer = (
      <div className='toolbar'>
      <Toolbar sx={{backgroundColor:"#1976d2"}}/>
      <Divider />
      <List>
        {['Dashboard'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
            <ListItemIcon className='listIcon' sx={{color:"black"}}>
                {<SpeedIcon  fontSize='medium'/>}
              </ListItemIcon>
              <ListItemText primary={text}  onClick={dashboard}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        {['Accounting'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
            <ListItemIcon className='listIcon' sx={{color:"black"}}>
                {<AccountBalanceWalletIcon  fontSize='medium'/>}
              </ListItemIcon>
              <ListItemText primary={text}  />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        {['Analysis'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
            <ListItemIcon className='listIcon' sx={{color:"black"}}>
                {<StackedBarChartIcon  fontSize='medium'/>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        {['Messages'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
            <ListItemIcon className='listIcon' sx={{color:"black"}}>
                {<MailIcon  fontSize='medium'/>}
              </ListItemIcon>
              <ListItemText primary={text}  />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        {['Profile'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
            <ListItemIcon className='listIcon'sx={{color:"black"}}>
                {<PersonIcon  fontSize='medium'/>}
              </ListItemIcon>
              <ListItemText primary={text}   />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        {['Project'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
            <ListItemIcon className='listIcon' sx={{color:"black"}}>
                {<AccountTreeIcon fontSize='medium'/>}
              </ListItemIcon>
              <ListItemText primary={text}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Signout'].map((text, index) => (
          <ListItem key={text} disablePadding>
          <ListItemButton>
          <ListItemIcon className='listIcon' sx={{color:"black"}}>
              {<ExitToAppIcon fontSize='medium'/>}
            </ListItemIcon>
            <ListItemText 
            primary={text} 
            onClick={LogoutUser}
              />
          </ListItemButton>
        </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Nested Routing
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {/* <Typography variant="h2">Dashboard</Typography>
        <AccountCircleIcon fontSize='large' />    < Profile  /> */}

        {/* <div className='profile'>
       
       <div className='user'>
          <Typography variant='h2'>
          Dashboard
          <Typography>
          < Profile  />
          <AccountCircleIcon fontSize='large'/>         

          </Typography>
        </Typography>
        
        </div>
        </div>  */}



<Grid container direction="row" alignItems="center">
  {/* <Grid >
<Typography variant='h6'> Dashboard</Typography>
  </Grid> */}
  <Grid container direction="row" alignItems="center">
  <Grid >
  <AccountCircleIcon fontSize='large' /> 
  </Grid>
  <Grid container direction="row" alignItems="center">
    <Grid>
    <Typography style={style}>
      Check your activites in your dashboard 
    </Typography>
    </Grid>
  </Grid>
</Grid>
</Grid>
     
      </Box>
      
    </Box>



  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;



