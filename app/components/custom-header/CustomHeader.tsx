import { VARIANTS } from "@/app/constants/variants";

type Props = {
  primaryText: string;
  secondaryText: string;
};

export function CustomHeader(props: Props) {
  const { primaryText, secondaryText } = props;
  return (
    <h1
      className={`${VARIANTS.color_text} text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4`}
    >
      {primaryText}{" "}
      <span className={`${VARIANTS.color_text_secondary} `}>
        {secondaryText}
      </span>
    </h1>
  );
}
