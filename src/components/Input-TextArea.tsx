import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
type TInputTextAreaProps = {
  placeholder?: string;
  className?: string;
  label?: string;
  error?: boolean;
  maxLength?: number;
  disabled?: boolean;
  rows?: number;
  cols?: number;
  useCharCount?: string;
  required?: boolean;
  name?: string;
};

const Textarea = forwardRef<HTMLTextAreaElement, TInputTextAreaProps>(
  (
    {
      placeholder,
      className = "",
      label = "",
      maxLength = 200,
      error = false,
      disabled = false,
      required = false,
      name = "",
      ...props
    },
    ref
  ) => {
    // const [count, setCount] = useState<number>(0);
    return (
      <div className="flex flex-col gap-2">
        {!!label ? (
          <label className="text-secondaryWhite text-xl font-semibold">
            {label}
          </label>
        ) : null}
        <textarea
          required={required}
          ref={ref}
          className={twMerge(
            `min-h-[200px] w-full border-[2px] p-[14px] flex items-center outline-none bg-white rounded-lg gap-2 font-open-sans ${
              error ? "border-red-500" : "border-[#D0D3D9]"
            } ${disabled ? "bg-[#D0D3D9]" : null}`,
            className
          )}
          name={name}
          placeholder={placeholder}
          maxLength={maxLength}
          // onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          //   setCount(e.target.value.length)
          // }
          {...props}
        />
        {/* <div className="flex justify-end">{count}/200</div> */}
      </div>
    );
  }
);

export default Textarea;
