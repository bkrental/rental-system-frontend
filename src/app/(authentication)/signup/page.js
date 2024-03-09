"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import styles from "@scss/AuthenticationPage.module.scss";
import { useSignupMutation } from "@/redux/features/auth/authApiSlice";
import { setUserInfo } from "@/redux/features/auth/authSlice";
import AuthFormInput from "@/components/AuthFormInput";
import AuthSubmitButton from "@/components/AuthSubmitButton";

const EMPTY_FORM_DATA = { name: "", phone: "", email: "", password: "" };
const PLACEHOLDERS = {
  name: "Enter your name*",
  phone: "Phone Number*",
  email: "Email*",
  password: "Password*",
};

const ERROR_MESSAGES = {
  name: "Please enter your name",
  phone: "Phone number is required",
  email: "Email is required",
  password: "Password is required",
};

export default function SignUpPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [signup, { isLoading }] = useSignupMutation();

  const [formData, setFormData] = useState(EMPTY_FORM_DATA);
  const [errors, setErrors] = useState(EMPTY_FORM_DATA);

  useEffect(() => {
    setErrors(EMPTY_FORM_DATA);
  }, [formData]);

  const handleSignup = async (e) => {
    e.preventDefault();

    for (const key in formData) {
      if (!formData[key]) {
        setErrors({ ...errors, [key]: ERROR_MESSAGES[key] });
        return;
      }
    }

    try {
      const response = await signup(formData).unwrap();
      dispatch(setUserInfo(response.data));
      router.push("/");
    } catch (error) {
      console.log(error);
      setErrors({ ...errors, password: error.data.message });
    }
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSignup} className="form">
        {Object.keys(formData).map((key) => (
          <AuthFormInput
            key={key}
            placeholder={PLACEHOLDERS[key]}
            value={formData[key]}
            onChange={(e) =>
              setFormData({ ...formData, [key]: e.target.value })
            }
            error={errors[key]}
          />
        ))}

        <AuthSubmitButton loading={isLoading}>Sign Up</AuthSubmitButton>
      </form>

      <p>
        Already have an account <Link href="/login">Login</Link>
      </p>
    </div>
  );
}
