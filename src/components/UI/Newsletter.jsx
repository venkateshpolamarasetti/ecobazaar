import React from "react";
import FormBuilder from "../form/FormBuilder";
import { newsletterFormConfig } from "../../forms/formConfig";

const Newsletter = () => {
  const handleSubmit = (values) => {
    console.log("Subscribed:", values);
  };

  return <FormBuilder config={newsletterFormConfig} onSubmit={handleSubmit} />;
};

export default Newsletter;
