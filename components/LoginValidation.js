import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please Enter a valid email")
    .required("Email is required"),
  Password: yup
    .string()
    .min(6)
    .matches(
      passwordRules,
      "Password should be more than 6 \nMust contain Uppercase \nMust contain Lowercase \nMust contain a number"
    )
    .required("Password is required"),
});
