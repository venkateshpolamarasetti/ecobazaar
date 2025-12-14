import * as Yup from "yup";

export const buildYupSchema = (rules) => {
  const shape = {};

  Object.keys(rules).forEach((field) => {
    let validator = Yup.string();

    rules[field].forEach((rule) => {
      if (rule === "required") {
        validator = validator.required("Required");
      }
      if (rule === "email") {
        validator = validator.email("Invalid email");
      }
      if (rule === "uppercase") {
        validator = validator.matches(
          /[A-Z]/,
          "Must contain an uppercase letter"
        );
      }
      if (rule === "lowercase") {
        validator = validator.matches(
          /[a-z]/,
          "Must contain a lowercase letter"
        );
      }
      if (rule === "numeric") {
        validator = validator.matches(/[0-9]/, "Must contain a number");
      }
      if (rule === "special") {
        validator = validator.matches(
          /[^a-zA-Z0-9]/,
          "Must contain a special character"
        );
      }
      if (rule.startsWith("min")) {
        const min = rule.split(":")[1];
        validator = validator.min(min, `Minimum ${min} characters`);
      }
      if (rule.startsWith("match")) {
        const matchField = rule.split(":")[1];
        validator = validator.oneOf(
          [Yup.ref(matchField), null],
          "Passwords must match"
        );
      }
    });

    shape[field] = validator;
  });

  return Yup.object().shape(shape);
};
