import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const EmailBox = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ccu4eqe",
        "template_s8b4xid",
        e.currentTarget,
        "mmRIDeBMP-EQOs8Do"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("메일이 성공적으로 전송되었습니다.");
        },
        (error) => {
          console.log(error.text);
          alert("메일 전송에 실패하였습니다.");
        }
      );

    if (form.current) {
      form.current.reset();
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="user_name" />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="user_email" />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" />
      <input type="submit" name="Send" value="Send" />
    </form>
  );
};

export default EmailBox;
