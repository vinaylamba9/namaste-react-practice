import { useContext, useState } from "react";
import Logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

// SPA - Single Page Application???
// Client Side Routing

const Title = () => (
  <a href="/">
    <img className="h-28 px-2" alt="logo" src={Logo} />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();
  const { user } = useContext(UserContext)

  return (
    <div className="flex justify-between bg-cyan-500 text-white shadow-lg">
      <Title />
      <div className="flex items-center">
        <ul className="flex">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>

          <Link to="/about">
            <li className="px-2">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-2">Contact</li>
          </Link>
          <li className="px-2">Cart</li>
          <Link to="/instamart">
            <li className="px-2">Instamart</li>
          </Link>
        </ul>
      </div>
      <h1 className="flex items-center">{isOnline ? "✅" : "🔴"}</h1>
      {isLoggedIn ? (
        <button className="mr-5 font-bold" onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button className="mr-5 font-bold" onClick={() => setIsLoggedIn(true)}>{user.name}</button>
      )}
    </div>
  );
};

export default Header;
