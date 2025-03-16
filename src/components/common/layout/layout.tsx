import { Outlet } from "react-router-dom";
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
