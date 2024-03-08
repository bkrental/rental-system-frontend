"use client";
import clsx from "clsx";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import banner from "@public/auth-banner.svg";
import { useDispatch } from "react-redux";
import styles from "@scss/AuthenticationPage.module.scss";
import { useSignupMutation } from "@/redux/features/auth/authApiSlice";
import { setUserInfo } from "@/redux/features/auth/authSlice";
import ClipLoader from "react-spinners/ClipLoader";

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
    <div className="container flex-center">
      <div className={styles.banner}>
        <Image priority={true} src={banner} alt="banner" />
      </div>

      <div className={styles.right}>
        <div className={styles.formContainer}>
          <form onSubmit={handleSignup} className="form">
            {Object.keys(formData).map((key) => (
              <>
                <input
                  key={key}
                  placeholder={PLACEHOLDERS[key]}
                  className={clsx(
                    "form-input",
                    errors[key] && "form-input-error"
                  )}
                  value={formData[key]}
                  onChange={(e) =>
                    setFormData({ ...formData, [key]: e.target.value })
                  }
                />
                {errors[key] && <p className="form-error">{errors[key]}</p>}
              </>
            ))}

            <button
              className={clsx(
                "btn btn-full btn-xl mt-16",
                isLoading && "btn-default-secondary"
              )}
              type="submit"
            >
              {isLoading ? (
                <ClipLoader loading={isLoading} color="#fff" size={20} />
              ) : (
                "Login"
              )}
            </button>
          </form>

          <p>
            Already have an account <Link href="/auth/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
