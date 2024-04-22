import background from "../../assets/img/123.jpeg";
import button from "../../assets/img/button.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="Home mb-14 ">
      <section
        style={{
          backgroundImage: `url(${background})`,
        }}
        className="bg-cover bg-no-repeat min-w-full h-screen flex-col "
      >
        <div
          className="container "
          style={{
            backgroundColor: "transparent",
            textAlign: "center",
            paddingTop: "15%",
            padding: "20px",
          }}
        >
          <h4 style={{ color: "#222", fontSize: "20px" }}>Trade-In-Offer</h4>
          <h2 style={{ fontSize: "46px", lineHeight: "54px", color: "#222" }}>
            Super Value Deals
          </h2>
          <h1
            style={{
              fontSize: "50px",
              lineHeight: "64px",
              color: "#008178",
              paddingBottom: "15px",
            }}
          >
            On All Products
          </h1>
          <p
            style={{
              fontSize: "16px",
              color: "#465b52",
              margin: "15px 0 20px 0",
            }}
          >
            Save More With Coupons & Up To 70% Off!
          </p>
          <button
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
            <Link to="/About">Shop Now!</Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
