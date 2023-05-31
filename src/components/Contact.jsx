import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import MapChart from "./Map";
import {
  EMAIL_PUBLIC_KEY,
  EMAIL_SERVICE_ID,
  EMAIL_TEMPLATE_ID,
} from "../constants";

import { Toaster, toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

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
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required!"),
    email: Yup.string().required("Email Name is required!"),
    message: Yup.string().required("Message name is required!"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const ref = useRef();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 20,
        color: "white",
      }}
      spin
    />
  );

  const onSubmit = (e) => {
    setLoading(true);
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
          reset();
          setLoading(false);
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
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="font-light">Contact me</h1>
            <input
              type="text"
              className="p-5 bg-white text-black border-none rounded"
              name="name"
              {...register("name")}
              placeholder="Name"
            />
            <div className="text-red-500">{errors.name?.message}</div>
            <input
              type="text"
              className="p-5 bg-white text-black border-none rounded"
              name="email"
              {...register("email")}
              placeholder="Email"
            />
            <div className="text-red-500">{errors.email?.message}</div>

            <textarea
              className="p-5 bg-white text-black border-none rounded"
              type="text"
              rows={5}
              name="message"
              {...register("message")}
              placeholder="Write your message"
            />
            <div className="text-red-500">{errors.message?.message}</div>

            <button
              type="submit"
              className="relative flex p-1 bg-indigo-500 text-white cursor-pointer border-none rounded w-1/3"
            >
              {loading && (
                <Spin indicator={antIcon} className="absolute left-1 top-1" />
              )}
              <span className="mx-auto">Send</span>
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
