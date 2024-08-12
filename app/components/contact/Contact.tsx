import Image from "next/image";

import { Form } from "./components/Form";

import phone from "../../../public/phone.png";
import email from "../../../public/mail.png";
import { VARIANTS } from "@/app/constants/variants";

const CONTACTS = [
  {
    icon: phone,
    text: "+ 09102339393",
  },
  {
    icon: email,
    text: "brlisbo@gmail.com",
  },
];

export function Contact() {
  return (
    <div
      className={`max-w-[1000px] mx-auto flex flex-col items-center lg:flex-row lg:justify-center ${VARIANTS.color_text} p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8`}
      id="contact"
    >
      <div className="flex justify-center items-center">
        <ul className="space-y-4">
          {CONTACTS.map(({ icon, text }) => (
            <li className="flex items-center" key={text}>
              <Image src={icon} alt="text" className="h-[110px] w-auto mr-6" />
              <p className="text-xl"> {text}</p>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`${VARIANTS.bg_about_cards} p-6 rounded-xl max-w-[550px]`}
      >
        <h2
          className={`text-5xl font-bold ${VARIANTS.color_text_secondary} mb-4`}
        >
          Let`s connect
        </h2>
        <p className={`${VARIANTS.color_text_gray} mb-6`}>
          Send me a message and lets schedule a call!
        </p>
          <Form />
      </div>
    </div>
  );
}
