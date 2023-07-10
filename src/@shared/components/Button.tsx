import { ComponentProps, PropsWithChildren } from "react";

export default function Button({ children, ...props }: PropsWithChildren<ComponentProps<"button">>) {
  return <button {...props}>{children}</button>;
}
