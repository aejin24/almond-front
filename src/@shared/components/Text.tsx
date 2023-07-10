import { ComponentProps, PropsWithChildren } from "react";

export default function Text({ children, ...props }: PropsWithChildren<ComponentProps<"p">>) {
  return <p {...props}>{children}</p>;
}
