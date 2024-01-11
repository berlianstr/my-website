import Contact from "@components/Contact";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";

export default function Footer() {
  return (
    <footer className="overflow-hidden">
      <div className="footer-top">
        <Contact />
      </div>
      <div className="lg:p-[134px] md:p-20 p-7 bg-textBlue h-auto w-full">
        <div className="grid  md:grid-cols-2 grid-cols-1 items-center">
          <div>
            <Link to={"/"}>
              <p className="text-secondaryWhite font-bold text-4xl">B</p>
            </Link>
            <p className="text-sm  text-gray-300 mt-7">
              © 2024 B. All Rights Reserved
            </p>
          </div>
          <div className="flex md:justify-evenly justify-start md:space-x-0 md:mt-auto mt-4 space-x-4">
            <div className="space-y-4 flex flex-col">
              <p className="text-secondaryWhite font-bold">Information</p>
              <a
                onClick={() =>
                  scroller.scrollTo("passions", {
                    duration: 1200,
                    delay: 50,
                    smooth: true,
                    // containerId: "ContainerElementID",
                    offset: -150, // Scrolls to element + 50 pixels down the page
                  })
                }
                className="text-secondaryWhite cursor-pointer"
              >
                Additional Passions
              </a>
              <a
                onClick={() =>
                  scroller.scrollTo("experience", {
                    duration: 1200,
                    delay: 50,
                    smooth: true,
                    // containerId: "ContainerElementID",
                    offset: -150, // Scrolls to element + 50 pixels down the page
                  })
                }
                className="text-secondaryWhite cursor-pointer"
              >
                Experience
              </a>
              <a
                onClick={() =>
                  scroller.scrollTo("portfolio", {
                    duration: 1200,
                    delay: 50,
                    smooth: true,
                    // containerId: "ContainerElementID",
                    offset: -150, // Scrolls to element + 50 pixels down the page
                  })
                }
                className="text-secondaryWhite cursor-pointer"
              >
                Portfolio
              </a>
            </div>
            <div className="space-y-4 flex flex-col">
              <p className="text-secondaryWhite font-bold">Follow me</p>
              <a
                href="https://www.linkedin.com/in/berliangymnastiar/"
                className="text-secondaryWhite"
              >
                LinkedIn
              </a>
              <a
                href="https://www.facebook.com/briliant.briliant.121772/"
                className="text-secondaryWhite"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/berlianstr"
                className="text-secondaryWhite"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
