import React from "react";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { ToastContainer } from "react-toastify";

const HomeLayouts = () => {
  return (
    <div className="md:max-w-[1100px] mx-auto md:px-5">
      <header>
        <Header></Header>
      </header>
      <main className="min-h-screen ">
        <Outlet></Outlet>
      </main>
      <section>{/* <Extra></Extra> */}</section>
      <footer>
        <Footer></Footer>
      </footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default HomeLayouts;
