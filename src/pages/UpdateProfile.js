import { useRef, useState } from "react";
import { Alert, Card, Form,Button } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordError , setPasswordError] = useState("");
  const { currentUser, updateUserEmail, updateUserPassword } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const navigate = useNavigate();
  

  function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    if (passwordRef.current.value.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      return;
    } else {
      setPasswordError('');
    }

    const promises = [];
    setLoading(true);

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateUserEmail(emailRef.current.value))
    }

    if (passwordRef.current.value !== currentUser.password) {
      promises.push(updateUserPassword(passwordRef.current.value))
    }

    Promise.all(promises).then(()=> {
      navigate("/");
    }).catch(()=> {
      setError("failed to update account info")
    }).finally(() => {
      setLoading(false)
    })

  }
  return (
    <>
      <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Sign Up</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              id="email"
              type="email"
              ref={emailRef}
              required
              defaultValue={currentUser?.email}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
              id="password"
              type="password"
              ref={passwordRef}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="password-confirm">
              Password Confirmation
            </Form.Label>
            <Form.Control
              id="password-confirm"
              type="password"
              ref={passwordConfirmRef}
              required
            />
          </Form.Group>
          {passwordError && <Alert variant="danger">{passwordError}</Alert>}

          <Button disabled={loading} className="w-100 mt-3" type="submit">
            Update
          </Button>
        </Form>
      </Card.Body>
    </Card>
    <div className="w-100 text-center mt-3">
      <Link to="/">Cancel</Link>
    </div>
    </>
  );
};

export default UpdateProfile;
