import { useState } from "react";
import useToast from "../hooks/useToast";
import emailjs from "@emailjs/browser";

const SendEmail = () => {
  const [loading, toggleLoading] = useState(false);
  const addToast = useToast();

  const sendEmail = async (ref) => {
    toggleLoading(true);

    try {
      const res = await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        ref.current,
        "-2fD04MRsvEcLZXA_"
      );
      // console.log(res);
      if (res && res.status === 200) {
        ref.current.reset();
        addToast("Your message was sent!");
      }
    } catch (error) {
      console.error(error);
      addToast(
        "Unexpected server error occurred while sending your message.",
        "error"
      );
    } finally {
      toggleLoading(false);
    }
  };

  return [sendEmail, loading];
};

export default SendEmail;
