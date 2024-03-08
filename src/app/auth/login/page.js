"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import banner from "@public/auth-banner.svg";

import { useDispatch } from "react-redux";
import { useLoginMutation } from "@/redux/features/auth/authApiSlice";
import styles from "@scss/LoginPage.module.scss";
import clsx from "clsx";
import useFormInput from "@/hooks/useFormInput";
import { setUserInfo } from "@/redux/features/auth/authSlice";
import ClipLoader from "react-spinners/ClipLoader";

function LoginPage() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [phone, setPhone, phoneError, setPhoneError] = useFormInput("");
  const [password, setPassword, passwordError, setPasswordError] =
    useFormInput("");

  const [login, { isLoading, isError }] = useLoginMutation();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    if (!phone) {
      setPhoneError("Phone number is required");
      return;
    }

    if (!password) {
      setPasswordError("Password is required");
      return;
    }

    try {
      const response = await login({ phone, password });
      console.log(response);
      console.log(error);

      dispatch(setUserInfo(response.data.data));
      router.push("/");
    } catch (error) {
      console.log(error);
      setPasswordError(error.message);
    }
  };

  return (
    <div className={styles.container}>
      {/* Banner */}
      <div className={styles.banner}>
        <Image priority={true} src={banner} alt="banner" />
      </div>
      {/* Login Form */}
      <div className={styles.left}>
        <div className={styles.formContainer}>
          <form onSubmit={handleLoginSubmit} className="form">
            <input
              placeholder="Phone Number*"
              className={clsx("form-input", phoneError && "form-input-error")}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {phoneError && <p className="form-error">{phoneError}</p>}

            <input
              placeholder="Password*"
              className={clsx(
                "form-input",
                passwordError && "form-input-error"
              )}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p className="form-error">{passwordError}</p>}
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
          <Link href="/" className={styles.forgotPassword}>
            Forgotten password?
          </Link>
          <div className={styles.line}></div>
          <Link href="/auth/signup">
            <button className="btn btn-default-success btn-xl">
              Create new account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
