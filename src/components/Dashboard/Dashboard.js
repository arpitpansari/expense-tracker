import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Info from '../Dashboard/Info';
import Main from '../Dashboard/Main/Main';
import Form from '../Dashboard/Main/Form/Form';
import Box from '@material-ui/core/Box';
import { PushToTalkButton,PushToTalkButtonContainer,ErrorPanel} from '@speechly/react-ui'





const useStyles = makeStyles((theme) => ({


     
       desktop: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  mobile: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
       padding: '5rem',
    },
  },
  main: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '5%',
    },
  },
  last: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3),
      paddingBottom: '200px',
    },
  },
  grid: {
    '& > *': {
      margin: theme.spacing(4),
      
    },
  },
}));

const Dashboard = () => {

     const classes = useStyles();
    
    return (

        <div>
         <Grid className={classes.grid} container spacing={2} alignItems="center"  spacing={2}  style={{ height:'100vh' ,width:'100%'}}>
            <Grid item xs={15} sm={4}>
            <PushToTalkButtonContainer>
                <PushToTalkButton/>
                <ErrorPanel/>
              </PushToTalkButtonContainer>
              <Main/>
              
             </Grid>
           <Grid item xs={10} sm={3} >
              <Info title="Income"/>
           </Grid>
            <Grid item xs={10} sm={3}>
              <Info title="Expense"/>
           </Grid>
         </Grid>
        </div>
       
    )
}

export default Dashboard 
