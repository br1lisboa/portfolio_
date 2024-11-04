import { VARIANTS } from "@/app/constants/variants";
import { FaJsSquare, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { TbBrandMongodb } from "react-icons/tb";
import { SiPrisma } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";

const SKILLS_ICONS = [
  { Icon: RiTailwindCssFill, label: "TAILWIND" },
  { Icon: SiNextdotjs, label: "NextJS" },
  { Icon: FaJsSquare, label: "JavaScript" },
  { Icon: FaReact, label: "React" },
  { Icon: TbBrandReactNative, label: "React Native" },
  { Icon: TbBrandMongodb, label: "MONGODB" },
  { Icon: SiPrisma, label: "Prisma ORM" },
  { Icon: TbBrandMysql, label: "My SQL" },
];

export function Skills() {
  return (
    <div className={`${VARIANTS.gradient_skills} pt-10`}>
      <div
        className={`${VARIANTS.color_text} max-w-[1000px] mx-auto p-8 text-center`}
      >
        <h2 className="text-6xl font-bold mb-4">What I Do</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {SKILLS_ICONS.map(({ Icon, label }) => (
            <div
              key={label}
              className={`h-[150px] flex flex-col justify-between items-center ${VARIANTS.bg_about_cards} p-4 rounded-xl md:h-[200px]`}
            >
              {<Icon size={140}/>}
              <p className="mt-4">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
