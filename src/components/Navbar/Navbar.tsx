import Button from "@components/Button/Button";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div
      className={` flex fixed right-0 left-0 justify-between items-center bg-primaryWhite py-3 w-full mx-auto text-black px-[134px]  z-10 `}
    >
      <Link to={"/"}>
        <p className="text-primaryBlue font-bold text-4xl">B</p>
      </Link>
      <ul className="md:flex lg:space-x-14 lg:text-sm text-xs items-center space-x-5 hidden">
        <li>
          <Link to={"#"} className="hover:text-gray-400">
            About
          </Link>
        </li>
        <li>
          <Link to={"#"} className="hover:text-gray-400">
            Passions
          </Link>
        </li>
        <li>
          <Link to={"#"} className="hover:text-gray-400">
            Experience
          </Link>
        </li>
        <li>
          <Link to={"#"} className="hover:text-gray-400">
            Portfolio
          </Link>
        </li>
        <Button label="Contact me" className="hover:opacity-80" />
      </ul>
    </div>
  );
}
