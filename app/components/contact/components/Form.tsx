"use client";

import {
  InputPhoneElement,
  InputTextElement,
  TextAreaElement,
} from "../../form";
import { VARIANTS } from "@/app/constants/variants";
import { useContactForm } from "./hooks/useForm";

const FORM_INPUTS = [
  {
    name: "firstName",
    placeholder: "First Name",
    type: "text",
  },
  {
    name: "lastName",
    placeholder: "Last Name",
    type: "text",
  },
  {
    name: "email",
    placeholder: "Email",
    type: "text",
  },
  {
    name: "phone",
    placeholder: "Phone",
    type: "text",
  },
];

export function Form() {
  const { handleSubmit, control } = useContactForm();

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {FORM_INPUTS.map(({ name, placeholder, type }) => {
          if (name === "phone") {
            return (
              <InputPhoneElement
                control={control}
                name={name}
                placeholder={placeholder}
                type={type}
                key={name}
                className="col-span-1 md:col-span-1"
              />
            );
          }

          return (
            <InputTextElement
              control={control}
              name={name}
              placeholder={placeholder}
              type={type}
              key={name}
              className="col-span-1 md:col-span-1"
            />
          );
        })}
      </div>

      <TextAreaElement
        control={control}
        name="message"
        placeholder="Write me!"
      />

      <button
        type="submit"
        className={`${VARIANTS.bg_orange_hard} hover:bg-orange-700 ${VARIANTS.color_text} w-full px-6 py-2 font-semibold text-xl rounded-xl`}
      >
        Send Message
      </button>
    </form>
  );
}
