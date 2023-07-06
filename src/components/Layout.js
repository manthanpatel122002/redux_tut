import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <Header>
      <main className="App">
        <Outlet />
      </main>
    </Header>
  );
}
export default Layout;
