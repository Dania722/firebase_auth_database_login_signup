import { Button } from "@mui/material";
import CircularIndeterminate from "./progress";

export default function Buttons (props){
    const {label , onClick , loading , disabled  } = props
    const btnstyle = {
        margin: "8px 80px",
        Padding: "100px",
        top: 10,
        marginBottom: "50px",
        backgroundColor: "green"
      };

    return (
        <>
        <Button  sx={{ width: "32ch" }}
         disabled={disabled || loading} 
        onClick = {onClick}  
        variant ="contained"
        style={btnstyle}
        >
        {loading && <CircularIndeterminate/>  } {label}
       </Button>
        </>
    )
}

           