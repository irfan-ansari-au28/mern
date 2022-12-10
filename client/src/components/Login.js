import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { login } from "../slices/auth";
import { clearMessage } from "../slices/message";

const Login = () => {
  //   let navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("This is not a valid email.")
      .required("This field is required!"),
    password: Yup.string().required("This field is required!"),
  });

  const handleLogin = (formValue) => {
    const { email, password } = formValue;
    setLoading(true);

    dispatch(login({ email, password }))
      .unwrap()
      .then(() => {
        // navigate("/");
        // window.location.reload();
        alert("logged in successfully");
      })
      .catch(() => {
        setLoading(false);
      });
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <div className="antialiased bg-slate-200">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          <Form>
            <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
              <h1 className="text-4xl font-medium">Login</h1>
              <p className="text-slate-500">Hi, Welcome back 👋</p>
              <div className="flex flex-col space-y-5 my-5">
                <label htmlFor="email">
                  <p className="font-medium text-slate-700 pb-2">Email</p>
                </label>
                <Field
                  name="email"
                  type="email"
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
                  <p className="font-medium text-slate-700 pb-2">Password</p>
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

              <div className="my-5">
                <button
                  type="submit"
                  className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
                  disabled={loading}
                >
                  {loading && <span>loading...</span>}
                  Login
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>

      {message && (
        <div className="form-group">
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
