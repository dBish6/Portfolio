import { AriaButtonOptions } from "@react-aria/button";

export default interface ButtonProps
  extends React.PropsWithChildren<{}>,
    AriaButtonOptions<"button"> {
  className?: string;
}
