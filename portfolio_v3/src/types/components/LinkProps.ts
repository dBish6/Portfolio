import { AriaLinkOptions } from "@react-aria/link";

export default interface LinkProps
  extends React.PropsWithChildren<{}>,
    AriaLinkOptions {
  // navigate?: boolean;
  className?: string;
  removeCustomLine?: true;
}
