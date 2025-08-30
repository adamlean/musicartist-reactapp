import NavBar from "../components/NavBar";
import "./HomeLayout.css";

function HomeLayout({ children }) {
  return (
    <div className="home-layout">
      <NavBar />
      <main>{children}</main>
    </div>
  );
}

export default HomeLayout;
