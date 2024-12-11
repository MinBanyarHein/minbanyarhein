import logo from "../assets/Min.svg"
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";

const Navbar = () => {
  return (
    
      <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 item-center">
        <img src={logo} alt="logo" />
        
      </div>
      <div className="m-8 flex item-center justy-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/min-banyar-hein-91645a214/"><FaLinkedin /></a>
        <a href="https://github.com/MinBanyarHein"><FaGithub /></a>
        <FaInstagram />
      </div>
      </nav>
  )
}

export default Navbar
 