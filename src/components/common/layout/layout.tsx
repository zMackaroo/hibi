import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";
import "./layout.css";

function Layout() {
  return (
    <div className="layout">
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
