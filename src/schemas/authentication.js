import { object, string } from "yup";

export const loginSchema = object({
  phone: string().required("Please enter your phone number"),
  password: string().required("Please enter your password"),
});

export const signUpSchema = object({
  name: string().required("Please enter your name"),
  phone: string().required("Please enter your phone number"),
  email: string()
    .email("Invalid email format")
    .required("Please enter your email"),
  password: string()
    .min(8, "Password must have at least 8 characters")
    .required("Please enter your password"),
});
