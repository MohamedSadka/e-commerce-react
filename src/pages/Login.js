import { Alert, Button, Card, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useRef, useState } from "react";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const rediredtPath = location.state?.path || "/";

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate(rediredtPath, { replace: true });
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }
  return (
    <div className="login d-flex gap-5 align-items-center">
      <div className="login-img">
        <img src="/images/signup-img.jpeg" alt="sign up" />
      </div>
      <Card style={{ border: "none" , width: "370px"}}>
        <Card.Body>
          <h2 className="form-title mb-2">Log in to Exclusive</h2>
          <p className="form-subtitle mb-4">Enter your details below</p>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                id="email"
                type="email"
                ref={emailRef}
                required
                className="custom-input"
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                id="password"
                type="password"
                ref={passwordRef}
                required
                className="custom-input"
                placeholder="Password"
              />
            </Form.Group>

            <div className="bottom-content mt-4 d-flex gap-3 align-items-center justify-content-between">
              <Button
                disabled={loading}
                className="login-btn"
                type="submit"
              >
                Login
              </Button>
              <Link className="forgot-link" to="/forgot-password">Forgot Password?</Link>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
