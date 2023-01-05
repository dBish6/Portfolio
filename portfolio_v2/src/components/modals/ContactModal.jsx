import { useState, useEffect, useRef } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import emailjs from "@emailjs/browser";

// *Design Imports*
import "./modals.css";

// *Animations*
const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const model = {
  hidden: {
    y: "-400%",
    x: "-50%",
    opacity: 0,
  },
  visible: {
    y: "-50%",
    x: "-50%",
    opacity: 1,
    // transition: { delay: 0.5 },
    transition: {
      // y: { type: "spring", stiffness: 180, damping: 30 },
      y: { type: "spring" },
      opacity: { duration: 0.5 },
    },
  },
};

const ContactModal = (props) => {
  const formRef = useRef(null);
  const [loading, toggleLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    props.show
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [props.show]);

  const sendEmail = async () => {
    toggleLoading(true);
    console.log(document.querySelector(".contactForm"));
    try {
      const res = await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        "-2fD04MRsvEcLZXA_"
      );
      console.log(res);

      formRef.current.reset();
      toggleLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {props.show && (
        <>
          <AnimatePresence
            mode="wait"
            onExitComplete={() => props.setShow(false)}
          >
            <motion.div
              variants={backdrop}
              animate="visible"
              initial="hidden"
              exit="hidden"
              key="darkBG"
              className="darkBG"
              onClick={() => props.setShow(false)}
            />
            <motion.div
              variants={model}
              animate="visible"
              initial="hidden"
              exit="hidden"
              key="position"
              className="position"
            >
              <div className="contactModal">
                <header className="modalHeader">
                  <h3>Contact Me</h3>
                </header>
                <button
                  className="closeBtn"
                  onClick={() => props.setShow(false)}
                >
                  Close
                </button>

                <motion.form
                  variants={backdrop}
                  animate={!loading ? "visible" : "hidden"}
                  initial={!loading ? "hidden" : "visible"}
                  exit={!loading ? "visible" : "hidden"}
                  key={loading}
                  className="contactForm"
                  ref={formRef}
                  onSubmit={handleSubmit(() =>
                    sendEmail(watch("name"), watch("email"), watch("message"))
                  )}
                >
                  <div>
                    <input
                      {...register("name", {
                        required: "Name is required.",
                        maxLength: {
                          value: 30,
                          message: "Name can be no more than 30 characters.",
                        },
                      })}
                      name="name"
                      id="nameInput"
                      autoComplete="off"
                      placeholder=" "
                    />
                    <label htmlFor="name" id="nameLabel">
                      Name
                    </label>
                    <ErrorMessage
                      errors={errors}
                      name="name"
                      render={({ message }) => (
                        <small className="inputError" id="nameError">
                          {message}
                        </small>
                      )}
                    />

                    <input
                      {...register("email", {
                        required: "Email is required.",
                        pattern: {
                          value:
                            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                          message: "Please enter a valid email.",
                        },
                      })}
                      name="email"
                      id="emailInput"
                      autoComplete="off"
                      placeholder=" "
                    />
                    <label htmlFor="email" id="emailLabel">
                      Email
                    </label>
                    <ErrorMessage
                      errors={errors}
                      name="email"
                      render={({ message }) => (
                        <small className="inputError" id="emailError">
                          {message}
                        </small>
                      )}
                    />
                  </div>

                  <textarea
                    {...register("message", {
                      required: "Your message is required.",
                    })}
                    name="message"
                    id="messageTextarea"
                    rows="6"
                    autoComplete="off"
                    placeholder=" "
                  />
                  <label htmlFor="message" id="messageLabel">
                    Message
                  </label>
                  <ErrorMessage
                    errors={errors}
                    name="message"
                    render={({ message }) => (
                      <small className="inputError" id="messageError">
                        {message}
                      </small>
                    )}
                  />

                  <button type="submit">
                    <span className="btnTop">Send</span>
                  </button>
                </motion.form>
                {loading ? <p>Loading...</p> : undefined}
              </div>
            </motion.div>
          </AnimatePresence>
        </>
      )}
    </>
  );
};

export default ContactModal;
