import React from "react";

const HomeLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <nav>Navbar</nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export default HomeLayout;
