import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../css/form.css';
import axios from 'axios';
import { base_url } from '../../App';
import { Link } from 'react-router-dom';

function Signup() {
  const initialValues = {
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password1: '',
    password2: '',
    role: '',
    highest_qualification: '',
    store_name: '',
  };

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required('First Name is required'),
    last_name: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    username: Yup.string().required('Username is required'),
    password1: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    password2: Yup.string()
      .oneOf([Yup.ref('password1'), null], 'Passwords must match')
      .required('Confirm Password is required'),
    role: Yup.string().required('Role is required'),
    highest_qualification: Yup.string().required('Highest Qualification is required'),
    store_name: Yup.string().required('Library or Institute name is required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission here, e.g., make an API request to create a new user.
    axios
      .post(base_url + 'create-account/', values, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.status);
        window.location.href = '/';
      })
      .catch((error) => {
        console.log(error);
      });
    setSubmitting(false);
  };

  return (
    <div className="form-cover">
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form className="form-page" method="post">
          <h1>Sign Up</h1>
          <div className="mb-3">
            <label htmlFor="first_name">First Name*</label>
            <Field type="text" id="first_name" name="first_name" />
            <ErrorMessage name="first_name" component="div" className="error" />
          </div>
          <div className="mb-3">
            <label htmlFor="last_name">Last Name*</label>
            <Field type="text" id="last_name" name="last_name" />
            <ErrorMessage name="last_name" component="div" className="error" />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email*</label>
            <Field type="email" id="email" name="email" placeholder="Enter email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div className="mb-3">
            <label htmlFor="username">Username*</label>
            <Field type="text" id="username" name="username" placeholder="Enter username" />
            <ErrorMessage name="username" component="div" className="error" />
          </div>
          <div className="mb-3">
            <label htmlFor="password1">Password*</label>
            <Field type="password" id="password1" name="password1" placeholder="Password" />
            <ErrorMessage name="password1" component="div" className="error" />
          </div>
          <div className="mb-3">
            <label htmlFor="password2">Confirm Password*</label>
            <Field type="password" id="password2" name="password2" placeholder="Re-enter password" />
            <ErrorMessage name="password2" component="div" className="error" />
          </div>
          <div className="mb-3">
            <label htmlFor="role">Account Role as*</label>
            <Field type="text" id="role" name="role" placeholder="Type Librarian or Customer" />
            <ErrorMessage name="role" component="div" className="error" />
          </div>
          <div className="mb-4">
            <label htmlFor="highest_qualification">Highest Qualification*</label>
            <Field
              type="text"
              id="highest_qualification"
              name="highest_qualification"
              placeholder="Eg: 12th, BSc etc.."
            />
            <ErrorMessage name="highest_qualification" component="div" className="error" />
          </div>
          <div className="mb-3">
            <label htmlFor="store_name">Library or Institute name*</label>
            <Field type="text" id="store_name" name="store_name" />
            <ErrorMessage name="store_name" component="div" className="error" />
          </div>
          <div className="buttonDiv">
            <button className="btn darkButton" type="submit">
              Submit
            </button>{' '}
            &nbsp;
            <Link to="/login/" className="btn darkButton">
              <i className="fa-solid fa-circle-arrow-right"></i> Log In
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default React.memo(Signup);
