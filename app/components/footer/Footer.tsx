import { VARIANTS } from "@/app/constants/variants";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {


  return <div className="w-full border-t border-t-slate-300/50 flex justify-between py-3 px-3">
    <h2 className={`${VARIANTS.color_text} text-xl`}>
        Bruno Lisboa
    </h2>

    <div className="flex space-x-4">
        <Link href={"*"}>
            <FaGithub className={`${VARIANTS.color_text} text-2xl mx-2`} />
        </Link>

        <Link href={"*"}>
            <FaLinkedin className={`${VARIANTS.color_text} text-2xl mx-2`} />
        </Link>
    </div>

    <p className={`${VARIANTS.color_text_gray} hidden md:visible`}>
        Inspired in c0d1n0, tanks! 
    </p>
  </div>;
}
