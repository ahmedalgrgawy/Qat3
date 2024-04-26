import background from "../../../assets/img/123.jpeg";
import button from "../../../assets/img/button.png";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="custom-height">
      <section
        style={{
          backgroundImage: `url(${background})`,
        }}
        className="bg-cover bg-no-repeat min-w-full h-screen flex justify-center items-center"
      >
        <div
          className="container flex flex-col justify-start items-center text-center"
          style={{
            backgroundColor: "transparent",
            textAlign: "center",
            // paddingTop: "15%",
            padding: "20px",
          }}
        >
          <h4 data-aos='fade-down' style={{ color: "#222", fontSize: "20px" }}>Trade-In-Offer</h4>
          <h2 data-aos='fade-down' style={{ fontSize: "46px", lineHeight: "54px", color: "#222" }}>
            Super Value Deals
          </h2>
          <h1 data-aos='fade-down'
            style={{
              fontSize: "50px",
              lineHeight: "64px",
              color: "#008178",
              paddingBottom: "15px",
            }}
          >
            On All Products
          </h1>
          <p data-aos='fade-down'
            style={{
              fontSize: "16px",
              color: "#465b52",
              margin: "15px 0 20px 0",
            }}
          >
            Save More With Coupons & Up To 70% Off!
          </p>
          <button data-aos='fade-down'
            type="button"
            className="bg-no-repeat "
            style={{
              backgroundImage: `url(${button})`,
              backgroundColor: "transparent",
              width: "260px",
              height: "60px",
              fontSize: "15px",
              color: "#008178",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              paddingBottom: "2px",
              textAlign: "center",
              backgroundSize: "cover",
            }}
          >
            <NavLink to="/shop">Shop Now!</NavLink>
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
