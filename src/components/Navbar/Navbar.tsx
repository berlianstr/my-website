import Button from "@components/Button/Button";
import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";

export default function Navbar() {
  const [nav, setNav] = useState<boolean>(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className={` flex fixed right-0 left-0 justify-between items-center bg-secondaryWhite py-3 w-full mx-auto text-black lg:px-[134px] md:px-20 px-7  z-10 overflow-hidden`}
    >
      <Link to={"/"}>
        <p className="text-primaryBlue font-bold text-4xl">B</p>
      </Link>
      <ul className="md:flex lg:space-x-14 lg:text-sm text-xs items-center space-x-5 hidden">
        <li
          className="cursor-pointer hover:opacity-70"
          onClick={() =>
            scroller.scrollTo("passions", {
              duration: 1200,
              delay: 50,
              smooth: true,
              // containerId: "ContainerElementID",
              offset: -150, // Scrolls to element + 50 pixels down the page
            })
          }
        >
          Passions
        </li>
        <li
          className="cursor-pointer hover:opacity-70"
          onClick={() =>
            scroller.scrollTo("experience", {
              duration: 1200,
              delay: 50,
              smooth: true,
              // containerId: "ContainerElementID",
              offset: -150, // Scrolls to element + 50 pixels down the page
            })
          }
        >
          Experience
        </li>
        <li
          className="cursor-pointer hover:opacity-70"
          onClick={() =>
            scroller.scrollTo("portfolio", {
              duration: 1200,
              delay: 50,
              smooth: true,
              // containerId: "ContainerElementID",
              offset: -150, // Scrolls to element + 50 pixels down the page
            })
          }
        >
          Portfolio
        </li>
        <Button
          onClick={() =>
            scroller.scrollTo("contact", {
              duration: 1200,
              delay: 50,
              smooth: true,
              // containerId: "ContainerElementID",
              offset: -150, // Scrolls to element + 50 pixels down the page
            })
          }
          label="Contact me"
          className=""
        />
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        <MenuIcon size={24} className="cursor-pointer" />
      </div>
      <div
        className={
          nav
            ? `fixed left-0 top-0 w-full px-4 h-[215px]]  bg-white border-r border-r-gray-900 ease-in-out duration-500 md:hidden overflow-scroll pb-10`
            : "fixed left-[-100%] top-0 ease-in-out duration-100"
        }
      >
        <div className=" flex justify-between mt-10 items-center">
          <Link to={"/"}>
            <p className="text-primaryBlue font-bold text-4xl">B</p>
          </Link>
          <XIcon size={24} className="cursor-pointer" onClick={handleNav} />
        </div>
        <ul className="p-4  text-sm mt-3 space-y-5 font-semibold">
          <li
            className={`" text-gray-500" hover:text-gray-400`}
            onClick={() => {
              scroller.scrollTo("passions", {
                duration: 1500,
                delay: 100,
                smooth: true,
                // containerId: "ContainerElementID",
                offset: -150, // Scrolls to element + 50 pixels down the page
              });
              handleNav();
            }}
          >
            Passions
          </li>
          <li
            className={`" text-gray-500" hover:text-gray-400`}
            onClick={() => {
              scroller.scrollTo("experience", {
                duration: 1200,
                delay: 50,
                smooth: true,
                // containerId: "ContainerElementID",
                offset: -150, // Scrolls to element + 50 pixels down the page
              });
              handleNav();
            }}
          >
            Experience
          </li>
          <li
            className={`" text-gray-500" hover:text-gray-400`}
            onClick={() => {
              scroller.scrollTo("portfolio", {
                duration: 1200,
                delay: 50,
                smooth: true,
                // containerId: "ContainerElementID",
                offset: -150, // Scrolls to element + 50 pixels down the page
              });
              handleNav();
            }}
          >
            Portfolio
          </li>
          <Button
            onClick={() => {
              scroller.scrollTo("contact", {
                duration: 1200,
                delay: 50,
                smooth: true,
                // containerId: "ContainerElementID",
                offset: -150, // Scrolls to element + 50 pixels down the page
              });
              handleNav();
            }}
            label="Contact me"
            className=""
          />
        </ul>
      </div>
    </div>
  );
}
