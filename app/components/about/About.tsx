import Image from "next/image";

import book from "../../../public/book.png";
import finance from "../../../public/finance.png";
import card from "../../../public/card.png";
import pc from "../../../public/pc.png";

import { VARIANTS } from "@/app/constants/variants";
import { CustomHeader } from "../custom-header/CustomHeader";

const CARDS = [
  {
    src: book,
    title: "Education",
    description:
      "I am focusing on technology like React, Next.js, Tailwind CSS, Node.js, MongoDB, and computer science.",
    colSpan: "col-span-3",
  },
  {
    src: finance,
    title: "Problem Solving",
    description:
      "I approach problems with a logical mindset and I am always looking for the best solution.",
    colSpan: "col-span-5",
  },
  {
    src: card,
    title: "Experience",
    description:
      "I have a lot of experience in web development and I am always looking to learn more.",
    colSpan: "col-span-5",
  },
  {
    src: pc,
    title: "Technical Skills",
    description:
      "As a Web Developer, I specialize in React JS, Next JS, Tailwind CSS, Node JS",
    colSpan: "col-span-3",
  },
];

export function About() {
  return (
    <div className="py-10 md:py-24 max-w-[1200px] mx-auto" id="about">
      <CustomHeader primaryText="About" secondaryText="Me" />

      <div className="grid grid-cols-1 md:grid-cols-8 gap-6 place-items-center px-3">
        {CARDS.map(({ src, title, description, colSpan }, index) => (
          <div
            key={index}
            className={`w-full col-span-1 gap-6 md:col-span-4 relative ${VARIANTS.bg_about_cards} backdrop-blur-lg border ${VARIANTS.border_white_soft} rounded-xl overflow-hidden`}
          >
            <div
              className={`absolute inset-0 ${VARIANTS.gradient_cards_about} opacity-30 animate-gradient-xy`}
            />
            <div className="flex flex-row p-6">
              <Image src={src} alt="book" className="w-auto h-[130px]" />
              <div className="flex flex-col mt-4">
                <h2 className={`text-2xl font-bold ${VARIANTS.color_text}`}>
                  {title}
                </h2>
                <p className={`text-lg mt-2 ${VARIANTS.color_text_gray}`}>
                  {description}
                </p>  
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
