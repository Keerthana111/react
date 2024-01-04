import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";

//Link is a superpower given by the react-router-dom which refreshes the components but doesnot refresh the whole page ---> This makes react super fast

//Note : And therefore the usuage of the Link results -->  React is called as single page application

//Usage of anchor tag will result in refreshing of the whole page which is unnecessary

const Header = () => {
  const [btnReactName, setBtnReactName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  //console.log(loggedInUser);

  //Selector - is a hook we are subscribing to the store using the selector
  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);

  return (
    <div className="flex justify-between bg-orange-300 shadow-lg">
      <div className="logo-container">
        <img className="w-24 p-4" src={LOGO_URL} alt="Image not found" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-3">Online Status:{onlineStatus ? "✅" : "🛑"}</li>
          <li className="px-3">
            <Link to="/"> Home </Link>
          </li>
          <li className="px-3">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-3">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-3 font-bold text-xl">
          <Link to="/cart">Cart-({cartItems.length} items)</Link>
          </li>
          <button
            className="px-3 border border-black"
            onClick={() => {
              btnReactName === "Login"
                ? setBtnReactName("Logout")
                : setBtnReactName("Login");
            }}
          >
            {btnReactName}
          </button>
          <li className="font-semibold px-3">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
