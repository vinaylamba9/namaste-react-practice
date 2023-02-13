import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {

  const {user} = useContext(UserContext)

  return <h4 className="text-center py-10 text-white font-semibold text-lg bg-cyan-400">This site is developed by: {user.email}</h4>;
};

export default Footer;
