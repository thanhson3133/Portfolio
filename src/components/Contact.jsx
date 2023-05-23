import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import styled from "styled-components";
import MapChart from "./Map";
import {
  EMAIL_PUBLIC_KEY,
  EMAIL_SERVICE_ID,
  EMAIL_TEMPLATE_ID,
} from "../constants";

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;
const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        ref.current,
        EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <div className="h-screen snap-center">
      <div className="w-full h-full flex justify-between gap-12">
        <div className="flex items-center justify-end" style={{ flex: 1 }}>
          <form
            ref={ref}
            action="#"
            className="flex flex-col gap-5"
            style={{ width: "500px" }}
            onSubmit={handleSubmit}
          >
            <h1 className="font-light">Contact</h1>
            <input
              type="text"
              className="p-5 bg-white text-black border-none rounded"
              name="name"
              placeholder="Name"
            />
            <input
              type="text"
              className="p-5 bg-white text-black border-none rounded"
              name="email"
              placeholder="Email"
            />
            <textarea
              className="p-5 bg-white text-black border-none rounded"
              type="text"
              rows={5}
              name="message"
              placeholder="Write your message"
            />
            <button className="p-1 bg-indigo-500 text-white cursor-pointer border-none rounded">
              Send
            </button>
            {success &&
              "Your message has been sent. We'll get back to you soon!"}
          </form>
        </div>
        <div style={{ flex: 1 }}>
          <MapChart />
        </div>
      </div>
    </div>
  );
};

export default Contact;
