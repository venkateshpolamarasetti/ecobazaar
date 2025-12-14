import React from "react";
import LoginPage from "./forms/LoginPage";
import SignUpPage from "./forms/SignUpPage";
import SearchBar from "./components/UI/SearchBar";
import Newsletter from "./components/UI/Newsletter";

const App = () => {
  return (
    <div className="container">
      <SearchBar />
      <Newsletter />
      <LoginPage />
      <SignUpPage />
    </div>
  );
};
export default App;
