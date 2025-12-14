import React from "react";
import FormBuilder from "../components/form/FormBuilder";
import { signUpFormConfig } from "./formConfig";

const SignUpPage = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return <FormBuilder config={signUpFormConfig} onSubmit={handleSubmit} />;
};

export default SignUpPage;
