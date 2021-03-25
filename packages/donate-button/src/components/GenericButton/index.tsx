import { JSXInternal } from "preact/src/jsx";
import { Styled } from "src/components/Styled";
import { GenericButtonProps } from "src/helpers/options-types";
import genericButtonStyles from "./generic-button.css";

const GenericButton = ({
  label = "Donate",
  textColor,
  bgColor,
  borderRadius,
  fontSize,
  padding,
  classes = [],
  onClick,
  hrefUrl,
}: GenericButtonProps) => {
  const outsideClasses = typeof classes === 'string' ? [classes] : classes 

  const handleClick = (e: JSXInternal.TargetedMouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick();
  }
  
  return (
    <Styled styles={[genericButtonStyles]} scoped={false}>
      <a
        href={hrefUrl}
        style={{
          background: bgColor,
          color: textColor,
          borderRadius,
          fontSize,
          padding,
        }}
        onClick={handleClick}
        className={["Every-GenericButton"].concat(outsideClasses).join(' ')}
      >
        {label}
      </a>
    </Styled>
  );
};

export default GenericButton;
