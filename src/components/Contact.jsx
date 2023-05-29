import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import styled from "styled-components";
import MapChart from "./Map";
import {
  EMAIL_PUBLIC_KEY,
  EMAIL_SERVICE_ID,
  EMAIL_TEMPLATE_ID,
} from "../constants";

import { Toaster, toast } from "react-hot-toast";

const Container = styled.div`
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;
const Left = styled.div`
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;
const Form = styled.form`
  @media only screen and (max-width: 768px) {
    width: 200px;
  }
`;
const Right = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const Contact = () => {
  const ref = useRef();

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
          toast.success(
            "Your message has been sent. We'll get back to you soon!",
            {
              position: "top-right",
            }
          );
        },
        (error) => {
          toast.error("Error! Please again!", {
            position: "top-right",
          });
        }
      );
  };

  return (
    <div id="contact" className="h-screen snap-center">
      <Container className="w-full h-full flex justify-between gap-12">
        <Left className="flex items-center justify-end" style={{ flex: 1 }}>
          <Form
            ref={ref}
            id="form"
            action="#"
            className="flex flex-col gap-5"
            style={{ width: "500px" }}
            onSubmit={handleSubmit}
          >
            <h1 className="font-light">Contact me</h1>
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
          </Form>
          <Toaster position="top-right" reverseOrder={true} />
        </Left>
        <Right style={{ flex: 1 }}>
          <MapChart />
        </Right>
      </Container>
    </div>
  );
};

export default Contact;
