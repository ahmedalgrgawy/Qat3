import { FaMap, FaPhoneAlt, FaClock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Sandreen from "../../../assets/Team/sandreen.jpg";
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <h2 className="main-title my-28 ">Contact</h2>
      <section
        id="contact"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="contact-info pl-14">
          <span style={{ fontSize: "14px", color: "#9e9da2" }}>
            Get In Touch
          </span>
          <h2
            style={{
              lineHeight: "35px",
              fontSize: "26px",
              padding: "5px 0",
              width: "50%",
              margin: "0",
              color: "#3b4356",
            }}
          >
            Visit One Of Our Agency Locations Or Contact Us Right Now!
          </h2>
          <div>
            <li
              style={{ listStyle: "none", padding: "10px 0", display: "flex" }}
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
              style={{ listStyle: "none", padding: "10px 0", display: "flex" }}
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
              style={{ listStyle: "none", padding: "10px 0", display: "flex" }}
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
              style={{ listStyle: "none", padding: "10px 0", display: "flex" }}
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
        <div className="map flex items-center justify-between pt-2.5 pr-4 w-full h-full">
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
          margin: "30px",
          padding: "40px",
          border: "1px solid #bebfc4",
        }}
      >
        <form
          action=""
          style={{
            width: "65%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
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
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your Email" />
          <input type="text" placeholder="Subject" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <button className="button bg-main hover:bg-main-darker transition duration-300  text-white py-4 px-8 outline-none rounded-xl text-base tracking-wider">
            Submit
          </button>
        </form>
        <div className="members pl-5">
          <div
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
                src={Sandreen}
                alt="Sandreen"
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
                Sandreen Kotb
              </span>
              <h4>Front-End Developer</h4>
              <h4>Phone : 01013851010</h4>
              <h4>E-mail : sandreenkotb@gmail.com</h4>
            </p>
          </div>
          <div
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
                src={Sandreen}
                alt="Sandreen"
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
                Sandreen Kotb
              </span>
              <h4>Front-End Developer</h4>
              <h4>Phone : 01013851010</h4>
              <h4>E-mail : sandreenkotb@gmail.com</h4>
            </p>
          </div>
          <div
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
                src={Sandreen}
                alt="Sandreen"
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
                Sandreen Kotb
              </span>
              <h4>Front-End Developer</h4>
              <h4>Phone : 01013851010</h4>
              <h4>E-mail : sandreenkotb@gmail.com</h4>
            </p>
          </div>
          <div
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
                src={Sandreen}
                alt="Sandreen"
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
                Sandreen Kotb
              </span>
              <h4>Front-End Developer</h4>
              <h4>Phone : 01013851010</h4>
              <h4>E-mail : sandreenkotb@gmail.com</h4>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
