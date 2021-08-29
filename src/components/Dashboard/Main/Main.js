import React,{useState} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import {Grid,Card,CardContent,Typography,Divider,Button }from "@material-ui/core";
import { CardHeader} from "@material-ui/core";
import Form from '../Main/Form/Form'
import List from '../Main/TransList/List';
import { useTrans }  from '../../../Context/TransContext';
import { useAuth}  from '../../../Context/AuthContext';
import { Link } from "react-router-dom";
import NightsStayIcon from '@material-ui/icons/NightsStay';

const useStyles = makeStyles((theme) => ({
     
    root:{
       
       height:'40 rem',
    },
  cartContent: {
    paddingTop: 0,
  },
  divider: {
    margin: '20px 0',
  },
  btn:{
    textDecoration:'none',
     marginRight: '2rem',
  }
  }));


const Main = () => {
    const classes = useStyles();
    const { balance } = useTrans();
   const { logout } = useAuth();
    const [Loading, setLoading] = useState(false);



   async function handleSubmit(e) {

       e.preventDefault();
      
      try{
             setLoading(true);
            await logout()
            
        }
        catch(err){
          
           
            console.log(err.message)
        }
        setLoading(false);


   }




    return (
      
        <Card className={classes.root} elevation={20}>
          
            <CardHeader title="Expense Tracker" subheader="Made by Arpit" />
            
             <CardContent>
             
               <Typography align="center" variant="h5">BALANCE: {balance}Rs </Typography>
               <Typography align="center" variant="subtitle2" style={{ lineHeight:'1.5rem',marginTop:'10px',marginBottom: '20px'}}>
                 Try Saying: Add Income/Expense for 7000Rs in Category Salary for Monday...
                 </Typography>
                <Divider/> 
                <Form/>
             </CardContent>
             <CardContent  className={classes.cardContent} >
              
               <Grid container spacing={2}>
                   <Grid item xs={12}>
                      <List />
                   </Grid>
                   
                   <Link to="/all" style={{ textDecoration: 'none'}}>
                    <Button className = {classes.btn} variant="outlined" color="primary" >  View All</Button>
                    </Link>
                    <Button variant="contained" color="secondary" onClick={handleSubmit}>LogOut</Button>
               </Grid>
             </CardContent>
               
              
            
        </Card>
    )
}

export default Main
