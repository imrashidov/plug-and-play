import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().required(),
  surname: yup.string().required(),
  email: yup
    .string()
    .email("Please enter a valid e-mail address")
    .required("Please enter an e-mail address"),
  number: yup
    .number()
    .test("len", "Must be between 9 and 16 digits", (val) => {
      if (!val) return true;
      const length = val.toString().length;
      return length >= 9 && length <= 16;
    })
    .required()
    .positive()
    .integer(),
  password: yup
    .string()
    .required("Please enter your password")
    .min(6, "Password must have at least 6 characters")
    .matches(/[0-9]/, { message: "Please enter at least 1 number" }),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords does not match")
    .required("Please enter your password again"),
  gender: yup.string().required().oneOf(["Male", "Female", "Other"]),
  privacyPolicy: yup.boolean().oneOf([true], "Please accept Privacy Policy"),
});
