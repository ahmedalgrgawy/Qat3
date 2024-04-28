import image1 from "../../../assets/r_img/image1.jpeg";
import { useDispatch } from "react-redux";
import { helloFunc } from "../../../features/ReviewsSlice/reviewSlice";
import { useSelector } from "react-redux";

export default function Reviews() {

  const dispatch = useDispatch(helloFunc)

  const reviews = useSelector(state => state.reviews)

  return (
    <div>
      <h2 data-aos="fade-up" className="main-title my-28">Reviews</h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 container">

        {reviews.map((review) => {
          return (
            <section key={review.id} data-aos='flip-up' className="cursor-pointer border h-full w-full shadow-xl m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 ">
              <div className="flex">
                <img
                  className=" rounded-full w-11 h-11 m-2 mt-3"
                  src={image1}
                  alt=""
                />
                <div className=" pl-2 m-2 mb-5">
                  <h2 className=" text-blue-600">Elizabeth</h2>
                  <h5 className=" text-gray-400 text-sm normal-case">
                    2 months ago
                  </h5>
                </div>
              </div>
              <p className="m-2">
                {review.reviewText}
              </p>
              <button onClick={() => dispatch(helloFunc())}
                type="submit"
                className=" text-blue-400 m-2 hover:text-blue-300"
              >
                View all Reviews
              </button>
            </section>
          )
        })}
      </div>
    </div>
  );
}
