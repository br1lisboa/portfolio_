import { VARIANTS } from "@/app/constants/variants";
import { Control, Controller } from "react-hook-form";

type Props = {
  control: Control<any>;
  name: string;
  placeholder: string;
  isDisabled?: boolean;
};

export function TextAreaElement(props: Props) {
  const { control, name, placeholder, isDisabled } = props;

  const disabled = isDisabled ? "bg-slate-600 cursor-not-allowed" : "";

  return (
    <Controller
      key={name}
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        let errorMessage = "";
        if (error?.message) {
          errorMessage = error.message;
        }

        const bg = error ? VARIANTS.bg_input_error : VARIANTS.bg_black_hard;
        const focusRing = error
          ? VARIANTS.focus_ring_error
          : VARIANTS.focus_ring_input;

        return (
          <div className="flex flex-col space-y-2">
            <textarea
              disabled={isDisabled}
              placeholder={placeholder}
              className={`rounded-xl p-3 focus:outline-none focus:ring-2 ${bg} ${focusRing} ${disabled}`}
              value={value}
              onChange={onChange}
            />
            {error && (
              <span
                className={`relative -top-1 left-3 ${VARIANTS.color_text_error}`}
              >
                {errorMessage}
              </span>
            )}
          </div>
        );
      }}
    />
  );
}
