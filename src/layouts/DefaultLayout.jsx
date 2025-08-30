import NavBar from "../components/NavBar";
import "./DefaultLayout.css";

function DefaultLayout({ children }) {
  return (
    <div className="default-layout">
      <NavBar />
      <main>{children}</main>
    </div>
  );
}

export default DefaultLayout;
