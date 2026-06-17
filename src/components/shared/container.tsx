import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer";
  id?: string;
};

/** Consistent horizontal rhythm across all sections. */
export function Container({
  children,
  className,
  as: Tag = "div",
  id,
}: ContainerProps) {
  return (
    <Tag
      id={id}
      className={cn(
        "mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
