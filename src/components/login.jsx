import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

class Login extends Component {
  state = {};
  render() {
    return (
      <div className="container p-4">
        <h3>Login</h3>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(values);
              if (values.email === "test@domain.com") {
                if (values.password === "123456") {
                  localStorage.setItem("email", values.email);
                  localStorage.setItem("password", values.password);
                  setSubmitting(false);
                  window.location = "/products";
                }
              } else alert("invalid email or password");
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="email" name="email" className="form-control my-2" />
              <ErrorMessage
                name="email"
                component="div"
                // className="invalid-feedback"
              />
              <Field
                type="password"
                name="password"
                className="form-control my-2"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="invalid-feedback"
              />
              <button type="submit" className="btn btn-primary my-2">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default Login;
