/* eslint-disable no-useless-escape */
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

// *API Services Import*
import SendEmail from "../../api_services/SendEmail";

// *Design Imports*
import { motion, AnimatePresence } from "framer-motion";
import "./modals.css";

// *Animations*
const backdrop = {
  visible: {
    opacity: 1,
    zIndex: 10,
  },
  hidden: {
    opacity: 0,
    zIndex: 10,
    transitionEnd: { zIndex: -99 },
  },
};

const model = {
  visible: {
    y: "-50%",
    x: "-50%",
    opacity: 1,
    zIndex: 10,
    transition: {
      y: { type: "spring" },
    },
  },
  hidden: {
    y: "-400%",
    x: "-50%",
    opacity: 0,
    zIndex: 10,
    transitionEnd: { zIndex: -99 },
    transition: {
      y: { type: "spring", damping: 70 },
    },
  },
};

const ContactModal = (props) => {
  const [sendEmail, loading] = SendEmail();
  const formRef = useRef(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
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

  return (
    <>
      <AnimatePresence
        mode="wait"
        // onExitComplete={() => props.setShow(false)}
      >
        <motion.div
          variants={backdrop}
          animate={props.show ? "visible" : "hidden"}
          initial={props.show ? "hidden" : "visible"}
          exit={props.show ? "hidden" : "visible"}
          transition={{ duration: 1, type: "ease" }}
          key="backdrop"
          className="darkBG"
          onClick={() => props.setShow(false)}
        />
        <motion.div
          variants={model}
          animate={props.show ? "visible" : "hidden"}
          initial="hidden"
          exit="hidden"
          key="model"
          className="position"
        >
          <div className="contactModal">
            <header className="modalHeader">
              <h3>Contact Me</h3>
            </header>
            <button className="closeBtn" onClick={() => props.setShow(false)}>
              Close
            </button>

            <motion.form
              animate={!loading ? { opacity: 1 } : { opacity: 0 }}
              initial={!loading ? { opacity: 0 } : { opacity: 1 }}
              exit={!loading ? { opacity: 1 } : { opacity: 0 }}
              key={loading}
              className="contactForm"
              ref={formRef}
              onSubmit={handleSubmit(() => sendEmail(formRef))}
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
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
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
                style={
                  loading ? { visibility: "hidden" } : { visibility: "visible" }
                }
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
            {loading ? (
              <div className="contactLoader">
                <span />
                <span />
                <span />
              </div>
            ) : undefined}
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default ContactModal;
