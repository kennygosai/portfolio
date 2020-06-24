import React, { useState } from "react";
import emailjs from "emailjs-com";
import { CircularProgress } from "@material-ui/core";
import CustomizedSnackbars from "./CustomizedSnackbars";

/**
 * Contact section of the webpage
 *
 * @component
 * @example
 * const data = {
 *  message : "Contact me!"
 * }
 * return (
 *   <Contact data={data} />
 * )
 */
function Contact(props) {
  const [sendStatus, setSendStatus] = useState({
    status: "error",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const contactMessage = props.data.contactmessage;
  const validate = () => {
    if (document.myForm.from_name.value === "") {
      setSendStatus({ status: "error", message: "Please provide your name!" });
      return false;
    }
    if (document.myForm.user_email.value === "") {
      setSendStatus({ status: "error", message: "Please provide your Email!" });
      return false;
    }
    if (document.myForm.message_html.value === "") {
      setSendStatus({ status: "error", message: "Please provide a message!" });
      return false;
    }
    return true;
  };
  const sendEmail = (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICEID,
          process.env.REACT_APP_TEMPLATEID,
          e.target,
          process.env.REACT_APP_USERID
        )
        .then(
          (result) => {
            setLoading(false);
            setSendStatus({ status: "success", message: "Message Sent" });
          },
          (error) => {
            setLoading(false);
            setSendStatus({
              status: "error",
              message: "There was an error sending the message!",
            });
          }
        );
    }
  };
  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className="ten columns">
          <p className="lead">{contactMessage}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <form onSubmit={sendEmail} name="myForm">
            <fieldset>
              <label htmlFor="contactName">
                Name <span className="required">*</span>
              </label>
              <input
                type="text"
                size="35"
                defaultValue=""
                id="contactName"
                name="from_name"
              />
              <label htmlFor="contactEmail">
                Email <span className="required">*</span>
              </label>
              <input
                type="text"
                size="35"
                id="contactEmail"
                name="user_email"
              />
              <label htmlFor="contactMessage">
                Message <span className="required">*</span>
              </label>
              <textarea
                cols="50"
                rows="15"
                id="contactMessage"
                name="message_html"
              ></textarea>

              <div>
                <button className="submit">Submit</button>
                {loading !== false ? (
                  <CircularProgress
                    style={{
                      marginLeft: "20px",
                      position: "relative",
                      top: "12px",
                    }}
                  ></CircularProgress>
                ) : null}
              </div>
            </fieldset>
          </form>

          {sendStatus.message !== "" ? (
            <CustomizedSnackbars
              emptyString={() => {
                setSendStatus({ ...sendStatus, message: "" });
              }}
              message={sendStatus.message}
              type={sendStatus.status}
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default Contact;
