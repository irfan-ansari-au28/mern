import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { register } from "../slices/auth";
import { clearMessage } from "../slices/message";

const Register = () => {
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .test(
        "len",
        "The username must be between 3 and 20 characters.",
        (val) =>
          val && val.toString().length >= 3 && val.toString().length <= 20
      )
      .required("This field is required!"),
    email: Yup.string()
      .email("This is not a valid email.")
      .required("This field is required!"),
    password: Yup.string()
      .test(
        "len",
        "The password must be between 6 and 40 characters.",
        (val) =>
          val && val.toString().length >= 6 && val.toString().length <= 40
      )
      .required("This field is required!"),
  });

  const handleRegister = (formValue) => {
    const { username, email, password } = formValue;

    setSuccessful(false);

    dispatch(register({ username, email, password }))
      .unwrap()
      .then(() => {
        setSuccessful(true);
      })
      .catch(() => {
        setSuccessful(false);
      });
  };

  return (
    <div>
      <div className="antialiased bg-slate-200">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleRegister}
        >
          <Form>
            {!successful && (
              <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
                <h1 className="text-4xl font-medium">Login</h1>
                <p className="text-slate-500">Hi, Welcome back 👋</p>

                <div className="my-5">
                  <button className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                    <img
                      src="https://www.svgrepo.com/show/355037/google.svg"
                      className="w-6 h-6"
                      alt=""
                    />{" "}
                    <span>Login with Google</span>
                  </button>
                </div>
                <div className="my-10">
                  <div className="flex flex-col space-y-5 my-5">
                    <label htmlFor="username">
                      <p className="font-medium text-slate-700 pb-2 ">Name</p>
                    </label>
                    <Field
                      name="username"
                      type="text"
                      className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                      placeholder="Name"
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="w-full text-red-500 px-3 focus:outline-none focus:border-red-400 hover:shadow"
                    />
                  </div>

                  <div className="flex flex-col space-y-5 my-5">
                    <label htmlFor="email">
                      <p className="font-medium text-slate-700 pb-2">Email</p>
                    </label>
                    <Field
                      name="email"
                      className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                      placeholder="Email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="w-full text-red-500 px-3 focus:outline-none focus:border-red-400 hover:shadow"
                    />
                  </div>

                  <div className="flex flex-col space-y-5 my-5">
                    <label htmlFor="password">
                      <p className="font-medium text-slate-700 pb-2">
                        Password
                      </p>
                    </label>
                    <Field
                      name="password"
                      type="password"
                      className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                      placeholder="Password"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="w-full text-red-500 px-3 focus:outline-none focus:border-red-400 hover:shadow"
                    />
                  </div>
                  <div className="flex flex-row justify-between">
                    <div>
                      <label htmlFor="remember" className="my-5">
                        <input
                          type="checkbox"
                          id="remember"
                          className="w-4 h-4 border-slate-200 focus:bg-indigo-600"
                        />
                        Remember me
                      </label>
                    </div>
                    <div>
                      <a href="#" className="font-medium text-indigo-600">
                        Forgot Password?
                      </a>
                    </div>
                  </div>

                  <div className="my-5">
                    <button
                      type="submit"
                      className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
                    >
                      Sign Up
                    </button>
                  </div>
                  <p className="text-center">
                    Not registered yet?{" "}
                    <a
                      href="#"
                      className="text-indigo-600 font-medium inline-flex space-x-1 items-center"
                    >
                      <span>Register now </span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            )}
          </Form>
        </Formik>
      </div>

      {message && (
        <div className="form-group">
          <div
            className={
              successful ? "alert alert-success" : "alert alert-danger"
            }
            role="alert"
          >
            {message}
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
