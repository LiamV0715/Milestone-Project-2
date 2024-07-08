import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Pets Website!</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/home">Home</Link> |{" "}
        <Link to="/gallery">Gallery</Link> |{" "}
        <Link to="/addapet">Add a Pet</Link> 
      </nav>
      <Outlet />
    </div>
  );
}