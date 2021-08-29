import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
   
     
  }));

const MySnackbar = ({open,setOpen}) => {

   const handleClose =(event,reason) => {

       if( reason ==='ClickAway')
       {
           return;
       }
       setOpen(false);

   }

    const classes = useStyles();
    return (
        <div >
            <Snackbar anchorOrigin={{vertical:'Top',horizontal:'center'}}
               open={open}
               autoHideDuration={3000}
               onClose={handleClose}>
              <MuiAlert onClose={handleClose}  severity="success" elevation={6} variant="filled">
                Transaction Created 
              </MuiAlert>
            </Snackbar>
        </div>
    )
}

export default MySnackbar
