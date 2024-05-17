import { React, useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Form, Button, Card, Alert } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";
import { GoogleSignupSVG } from "../components/Svgs";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    if (passwordRef.current.value.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return;
    } else {
      setPasswordError("");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <div className="signup d-flex gap-5 align-items-center">
      <div className="signup-img">
        <img src="/images/signup-img.jpeg" alt="sign up" />
      </div>
      <Card className="signup-content" style={{ border: "none" }}>
        <Card.Body>
          <h2 className="form-title mb-2">Create an account</h2>
          <p className="form-subtitle mb-4">Enter your details below</p>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                id="text"
                type="text"
                required
                className="custom-input"
                placeholder="Name"
              />
            </Form.Group>
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
            <Form.Group className="mt-3">
              <Form.Control
                id="password-confirm"
                type="password"
                ref={passwordConfirmRef}
                required
                className="custom-input"
                placeholder="Confirm Password"
              />
            </Form.Group>
            {passwordError && <Alert variant="danger">{passwordError}</Alert>}
            <Button
              disabled={loading}
              className="signup-btn mt-3"
              type="submit"
            >
              Create Account
            </Button>
          </Form>
          <div className="signup-google d-flex gap-3 mt-4">
            <img
              width="30px"
              height="30px"
              src="/images/google-icon.png"
              alt="google icon"
            />
            <p>Sign up with google</p>
          </div>
          <div className="login-ques text-center mt-4">
            Already have an account? <Link to="/login">Log In</Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
