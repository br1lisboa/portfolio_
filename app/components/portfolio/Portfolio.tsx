"use client";

import { motion } from "framer-motion";

import project_1 from "../../../public/project.jpg";

import { VARIANTS } from "@/app/constants/variants";
import Image from "next/image";
import Link from "next/link";
import { CustomHeader } from "../custom-header/CustomHeader";

const PROJECTS = [
  {
    title: "CTA",
    desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    devStack:
      "Next JS, TypeScript, Tailwind CSS, Firebase, Firestore, Firebase Auth",
    link: "#",
    git: "#",
    src: project_1,
    id: 1,
  },
  {
    title: "CTA",
    desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    devStack:
      "Next JS, TypeScript, Tailwind CSS, Firebase, Firestore, Firebase Auth",
    link: "#",
    git: "#",
    src: project_1,
    id: 2,
  },
  {
    title: "CTA",
    desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    devStack:
      "Next JS, TypeScript, Tailwind CSS, Firebase, Firestore, Firebase Auth",
    link: "#",
    git: "#",
    src: project_1,
    id: 3,
  },
];

export function Portfolio() {
  return (
    <div
      className={`${VARIANTS.color_text} ${VARIANTS.gradient_portfolio} space-y-10 p-3`}
      id="portfolio"
    >
      <CustomHeader primaryText="My" secondaryText="Projects" />

      <div className="max-w-[1220px] mx-auto space-y-14">
        {PROJECTS.map(({ title, src, desc, devStack, git, id, link }, idx) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`flex ${
              idx % 2 === 1
                ? "flex-col md:flex-row-reverse gap-12"
                : "flex-col md:flex-row"
            }`}
          >
            <div className="space-y-2 max-w-[550px]">
              <h2
                className={`text-7xl my-4 ${VARIANTS.color_text}`}
              >{`0${id}`}</h2>
              <h2 className="text-4xl">{title}</h2>
              <p className={`text-lg $${VARIANTS.color_text}`}>{desc}</p>
              <p
                className={`text-xl ${VARIANTS.color_text_secondary} font-semibold`}
              >
                {devStack}
              </p>
              <div className="flex gap-3 w-64 h-[1px] bg-gray-400 my-4">
                <Link
                  href={link}
                  className={`hover:${VARIANTS.color_text_secondary}`}
                >
                  Link
                </Link>
                <Link
                  href={git}
                  className={`hover:${VARIANTS.color_text_secondary}`}
                >
                  Git
                </Link>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <Image
                src={src}
                alt={title}
                className={`h-[400px] w-aut0 object-cover border rounded-lg ${VARIANTS.border_white_soft}`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
