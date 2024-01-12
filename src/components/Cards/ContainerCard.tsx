import React from "react";
import { twMerge } from "tailwind-merge";

export default function ContainerCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        `flex flex-col gap-2 border-2 border-secondaryBlue rounded-md p-5 `,
        className
      )}
    >
      {children}
    </div>
  );
}
