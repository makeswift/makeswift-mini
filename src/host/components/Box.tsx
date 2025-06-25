import type { ReactNode } from "react";

type Props = {
  backgroundColor?: string;
  padding?: number;
  width?: number;
  children?: ReactNode;
};

export function Box({ backgroundColor, padding, width, children }: Props) {
  return (
    <div
      className="flex flex-col p-8 gap-4"
      style={{ backgroundColor, padding, width }}
    >
      {children}
    </div>
  );
}
