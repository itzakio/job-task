import Footer from "@/components/modules/home/Footer";
import Navbar from "@/components/modules/home/Navbar";
import React from "react";

const HomeLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-base-100">
      <header>
        <Navbar />
      </header>
      <main className="flex-1">{children}</main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
