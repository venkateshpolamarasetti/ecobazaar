import FormBuilder from "../components/form/FormBuilder";
import { loginFormConfig } from "./formConfig";

const LoginPage = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return <FormBuilder config={loginFormConfig} onSubmit={handleSubmit} />;
};

export default LoginPage;
