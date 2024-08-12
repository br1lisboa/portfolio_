import Link from "next/link";

import { VARIANTS } from "@/app/constants/variants";
import { NavbarButton } from "./components/NavbarButton";
import { ButtonDownloadCV } from "./components/ButtonDownloadCV";

export const navLinks = [
  { title: "About", path: "#about" },
  { title: "Portfolio", path: "#portfolio" },
];

export function NavBar() {
  return (
    <div className={`${VARIANTS.color_text} pt-6`}>
      <div className="hidden md:flex items-center px-4 py-2 mx-auto max-w-[600px]">
        <ul className="flex flex-row p-4 gap-8 justify-between w-full items-center">
          {navLinks.map(({ title, path }) => (
            <li key={path}>
              <Link href={path}>
                <p color="white">{title}</p>
              </Link>
            </li>
          ))}

          <li>
            <Link href="#contact" className="group">
              <h1
                className={`text-lg font-bold ${VARIANTS.color_text} cursor-pointer`}
              >
                Contact Me
              </h1>
              <div className="relative">
                <div
                  className={`absolute w-2/3 h-1 transition-all duration-300 ease-out ${VARIANTS.bg_orange_soft} rounded-full group-hover-:w-full`}
                >
                  <div
                    className={`mt-1 absolute w-2/3 h-1 transition-all duration-300 ease-out ${VARIANTS.bg_orange_hard} rounded-full group-hover-:w-full`}
                  ></div>
                </div>
              </div>
            </Link>
          </li>

          <ButtonDownloadCV />
        </ul>
      </div>

      <NavbarButton />
    </div>
  );
}
