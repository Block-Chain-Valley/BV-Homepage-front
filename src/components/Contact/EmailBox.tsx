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
    <div className="flex items-center">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col md:items-center"
      >
        <div className="flex max-md:flex-col">
          <div>
            <label htmlFor="name" className=" text-xl font-bold mr-2 ">
              Name
            </label>

            <input
              type="lineText"
              id="name"
              name="user_name"
              value={name}
              onChange={onChangeName}
              className=" w-20 max-md:w-80 border-2 border-black rounded-md mr-2 text-black"
            />
          </div>

          <div>
            <label htmlFor="email" className=" text-xl font-bold mr-2 ">
              Email
            </label>

            <input
              type="email"
              id="email"
              name="user_email"
              value={email}
              onChange={onChangeEmail}
              className="border-2 border-black rounded-md text-black max-md:w-80"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className=" text-xl font-bold mt-2 ">
            Message
          </label>
          <textarea
            id="lineText"
            name="lineText"
            value={lineText}
            onChange={onChangeLineText}
            className="border-2 border-black rounded-md text-black w-80  h-40"
          />
        </div>
        <input
          type="submit"
          name="Send"
          value="Send"
          className="border-2 mt-5 border-white w-80 h-10 rounded-md bg-black text-white"
        />
      </form>
    </div>
  );
};

export default EmailBox;
