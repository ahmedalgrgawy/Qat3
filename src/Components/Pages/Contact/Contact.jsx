import { FaMap, FaPhoneAlt, FaClock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Contact.css";
import { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { Team } from "../../../assets/data";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_b0sz8kr", "template_sto6jpa", form.current, {
        publicKey: "1PczDjoXIqfE2Anou",
      })
      .then(
        (result) => {
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  const notify = () => toast.success("Submitted Successfully!");

  return (
    <div className="container">
      <h2 className="main-title my-28 ">Contact</h2>
      <div>
        <section
          id="contact"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "15px",
          }}
        >
          <div className="contact-info ">
            <span style={{ fontSize: "14px", color: "#9e9da2" }}>
              Get In Touch
            </span>
            <h2
              style={{
                lineHeight: "35px",
                fontSize: "26px",
                padding: "5px 0",
                margin: "0",
                color: "#3b4356",
              }}
            >
              Visit One Of Our Agency Locations Or Contact Us Right Now!
            </h2>
            <div>
              <li
                style={{
                  listStyle: "none",
                  padding: "10px 0",
                  display: "flex",
                }}
              >
                <FaMap
                  style={{
                    fontSize: "16px",
                    alignContent: "center",
                    color: " #3b4356",
                  }}
                />
                <p
                  style={{
                    fontSize: "14px",
                    paddingLeft: "15px",
                    textTransform: "none",
                    color: "#4f5e7b",
                  }}
                >
                  12 Goverment Building Street
                </p>
              </li>
              <li
                style={{
                  listStyle: "none",
                  padding: "10px 0",
                  display: "flex",
                }}
              >
                <MdEmail
                  style={{
                    fontSize: "16px",
                    alignContent: "center",
                    color: " #3b4356",
                  }}
                />
                <p
                  style={{
                    fontSize: "14px",
                    paddingLeft: "15px",
                    textTransform: "lowercase",
                    color: "#4f5e7b",
                  }}
                >
                  contactus@gmail.com
                </p>
              </li>
              <li
                style={{
                  listStyle: "none",
                  padding: "10px 0",
                  display: "flex",
                }}
              >
                <FaPhoneAlt
                  style={{
                    fontSize: "16px",
                    alignContent: "center",
                    color: " #3b4356",
                  }}
                />
                <p
                  style={{
                    fontSize: "14px",
                    paddingLeft: "15px",
                    color: "#4f5e7b",
                  }}
                >
                  +45 332 26 67
                </p>
              </li>
              <li
                style={{
                  listStyle: "none",
                  padding: "10px 0",
                  display: "flex",
                }}
              >
                <FaClock
                  style={{
                    fontSize: "16px",
                    alignContent: "center",
                    color: " #3b4356",
                  }}
                />
                <p
                  style={{
                    fontSize: "14px",
                    paddingLeft: "15px",
                    textTransform: "none",
                    color: "#4f5e7b",
                  }}
                >
                  Monday to Saturday: 09:00 Am To 16:00 Pm
                </p>
              </li>
            </div>
          </div>
          <div className="map flex items-center justify-between pt-2.5 w-full h-full">
            <iframe
              width="650"
              height="400"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              allowfullscreen
              src="https://maps.google.com/maps?width=500&amp;height=400&amp;hl=en&amp;q=Damnhour%20sports%20stadium+(QAT3)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps vehicle tracker</a>
            </iframe>
          </div>
        </section>
        <section
          id="contact-form"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "30px",
            padding: "40px",
            border: "1px solid #bebfc4",
          }}
        >
          <form
            action=""
            style={{
              width: "60%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
            ref={form}
            onSubmit={sendEmail}
          >
            <span style={{ fontSize: "14px", color: "#9e9da2" }}>
              Leave A Message
            </span>
            <h2
              style={{
                lineHeight: "36px",
                fontSize: "25px",
                padding: "20px 0",
                color: "#4f5e7b",
                fontWeight: "bold",
                letterSpacing: "1px",
              }}
            >
              We Love To Hear From You
            </h2>
            <input type="text" name="from_name" placeholder="Your Name" />
            <input type="text" name="user_email" placeholder="Your Email" />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
            ></textarea>
            <button
              onClick={notify}
              type="submit"
              value="Send"
              className="button bg-main hover:bg-main-darker transition duration-300  text-white py-4 px-8 outline-none rounded-xl text-base tracking-wider"
            >
              Submit
            </button>
            <ToastContainer position="bottom-right" color="#4f5e7b" />
          </form>

          <div className="members pl-5">
            {Team.map((index, member) => {
              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    paddingBottom: "25px",
                    alignItems: "center",
                  }}
                >
                  <div
                    className="team w-24 h-24 relative overflow-hidden "
                    style={{ borderRadius: "50%" }}
                  >
                    <img
                      src={member.img}
                      alt={member.name}
                      className="profile-pic inline my-0 mx-auto h-full w-auto"
                    />
                  </div>

                  <p style={{}}>
                    <span
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#4f5e7b",
                        paddingLeft: "10px",
                        display: "flex",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {member.name}
                    </span>
                    <h4>Front-End Developer</h4>
                    <h4>Phone : {member.phone}</h4>
                    <h4>E-mail : {member.email}</h4>
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
