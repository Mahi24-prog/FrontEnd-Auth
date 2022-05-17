import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="App">
      <ul className="nav-list">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/product">
          <li>Product</li>
        </Link>
        <Link to="/cart">
          <li>Cart</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
      </ul>
    </div>
  );
}
