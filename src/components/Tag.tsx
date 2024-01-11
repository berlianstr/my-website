import { twMerge } from "tailwind-merge";

export default function Tag({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        `bg-textBlue rounded-sm w-fit h-auto p-1 text-secondaryWhite text-sm`,
        className
      )}
    >
      {title}
    </div>
  );
}
