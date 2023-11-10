import ButtonProps from "@types/components/ButtonProps";
import { useRef } from "react";
import { useButton } from "@react-aria/button";
import { useHover } from "@react-aria/interactions";
import mergeProps from "react-merge-props";

// interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
//   text: string;
//   onPress?: () => void;
// }

const Button: React.FC<ButtonProps> = ({ children, className, ...options }) => {
  const btnRef = useRef<HTMLButtonElement>(null),
    // FIXME: Does this need children?
    { buttonProps, isPressed } = useButton(options, btnRef),
    { hoverProps, isHovered } = useHover(options);

  return (
    <button
      ref={btnRef}
      className={className}
      // style={
      //   isHovered
      //     ? {
      //         color: "var(--c-heading2)",
      //         backgroundColor: `var(--c-${activeColor}600)`,
      //       }
      //     : {}
      // }
      // {...(isPressed && {
      //   style: { borderBottomColor: `var(--c-${activeColor}600)` },
      // })}
      data-hovered={isHovered}
      data-pressed={isPressed}
      {...mergeProps(buttonProps, hoverProps)}
      // {...buttonProps}
      // {...hoverProps}
      // {...options}
    >
      {className === "primaryBtn" || className === "iconBtn" ? (
        <span role="presentation">
          <p>{children}</p>
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
