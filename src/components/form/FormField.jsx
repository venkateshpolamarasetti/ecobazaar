import InputField from "./fields/InputField";
// import SelectField from "./fields/SelectField";
// import CheckboxField from "./fields/CheckboxField";
// import TextAreaField from "./fields/TextAreaField";

const fieldMap = {
  text: InputField,
  password: InputField,
  email: InputField,
  // select: SelectField,
  // checkbox: CheckboxField,
  // textarea: TextAreaField,
};

const FormField = ({ field, formId }) => {
  const Component = fieldMap[field.type];
  if (!Component) return null;

  return <Component {...field} formId={formId} />;
};

export default FormField;
