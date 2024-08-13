import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "emailjs-com";
import { useState } from "react";
import { toast } from "react-toastify";

type Form = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string | undefined;
};

const schema = z.object({
  firstName: z
    .string({ required_error: "Please tell me your name." })
    .min(3, { message: "Please tell me your name." })
    .max(20, { message: "Your name seems very long!" }),
  lastName: z
    .string({ required_error: "Please tell me your last name." })
    .min(3, { message: "Please tell me your last name." })
    .max(20, { message: "Your last name seems very long!" }),
  email: z
    .string({ required_error: "Please leave me an email." })
    .email({ message: "Your email doesn't seem correct." }),
  phone: z
    .string({
      required_error:
        "If you want, leave me your phone number! WhatsApp is okay.",
    })
    .min(6, { message: "Leave me your phone number! WhatsApp is cool :)!" })
    .optional(),
  message: z
    .string()
    .max(200, {
      message: "Message too long! Maximum 200 characters! Thank you!.",
    })
    .optional(),
});

export function useContactForm() {
  const { control, handleSubmit, reset } = useForm<Form>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
    mode: "all",
    resolver: zodResolver(schema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  async function onSubmit(formData: Form) {
    try {
      setIsLoading(true);

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          to_name: "Bruno",
          message: `Mensaje: ${formData.message} Email: ${formData.email} Phone: ${formData.phone}`,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );

      toast.success("Message sent successfully! I will contact you soon.");

      reset();
    } catch (error) {
      toast.error("Oh no! Something went wrong. Please try again.");

      setError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    isLoading,
    error,
  };
}
