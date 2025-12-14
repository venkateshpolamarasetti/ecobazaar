export const loginFormConfig = {
  initialValues: {
    email: "",
    password: "",
  },

  validationSchema: {
    email: ["required", "email"],
    password: [
      "required",
      "min:6",
      "uppercase",
      "lowercase",
      "numeric",
      "special",
    ],
  },

  fields: [
    {
      name: "email",
      label: "",
      type: "text",
      placeholder: "Email",
      getWarning: (value) => {
        const allowedDomains = [
          "gmail.com",
          "outlook.com",
          "hotmail.com",
          "live.com",
          "yahoo.com",
          "icloud.com",
          "me.com",
          "mac.com",
          "mail.com",
          "zohomail.com",
          "zoho.com",
        ];
        if (value && !allowedDomains.some((domain) => value.includes(domain))) {
          return "Please use a Gmail, Microsoft, Apple, Yahoo, or Mail address";
        }

        return null;
      },
    },
    {
      name: "password",
      label: "",
      type: "password",
      placeholder: "Password",
      getWarning: (value) => {
        if (value && value.length < 10) {
          return "Recommendation: Use at least 10 characters for better security";
        }
        return null;
      },
    },
  ],

  formTitle: "Sign In",

  submitText: "Login",
};

export const signUpFormConfig = {
  initialValues: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  },

  validationSchema: {
    firstName: ["required"],
    lastName: ["required"],
    email: ["required", "email"],
    password: [
      "required",
      "min:6",
      "uppercase",
      "lowercase",
      "numeric",
      "special",
    ],
    confirmPassword: ["required", "min:6", "match:password"],
  },

  fields: [
    {
      name: "firstName",
      label: "",
      type: "text",
      placeholder: "First Name",
    },
    {
      name: "lastName",
      label: "",
      type: "text",
      placeholder: "Last Name",
    },
    {
      name: "email",
      label: "",
      type: "text",
      placeholder: "Email",
      getWarning: (value) => {
        const allowedDomains = [
          "gmail.com",
          "outlook.com",
          "hotmail.com",
          "live.com",
          "yahoo.com",
          "icloud.com",
          "me.com",
          "mac.com",
          "mail.com",
          "zohomail.com",
          "zoho.com",
        ];
        if (value && !allowedDomains.some((domain) => value.includes(domain))) {
          return "Please use a Gmail, Microsoft, Apple, Yahoo, or Mail address";
        }

        return null;
      },
    },
    {
      name: "password",
      label: "",
      type: "password",
      placeholder: "Password",
      getWarning: (value) => {
        if (value && value.length < 10) {
          return "Recommendation: Use at least 10 characters for better security";
        }
        return null;
      },
    },
    {
      name: "confirmPassword",
      label: "",
      type: "password",
      placeholder: "Confirm Password",
      getWarning: (value) => {
        if (value && value.length < 10) {
          return "Recommendation: Use at least 10 characters for better security";
        }
        return null;
      },
    },
  ],

  formTitle: "Create Account",

  submitText: "Create Account",
};

export const searchFormConfig = {
  layout: "row",
  initialValues: {
    search: "",
  },

  validationSchema: {
    search: [""],
  },

  fields: [
    {
      name: "search",
      label: "",
      type: "text",
      placeholder: "Search",
    },
  ],

  purpose: "row",

  submitText: "Search",
};

export const newsletterFormConfig = {
  layout: "row",
  initialValues: {
    email: "",
  },

  validationSchema: {
    email: ["required", "email"],
  },

  fields: [
    {
      name: "email",
      label: "",
      type: "text",
      placeholder: "Your email address",
      getWarning: (value) => {
        const allowedDomains = [
          "gmail.com",
          "outlook.com",
          "hotmail.com",
          "live.com",
          "yahoo.com",
          "icloud.com",
          "me.com",
          "mac.com",
          "mail.com",
          "zohomail.com",
          "zoho.com",
        ];
        if (value && !allowedDomains.some((domain) => value.includes(domain))) {
          return "Please use a Gmail, Microsoft, Apple, Yahoo, or Mail address";
        }

        return null;
      },
    },
  ],

  purpose: "row",

  submitText: "Subscribe",
};
