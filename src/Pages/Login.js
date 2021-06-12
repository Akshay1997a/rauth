import React, { useEffect } from "react";
import { Formik } from "formik";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import * as Yup from "yup";
import useAuth from "../Hooks/useAuth";
import { useHistory, useLocation } from "react-router-dom";

function Login() {
  const { signIn } = useAuth();
  const history = useHistory();
  const { state } = useLocation();
  console.log(useLocation());
  const validation = () => {
    return Yup.object().shape({
      email: Yup.string().email().required("Email is required!"),
      password: Yup.string().required("Password is required!").min(8),
    });
  };

  const onSubmit = ({ email, password }) => {
    const { from } = state || { from: "/home" };
    signIn(email, password, (status) => {
      if (status) {
        history.push(from);
      } else {
        alert("Invalid!");
      }
    });
  };

  return (
    <FormContainer>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validation}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          ...rest
        }) => {
          console.log(rest);
          return (
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <ErrorMessage>
                  {errors.email && touched.email && errors.email}
                </ErrorMessage>
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <ErrorMessage>
                  {errors.password && touched.password && errors.password}
                </ErrorMessage>
              </Form.Group>

              <Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  style={{ marginTop: 15 }}
                  disabled={isSubmitting}
                >
                  Submit
                </Button>
              </Form.Group>
            </Form>
          );
        }}
      </Formik>
    </FormContainer>
  );
}

export default Login;

const FormContainer = styled.div`
  text-align: start;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 10 10;
  box-shadow: 3px 10px 36px 4px rgba(134, 134, 134, 0.78);
  -webkit-box-shadow: 3px 10px 36px 4px rgba(134, 134, 134, 0.78);
  -moz-box-shadow: 3px 10px 36px 4px rgba(134, 134, 134, 0.78);
`;

const ErrorMessage = styled.span`
  color: red;
`;
