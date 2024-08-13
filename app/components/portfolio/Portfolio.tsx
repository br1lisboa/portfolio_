"use client";

import { motion } from "framer-motion";

import CTA from "../../../public/CTA.png";
import PORT from "../../../public/port.png";

import { VARIANTS } from "@/app/constants/variants";
import Image from "next/image";
import Link from "next/link";
import { CustomHeader } from "../custom-header/CustomHeader";

const PROJECTS = [
  {
    title: "CTA",
    desc: "A Single Page Application (SPA) developed for a CTA (Confederation of Workers) in Argentina. The application includes authentication and an admin panel where administrators can upload news articles and opinions. Users can download forms and communicate directly with the organization through the platform.",
    devStack:
      "Next JS, TypeScript, Tailwind CSS, Firebase, Firestore, Firebase Auth",
    link: "https://cta-next-br1lisboa.vercel.app/",
    git: "https://github.com/br1lisboa/CTA-NEXT",
    src: CTA,
    id: 1,
  },
  {
    title: "Contact Me!",
    desc: "A presentation Single Page Application (SPA) with a hybrid integration of server-side rendering and client-side rendering. It features forms with multiple validations, email service integration, and floating notifications. The application allows users to introduce themselves and communicate through various channels, provides links to relevant resources, and enables PDF downloads.",
    devStack:
      "Next JS, TypeScript, Tailwind CSS, RHF, zod, Toasty, EMAILJS",
    link: "https://brunolisboa-dev.vercel.app/",
    git: "https://github.com/br1lisboa/portfolio_",
    src: PORT,
    id: 2,
  },
];

export function Portfolio() {
  return (
    <div
      className={`${VARIANTS.color_text} ${VARIANTS.gradient_portfolio} space-y-10 px-3 pt-10`}
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
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link
                </Link>
                <Link
                  href={git}
                  className={`hover:${VARIANTS.color_text_secondary}`}
                  target="_blank"
                  rel="noopener noreferrer"
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
