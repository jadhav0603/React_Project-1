import "./Navbar.css";
import logo from "../images/logo/logo1.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHeart,
  faBagShopping,
  faPercent,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {useContext , useState, useEffect} from "react";
import {SelectedOptionContext} from '../components/SelectedOptionContext'

const Links = [
  {
    to:"/"
  },
  {
    to: "/sugarPlay",
    label: "SUGAR PLAY",
  },
  {
    to: "/lips",
    label: "LIPS",
  },
  {
    to: "/eyes",
    label: "EYES",
  },
  {
    to: "/face",
    label: "FACE",
  },
  {
    to: "/nails",
    label: "NAILS",
  },
  {
    to: "/skincare",
    label: "SKINCARE",
  },
  {
    to: "/accessories",
    label: "ACCESSORIES",
  },
  {
    to: "/gifting",
    label: "GIFTING",
  },
  {
    to: "/bestseller",
    label: "BESTSELLERS",
  },
  {
    to: "/newLaunches",
    label: "NEW LAUNCHES",
  },
  {
    to: "/offers",
    label: "OFFERS",
  },
  {
    to: "/blog",
    label: "BLOG",
  },
];



function Navbar() {

  //const{login} = useContext(SelectedOptionContext);

  const [login,setLogin] = useState(true)

  useEffect(()=>{

    let data = localStorage.getItem('flag')
    setLogin(data)
 
  },[])


  console.log(login)
  return (
    <div id="navContainer">
      <div id="navSearchBar">
      <Link to={Links[0].to}>
        <img src={logo} alt="Logo" />
        </Link>
        <div id="inputTags">
          <input
            type="text"
            id="searchInput"
            placeholder='Try "Liquid Lipstick"'
          />
          <button
            type="button"
            id="searchBtn"
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "nowrap",
            }}
          >
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ marginRight: "10px" }}
            />
            Search
          </button>
        </div>
        <div id="loginRegister">
          <FontAwesomeIcon icon={faUser} />
          <a href="/src/Login.html" >
            {(login) ? "Login/Register" : "Logout"}
          </a>
        </div>
        <div id="shopIcons">
          <FontAwesomeIcon
            icon={faHeart}
            style={{ color: "white", padding: "10px" }}
          />
          <FontAwesomeIcon
            icon={faBagShopping}
            style={{ color: "white", padding: "10px" }}
          />
          <FontAwesomeIcon
            icon={faPercent}
            style={{ color: "white", padding: "10px" }}
          />
        </div>
      </div>

      <div id="navLinks">
        {Links.map((ele) => (
          <Link 
            key={ele.to} 
            to={ele.to} 
            className="pages"
          >
            {ele.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
