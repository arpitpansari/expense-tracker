import React ,{useRef,useState} from 'react'
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth}  from '../../Context/AuthContext';
import {Link} from 'react-router-dom'
import CenteredContainer from "./CenteredContainer";

const ForgotPassword = () => {
    const [Error, SetError] = useState('');
    const [Message,SetMessage] = useState('');
    const [Loading, setLoading] = useState(false)
    const emailRef  = useRef();
   
    
     
    const { resetemail } = useAuth();

 
    async function  handleSubmit(e) {
        
       
        e.preventDefault();
        
        try{
            
            await resetemail(emailRef.current.value)
        }
        catch(err){
          
            SetError("I'm Afraid! " +err.message);
            
        }
    }
    return (
         <CenteredContainer>
        <Card.Body>
            <h2 className="text-center mb-4 m-auto">Forgot Password</h2>
             {Error && <Alert variant="danger" className="h-2 w-50">{Error}</Alert>}
             {Message && <Alert variant="success" className="h-2 w-50">{Message}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3  ">
               <Form.Label>Email Address</Form.Label>
               <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
            
              <Button disabled={Loading} className="w-100"type="submit">
                Get reset link
              </Button>
               <Card.Body>
              <div className="w-100 text-center mt-2">
               Done with reset ? <Link to="/login">Login</Link>
               </div>
              <div className="w-100 text-center mt-2">
               Need a new Account ? <Link to="/signup">Signup</Link>
               </div>
              </Card.Body>
              </Form>
           </Card.Body>
        </CenteredContainer>
    )
}

export default ForgotPassword
