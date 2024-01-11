import { AlertTriangleIcon, Loader2Icon } from "lucide-react";
import { useEffect } from "react";
import ModalContainer from "./ModalContainer";
import Button from "@components/Button/Button";

export default function ModalConfirm({
  open,
  loading,
  type = "button",
  error = false,
  setOpen,
  fn = () => null,
}: {
  open: boolean;
  loading: boolean;
  type?: string;
  error?: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  fn?: () => void;
}) {
  useEffect(() => {
    if (error) {
      setOpen(false);
    }
  }, [error]);
  return (
    <ModalContainer open={open}>
      <div className="w-[480px] flex flex-col bg-white p-6 rounded-2xl items-center gap-8">
        <div className="w-[129px] h-[129px] bg-[#F79009] rounded-full flex items-center justify-center">
          <AlertTriangleIcon color="white" size={75} />
        </div>
        <div className="flex flex-col items-center">
          <label className="text-[24px] text-[#313030] font-semibold">
            Confirm?
          </label>
          <span className="text-[#393737] text-[16px]">
            Are you sure you want to send the message?
          </span>
        </div>
        <div className="flex gap-3 w-full justify-center">
          {loading ? (
            <Loader2Icon color="black" className="animate-spin" />
          ) : (
            <>
              <Button
                label="cancel"
                className="bg-transparent border border-[#2866C8] text-[#2866C8]"
                onClick={() => {
                  setOpen(false);
                }}
              />
              {type === "submit" ? (
                <Button label="Yes, Confirm" type="submit" />
              ) : (
                <Button
                  label="Yes, Confirm"
                  type="button"
                  onClick={() => fn()}
                />
              )}
            </>
          )}
        </div>
      </div>
    </ModalContainer>
  );
}
