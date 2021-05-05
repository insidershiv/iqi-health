import React from "react";
import SignUp from "../../components/auth/signUp";
import Footer from "../../components/misc/footer";
import Main from "./main";
import Header from "../../components/misc/header";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
