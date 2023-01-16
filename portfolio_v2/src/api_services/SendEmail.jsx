/* eslint-disable no-unused-vars */
import { useState } from "react";

import emailjs from "@emailjs/browser";

const SendEmail = () => {
  const [loading, toggleLoading] = useState(false);

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

      // FIXME: Not resetting.
      ref.current.reset();
      toggleLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return [sendEmail, loading];
};

export default SendEmail;
