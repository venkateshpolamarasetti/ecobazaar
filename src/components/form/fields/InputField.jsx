import { useState } from "react";
import CheckIcon from "../../../assets/icons/check.svg?react";
import ErrorIcon from "../../../assets/icons/error.svg?react";
import WarningIcon from "../../../assets/icons/warning.svg?react";
import EyeIcon from "../../../assets/icons/visibility-icon.svg?react";
import EyeOffIcon from "../../../assets/icons/eye-off.svg?react";
import SearchIcon from "../../../assets/icons/search.svg?react";
import EmailIcon from "../../../assets/icons/email.svg?react";
import "../styles/InputField.css";
import { useField } from "formik";

//this input field component is used to create input fields like text, email, password, tel, url, search etc in the form
const InputField = ({ label, getWarning, formId, ...props }) => {
  const [field, meta] = useField(props);
  const [showPassword, setShowPassword] = useState(false);

  const uniqueId = formId ? `${formId}-${props.name}` : props.name;

  const isPassword = props.type === "password";
  const inputType = isPassword
    ? showPassword
      ? "text"
      : "password"
    : props.type;

  const isError = meta.touched && meta.error;
  const isSuccess =
    meta.touched && !meta.error && field.value && props.name !== "search";

  const warningMessage =
    meta.touched && field.value && !isError && getWarning
      ? getWarning(field.value)
      : null;

  const isWarning = !!warningMessage;

  let inputClass = "";
  if (isError) inputClass = "input-error";
  else if (isWarning) inputClass = "input-warning";
  else if (isSuccess) inputClass = "input-success";

  let wrapperClass = "input-wrapper";
  if (isPassword) wrapperClass += " password-field";

  let PrefixIcon = null;
  if (props.name === "search") PrefixIcon = SearchIcon;
  if (props.name === "email" && props.placeholder === "Your email address")
    PrefixIcon = EmailIcon;

  if (PrefixIcon) wrapperClass += " has-prefix-icon";

  return (
    <div className="form-control">
      {label && (
        <label htmlFor={uniqueId} className="field-label">
          {label}
        </label>
      )}

      <div className={wrapperClass}>
        {PrefixIcon && <PrefixIcon className="prefix-icon" />}
        <input
          {...field}
          {...props}
          type={inputType}
          className={`${inputClass}`}
          id={uniqueId}
        />

        {isPassword && (
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        )}

        {isError ? (
          <ErrorIcon className="status-icon icon-error" />
        ) : isWarning ? (
          <WarningIcon className="status-icon icon-warning" />
        ) : (
          isSuccess && <CheckIcon className="status-icon icon-success" />
        )}
      </div>

      {isError ? (
        <div className="error-message">{meta.error}</div>
      ) : (
        isWarning && <div className="warning-message">{warningMessage}</div>
      )}
    </div>
  );
};

export default InputField;
