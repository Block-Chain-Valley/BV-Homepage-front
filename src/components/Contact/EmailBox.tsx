import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import useInput from "@/hooks/useInput";
import axios from "axios";

const EmailBox = () => {
  const [name, onChangeName, resetName] = useInput("");
  const [email, onChangeEmail, resetEmail] = useInput("");
  const [lineText, onChangeLineText, resetLineText] = useInput("");

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      service_id: "service_ccu4eqe",
      template_id: "template_s8b4xid",
      user_id: "mmRIDeBMP-EQOs8Do",
      template_params: {
        name,
        email,
        lineText,
      },
    };

    axios({
      method: "post",
      url: "https://api.emailjs.com/api/v1.0/email/send",
      data,
    })
      .then((res) => {
        alert("Email successfully sent!");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    resetName();
    resetEmail();
    resetLineText();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label htmlFor="name">Name</label>
      <input
        type="lineText"
        id="name"
        name="user_name"
        value={name}
        onChange={onChangeName}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="user_email"
        value={email}
        onChange={onChangeEmail}
      />
      <label htmlFor="message">Message</label>
      <textarea
        id="lineText"
        name="lineText"
        value={lineText}
        onChange={onChangeLineText}
      />
      <input type="submit" name="Send" value="Send" />
    </form>
  );
};

export default EmailBox;
