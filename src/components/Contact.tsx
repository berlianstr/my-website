import Button from "./Button/Button";
import Input from "./Input";
import Textarea from "./Input-TextArea";
import TextTitleSection from "./TextTitleSection";
import { Element } from "react-scroll";
import React, { useRef, useState } from "react";
import ModalConfirm from "./Modals/ModalConfirm";
import emailjs from "@emailjs/browser";
import ModalSuccess from "./Modals/ModalSuccess";
export default function Contact() {
  const form = useRef<HTMLFormElement>();
  const [loading, setLoading] = useState(false);
  const [openModalSucces, setOpenModalSucces] = useState(false);
  const [openModalConfirm, setOpenModalConfirm] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current!,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          if (form.current) {
            form.current.reset();
          }
          setLoading(false);
          setOpenModalConfirm(false);
          setOpenModalSucces(true);
        },
        (error) => {
          setLoading(false);
          setOpenModalConfirm(false);
          console.log(error.text);
        }
      );
  };

  return (
    <Element name="contact">
      <div className="lg:p-[134px] md:p-20 p-7 bg-secondaryBlue h-auto w-full">
        <TextTitleSection
          title1="Contact"
          classNameTitle2="text-white"
          classNameTitle1="text-white"
          title2="Me"
        />
        <form
          ref={form as React.RefObject<HTMLFormElement>}
          onSubmit={sendEmail}
        >
          <div className="w-full flex flex-col gap-5">
            <Input
              placeholder="Enter your name..."
              label="Name"
              name="from_name"
              // {...register("name", { required: true })}
              // required={true}
              // ref={nameRef as React.RefObject<HTMLInputElement>}
            />
            <Input
              placeholder="Enter your email..."
              label="Email"
              name="email"
              // {...register("email", { required: true })}
              // required={true}
            />
            <Textarea
              label="Message"
              placeholder="Enter message..."
              name="message"
              // {...register("message", { required: true })}
              // required={true}
            />
            <div className="flex justify-center">
              <Button
                label="Send"
                onClick={() => setOpenModalConfirm(true)}
                className="bg-textBlue"
              />
            </div>
          </div>
          <ModalConfirm
            open={openModalConfirm}
            loading={loading}
            setOpen={setOpenModalConfirm}
            // error={!!Object.keys(loading).length}
            type="submit"
          />
          <ModalSuccess open={openModalSucces} setOpen={setOpenModalSucces} />
        </form>
      </div>
    </Element>
  );
}
