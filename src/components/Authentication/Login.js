import React ,{useRef,useState} from 'react'
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth}  from '../../Context/AuthContext';
import {Link,useHistory} from 'react-router-dom'
import CenteredContainer from "./CenteredContainer";




const Login = () => {
    const [Error, SetError] = useState('');
    const [Loading, setLoading] = useState(false)
    const emailRef  = useRef();
    const PasswordRef  = useRef();
    const history = useHistory();
     
    const { login , googlesignin} = useAuth();

 
    async function  handleSubmit(e) {
        
       
        e.preventDefault();
        
        try{
            SetError("");
              setLoading(true);
            await login(emailRef.current.value,PasswordRef.current.value)
            history.push('/');
        }
        catch(err){
          
            SetError("I'm Afraid! " +err.message);
            
        }
        setLoading(false);
    }



    async function handlegoogle(e){

        e.preventDefault();
        try{
            SetError("");
            setLoading(true);
            await googlesignin();
            history.push('/');
        }
        catch(err){
          
            SetError("I'm Afraid! " +err.message);
            
        }
        setLoading(false);
    }
    return (

        <CenteredContainer>
        
        <Card.Body>
            <h2 className="text-center mb-4 m-auto">Login</h2>
             {Error && <Alert variant="danger" className="h-2 ">{Error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3  ">
               <Form.Label>Email Address</Form.Label>
               <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
            
              
              <Form.Group className='mb-3 ' Id = "Password">
                <Form.Label>Password</Form.Label>
               <Form.Control type="password" ref={PasswordRef} required />
              </Form.Group>
             
           
              <Button disabled={Loading} className="w-100" type="submit">
                Login
              </Button>
             
               <Card.Body>
               <div className="w-100 text-center mt-2">
                Dont remember your Password? <Link to="/reset">Reset</Link>
               </div>
              <div className="w-100 text-center mt-2">
               Is it Your First time Here ? <Link to="/signup">Signup</Link>
               </div>{" "}
              </Card.Body>
              </Form>
               <Button disabled={Loading} variant="light" size="sm"  type="submit" onClick={handlegoogle}>
                <img className= " w-50 h-50" src="https://cdn.dribbble.com/users/1717214/screenshots/4124610/g-logo.gif" alt="google logo" />
              </Button>
           </Card.Body>
        </CenteredContainer>
       
    )
}

export default Login
