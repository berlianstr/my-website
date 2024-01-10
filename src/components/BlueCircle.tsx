import { twMerge } from "tailwind-merge";

export default function BlueCircle({ className }: { className?: string }) {
  return (
    <div
      className={twMerge(
        `bg-secondaryBlue h-14 w-14 rounded-full opacity-10`,
        className
      )}
    />
  );
}
