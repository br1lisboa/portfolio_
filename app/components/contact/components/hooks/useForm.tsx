import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "emailjs-com";

type Form = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string | undefined;
};

export function useContactForm() {
  const schema = z.object({
    firstName: z.string().min(3, { message: "First name is required" }).max(10),
    lastName: z.string().min(3, { message: "Last name is required" }).max(10),
    email: z.string().email({ message: "Invalid email" }),
    phone: z.string().min(10, { message: "Invalid phone number" }),
    message: z.string().max(200, { message: "Max 200 characters" }).optional(),
  });

  const { control, handleSubmit } = useForm<Form>({
    defaultValues: undefined,
    mode: "all",
    resolver: zodResolver(schema),
  });

  async function onSubmit(formData: Form) {
    try {
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

      console.log("exito");
    } catch (error) {
      console.log("error");
    }
  }

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
  };
}
