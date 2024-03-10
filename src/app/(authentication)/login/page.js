"use client";
import Link from "next/link";
import AuthSubmitButton from "@/components/AuthSubmitButton";
import useRedirectBack from "@/hooks/useRedirectBack";
import { useLoginMutation } from "@/redux/features/auth/authApiSlice";
import { setUserInfo } from "@/redux/features/auth/authSlice";
import "@scss/authentication.scss";
import clsx from "clsx";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";

function LoginPage() {
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const redirect = useRedirectBack();

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const response = await login(values).unwrap();
      setSubmitting(false);

      dispatch(setUserInfo(response.data));
      redirect();
    } catch (error) {
      console.log(error);
      setFieldError("password", error.data.message);
    }
  };

  return (
    <div className="auth_form-container">
      <Formik
        initialValues={{ phone: "", password: "" }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors }) => (
          <Form className="auth_form">
            <Field
              className={clsx(
                "auth_form-input",
                errors.phone && "auth_form-input--error"
              )}
              type="phone"
              name="phone"
              placeholder="Phone Number*"
            />
            <ErrorMessage
              className="auth_form-message auth_form-message--error"
              name="phone"
            />
            <Field
              className={clsx(
                "auth_form-input",
                errors.password && "auth_form-input--error"
              )}
              type="password"
              name="password"
              placeholder="Password*"
            />
            <ErrorMessage
              className="auth_form-message auth_form-message--error"
              name="password"
              component="p"
            />
            <AuthSubmitButton loading={isSubmitting}>Login</AuthSubmitButton>
          </Form>
        )}
      </Formik>
      <Link href="/" className="auth_form-message--forgot-password">
        Forgotten password?
      </Link>
      <div className="auth_form-seperator"></div>
      <Link href="/signup">
        <button className="btn btn-default-success btn-xl">
          Create new account
        </button>
      </Link>
    </div>
  );
}

export default LoginPage;
