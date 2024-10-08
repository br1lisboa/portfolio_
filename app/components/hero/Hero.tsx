import Image from "next/image";

import gear from "../../../public/icon1.png";
import lightning from "../../../public/icon2.png";
import profileEpic from "../../../public/profileEpic.png";

import { VARIANTS } from "@/app/constants/variants";
import { FreeIcons } from "./components/FreeIcons";

const MOTIONS_ICONS = [
  {
    icon: gear,
    x: 170,
    y: 100,
    height: 190,
    width: 190,
    left: "0px",
    top: "0px",
    id: 1,
  },
  {
    icon: lightning,
    x: 1100,
    y: 100,
    height: 190,
    width: 190,
    left: "500px",
    top: "500px",
    id: 2,
  },
];

export function Hero() {
  return (
    <div className={`py-24 md:pt-24 md:py-0 space-y-12 md:space-y-0 relative overflow-clip ${VARIANTS.gradient_hero}`}>
      <div
        className={`absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2 ${VARIANTS.gradient_hero_rounded}`}
      />

      <div className="relative">
        <div className="text-8xl font bold text-center md:space-y-4">
          <h1 className={`${VARIANTS.color_text}`}>Hi, I am</h1>
          <h1 className={`${VARIANTS.color_text_secondary}`}>Bruno Lisboa</h1>

          {MOTIONS_ICONS.map(({ icon, x, y, height, width, left, id, top }) => (
            <FreeIcons
              icon={icon}
              x={x}
              y={y}
              height={height}
              width={width}
              left={left}
              top={top}
              key={id}
            />
          ))}

          <p
            className={`text-center text-xl max-w-[500px] mx-auto mt-7 md:pt-3 ${VARIANTS.color_text}`}
          >
            I am a web developer with a passion for creating beautiful and
            functional websites.
          </p>

          <Image
            src={profileEpic}
            alt="profile picture"
            className="h-auto w-auto mx-auto md:pt-10"
          />
        </div>
      </div>
    </div>
  );
}
