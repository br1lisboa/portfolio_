"use client";

import { useState } from "react";

import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import { VARIANTS } from "@/app/constants/variants";
import Link from "next/link";
import { navLinks } from "../NavBar";
import { ButtonDownloadCV } from "./ButtonDownloadCV";

const MENU_VARIANTS = {
  open: {
    x: 0,
    transition: {
      stiffness: 20,
      damping: 15,
    },
  },
  closed: {
    x: "-100%",
    transition: {
      stiffness: 20,
      damping: 15,
    },
  },
};

export function NavbarButton() {
  const [nav, setNav] = useState(false);

  function toggleNav() {
    setNav(!nav);
  }

  function closeNav() {
    setNav(false);
  }

  return (
    <>
      <button
        onClick={toggleNav}
        className={`md:hidden  fixed top-5 right-5 border rounded ${VARIANTS.color_text} ${VARIANTS.border_white} p-1 z-20`}
      >
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </button>

      <motion.div
        initial={false}
        animate={nav ? "open" : "closed"}
        variants={MENU_VARIANTS}
        className={`md:hidden fixed left-0 top-0 w-full z-10 ${VARIANTS.bg_black_hard}`}
      >
        <ul className="text-4xl font-semibold my-24 text-center space-y-4">
          {navLinks.map(({ title, path }) => (
            <li key={path}>
              <Link href={path} onClick={closeNav}>
                <p>{title}</p>
              </Link>
            </li>
          ))}

          <ButtonDownloadCV />
        </ul>
      </motion.div>
    </>
  );
}
