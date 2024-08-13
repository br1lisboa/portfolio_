"use client";

import Image, { StaticImageData } from "next/image";

import { motion } from "framer-motion";

type Props = {
  icon: StaticImageData;
  x: number;
  y: number;
  height: number;
  width: number;
  left: string;
  top?: string;
};

export function FreeIcons(props: Props) {
  const { icon, x, y, height, width, left, top } = props;

  return (
    <>
      <motion.div
        className={`absolute left-[${left}] top-[${top}]`}
        drag
        style={{ x, y }}
      >
        <Image
          src={icon}
          alt="icon for motion"
          height={height}
          width={width}
          draggable="false"
        />
      </motion.div>
    </>
  );
}
