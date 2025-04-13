import { <index className="css"></index> } from "react-router-dom";
import "./index.css";

const Nav = () => {
  return (
    <nav className="nav">
      <ul style={{ display: "flex", gap: "1rem", margin: 0, padding: 0 }}>
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/candidates"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Potential Candidates
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
