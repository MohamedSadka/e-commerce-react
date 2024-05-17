
import { useRef, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


const ForgotPassword = () => {
  const emailRef = useRef();
  
  const { resetPassword } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("check your inbox to get a new password");
    } catch {
      setError('Failed to reset password');
    }
    setLoading(false);
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Reset Password</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control type="email" id="email" ref={emailRef}/>
            </Form.Group>
            

            <Button variant="primary" type="submit" className="w-100 mt-3" disabled={loading}>Reset Password</Button>
          </Form>
          <div className="w-100 mt-2 text-center" > Already have an Account ? <Link to='/login'>Log In</Link></div>
        </Card.Body>
      </Card>
      <div className="w-100 mt-2 text-center" > Need an Account ? <Link to='/signup'>Sign Up</Link></div>
    </>
  );
};

export default ForgotPassword;
