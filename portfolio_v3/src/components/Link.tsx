import LinkProps from "@types/components/LinkProps";
import { useRef } from "react";
// import { useRouter } from "next/router";
import { useLink } from "@react-aria/link";
import { useHover } from "@react-aria/interactions";
import NextLink from "next/link";
import mergeProps from "react-merge-props";

const Link: React.FC<LinkProps> = ({
  // navigate,
  className,
  removeCustomLine,
  children,
  ...options
}) => {
  // const router = useRouter();

  const linkRef = useRef<HTMLAnchorElement>(null),
    { linkProps, isPressed } = useLink(options, linkRef),
    // { linkProps, isPressed } = useLink(
    //   {
    //     ...options,
    //     onPress(e) {
    //       navigate && router.push(options.href);
    //     },
    //   },
    //   linkRef
    // );
    { hoverProps, isHovered } = useHover(options);
  // { isFocusVisible } = useFocusVisible(options);

  return (
    <NextLink
      ref={linkRef}
      className={className}
      data-hovered={isHovered}
      data-pressed={isPressed}
      // data-focus-visible={isFocusVisible}
      {...mergeProps(linkProps, hoverProps)}
      href={options.href ? options.href : ""}
    >
      {children}
      {!removeCustomLine && (
        <span role="presentation" className="activeUnderline" />
      )}
    </NextLink>

    // <a ref={linkRef} {...linkProps} href={navigate ? "" : options.href}>
    //   {children}
    // </a>
  );
};

export default Link;
