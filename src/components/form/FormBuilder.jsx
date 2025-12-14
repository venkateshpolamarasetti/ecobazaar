import { Formik, Form } from "formik";
import FormField from "./FormField.jsx";
import { buildYupSchema } from "./FormUtils.js";
import "./styles/FormBuilder.css";
import Button from "../UI/Button.jsx";
import CheckBox from "../UI/CheckBox.jsx";

const FormBuilder = ({ config, onSubmit }) => {
  const validationSchema = buildYupSchema(config.validationSchema);

  const formId = config.formTitle?.toLowerCase().replace(/\s+/g, "-");
  const layoutClass =
    config.layout === "row" ? "form-container row-layout" : "form-container";

  return (
    <Formik
      initialValues={config.initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form className={layoutClass}>
          {config.formTitle && (
            <h2 className="form-title">{config.formTitle}</h2>
          )}
          {config.fields.map((field) => (
            <FormField key={field.name} field={field} formId={formId} />
          ))}

          {config.formTitle === "Sign In" && (
            <div className="form-helper">
              <CheckBox variant={"default"} label={"Remember me"} />
              <p className="forget-password">Forget password?</p>
            </div>
          )}

          {config.formTitle === "Create Account" && (
            <div className="form-helper">
              <CheckBox
                variant={"default"}
                label={"Accept Terms and Conditions"}
              />
            </div>
          )}

          <Button
            label={config.submitText || "Submit"}
            variant={"primary"}
            type="submit"
            size={"medium"}
            purpose={config.purpose === "row" ? "row" : null}
          />

          {config.formTitle === "Sign In" && (
            <p className="form-helper register">
              Don't have an account? <a href="#">Register</a>
            </p>
          )}

          {config.formTitle === "Create Account" && (
            <p className="form-helper register">
              Already have an account? <a href="#">Login</a>
            </p>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default FormBuilder;
