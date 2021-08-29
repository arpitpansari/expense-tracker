import React,{useState,useEffect} from 'react'
import { TextField,Typography,Grid,Button,FormControl,InputLabel,Select,MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {Card,CardContent } from "@material-ui/core";
import { useAuth}  from '../../../../Context/AuthContext';
import { useTrans }  from '../../../../Context/TransContext';
import {v4 as uuidv4 } from 'uuid';
import { incomeCategories,expenseCategories} from '../../../constants/categories'
import formatDate from '../../../constants/formatDate';
import { useSpeechContext} from '@speechly/react-client'
import {useHistory} from 'react-router-dom'
import MyBar from '../Snackbar2';



const useStyles = makeStyles((theme) => ({
     
   radioGroup:{
      
      display:'flex',
      justifyContent:'center',
      marginBottom:'-10px',
   },
   button:{
       marginTop:'20px',

   },

}));


const InitialState = {

  amount:"",
  category:"",
  type:'Expense',
  date: formatDate(new Date()),
  
}

const UpdateForm = () => {

    const classes = useStyles();
    const { AddTransaction,UpdateTransaction,Spells} = useTrans();
    const {CurrentUser} = useAuth();
    const [FormData, setFormData] = useState(InitialState)
    const { segment } = useSpeechContext();
    const [open, setOpen] = useState(false);
    let history = useHistory();

    const createTransaction =() => {

      if(Number.isNaN(Number(FormData.amount)) || !FormData.date.includes('-')) return ;
        var id = Spells.data().id;
        const transaction = {  ...FormData,amount:Number(FormData.amount),id}
        
      
        UpdateTransaction(transaction,id);
        setOpen(true);
        
        setFormData(InitialState)
    }

 
    
    const selectedcategories = FormData.type === 'Income' ? incomeCategories : expenseCategories;


    return (
         <Card className={classes.root}  elevation={20}>
         <MyBar open={open} setOpen={setOpen} />
             <CardContent>
               
            
        <Grid container spacing={2}>
          
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Type</InputLabel>
                <Select value={FormData.type} onChange={ (e) => setFormData({...FormData,type:e.target.value})}> 
                  <MenuItem value="Income">Income</MenuItem>
                  <MenuItem value="Expense">Expense</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select value={FormData.category} onChange={ (e) => setFormData({...FormData,category:e.target.value})}> 
                  {selectedcategories.map((c) => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField type="number" label="Amount" fullWidth  value={FormData.amount}  onChange={ (e) => setFormData({...FormData,amount:e.target.value})}/>
            </Grid>
            <Grid item xs={6}>
              <TextField type="date" label="Date" fullWidth value={FormData.date} onChange={ (e) => setFormData({...FormData,date: formatDate(e.target.value)})}/>
            </Grid>
            <Button variant="contained" color="secondary" className={classes.button} fullWidth onClick={createTransaction} >Update</Button>
        </Grid>
        </CardContent>
        </Card>
    )
}

export default UpdateForm
