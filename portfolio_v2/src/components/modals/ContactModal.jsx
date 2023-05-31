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
  },
  hidden: {
    opacity: 0,
  },
};

const modal = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { type: "spring", stiffness: 50 },
      opacity: { duration: 0.6 },
    },
  },
  hidden: {
    y: "-400%",
    opacity: 0,
    transition: {
      duration: 0.8,
      type: "tween",
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
      reason: "",
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
      <AnimatePresence>
        {props.show && (
          <>
            <motion.div aria-label="Modal Area" className="position">
              <motion.div
                aria-label="Backdrop"
                variants={backdrop}
                animate="visible"
                initial="hidden"
                exit="hidden"
                transition={{ duration: 1, type: "ease" }}
                key="backdrop"
                className="darkBG"
                onClick={() => props.setShow(false)}
              />
              <motion.div
                aria-label="Contact Modal"
                variants={modal}
                animate="visible"
                initial="hidden"
                exit="hidden"
                key="model"
                className="contactModal"
              >
                <header aria-label="Title" className="modalHeader">
                  <h3>Contact Me</h3>
                </header>
                <button
                  className="closeBtn"
                  onClick={() => props.setShow(false)}
                >
                  Close
                </button>

                <motion.form
                  aria-label="Information"
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
                      aria-required="true"
                      name="name"
                      id="nameInput"
                      autoComplete="off"
                      placeholder=" "
                    />
                    <label htmlFor="nameInput" id="nameLabel">
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

                    <select
                      {...register("reason", {
                        required: "A reason is required.",
                        maxLength: {
                          value: 30,
                          message: "Name can be no more than 30 characters.",
                        },
                      })}
                      name="reason"
                    >
                      <option disabled selected value="">
                        Reason
                      </option>
                      <option value="Job">Job Opportunity</option>
                      <option value="Freelance">
                        Freelance Project Proposal
                      </option>
                      <option value="Open Source">Open Source</option>
                      <option value="Other">Other</option>
                    </select>
                    <ErrorMessage
                      errors={errors}
                      name="reason"
                      render={({ message }) => (
                        <small className="inputError" id="reasonError">
                          {message}
                        </small>
                      )}
                    />
                  </div>

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
                  <label htmlFor="emailInput" id="emailLabel">
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
                      loading
                        ? { visibility: "hidden" }
                        : { visibility: "visible" }
                    }
                  />
                  <label htmlFor="messageTextarea" id="messageLabel">
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
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactModal;
