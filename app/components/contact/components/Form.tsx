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
  const { handleSubmit, control, isLoading } = useContactForm();

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
                isDisabled={isLoading}
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
              isDisabled={isLoading}
            />
          );
        })}
      </div>

      <TextAreaElement
        control={control}
        name="message"
        placeholder="Write me!"
        isDisabled={isLoading}
      />

      <button
        type="submit"
        className={`bg-[#4C3B4D] hover:bg-[#575058ef] ${VARIANTS.color_text} w-full px-6 py-2 font-semibold text-xl rounded-xl ${isLoading ? "cursor-not-allowed" : "cursor-pointer"}`}
        disabled={isLoading}
      >
        Send Message
      </button>
    </form>
  );
}
