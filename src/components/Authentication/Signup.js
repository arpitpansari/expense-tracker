import React ,{useRef,useState} from 'react'
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth}  from '../../Context/AuthContext';
import {Link,useHistory} from 'react-router-dom'
import CenteredContainer from "./CenteredContainer";

const Signup = () => {
    const [Error, SetError] = useState('');
    const [Loading, setLoading] = useState(false)
    const emailRef  = useRef();
    const userRef  = useRef();
    const PasswordRef  = useRef();
    const ConfirmPasswordRef  = useRef();
    const history = useHistory();
    const { signup } = useAuth();

 
    async function  handleSubmit(e) {
        
       
        e.preventDefault();
        
        if(PasswordRef.current.value !== ConfirmPasswordRef.current.value){
            SetError('Passwords Doesnt Match')
        }
        try{
             SetError("");
             setLoading(true);//here user can click on signup as it is true
            await signup(emailRef.current.value,PasswordRef.current.value)
            history.push('/');
        }
        catch(err){
          
            SetError('Oops!!! '+err.message);
           
        }
        setLoading(false);
    } 
    return (
        <CenteredContainer>
        <Card.Body>
            <h2 className="text-center mb-4 m-auto">Signup</h2>
            {Error && <Alert variant="danger" className="h-2 ">{Error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3  ">
               <Form.Label>UserName</Form.Label>
               <Form.Control type="text" ref={userRef} required />
               </Form.Group>
              
              <Form.Group className="mb-3  ">
               <Form.Label>Email Address</Form.Label>
               <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
            
              
              <Form.Group className='mb-3 ' Id = "Password">
                <Form.Label>Password</Form.Label>
               <Form.Control type="password" ref={PasswordRef} required />
              </Form.Group>
              <Form.Group className='mb-3 ' Id = "ConfirmPassword">
                <Form.Label>ConfirmPassword</Form.Label>
               <Form.Control type="password" ref={ConfirmPasswordRef} required />
              </Form.Group>
           
             <Button disabled={Loading} className="w-100"type="submit">
                Sign Up
              </Button>
               <Card.Body>
              <div className="w-100 text-center mt-2">
               Already have and account ? <Link to="/login">Login </Link>
               </div>{" "}
              </Card.Body>{" "}
              </Form>
           </Card.Body>
        </CenteredContainer>
    )
}

export default Signup
