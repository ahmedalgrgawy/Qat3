import { useSelector } from "react-redux";
import AddReview from "./AddReview";


export default function Reviews() {

  const reviews = useSelector((state) => state.reviews.allReviews)

  // console.log(reviews);

  return (
    <div>
      <div className="add-review container">
        {<AddReview />}
      </div>
      <h2 data-aos="fade-up" className="main-title my-28">Reviews</h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 gap-y-8 container">
        {reviews.map((review, index) => {
          return (
            <section key={index} data-aos='flip-up' className="cursor-pointer border h-full w-full shadow-xl m-2 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 ">
              <div className="flex">
                <img
                  className=" rounded-full w-11 h-11 m-2 mt-3"
                  src={review.imageUrl}
                  alt=""
                />
                <div className=" pl-2 m-2 mb-5">
                  <h2 className=" text-blue-600">{review.uerFullName}</h2>
                  <h5 className=" text-gray-400 text-sm normal-case">
                    {review.date}
                  </h5>
                </div>
              </div>
              <p className="m-2">
                {review.reviewText}
              </p>
              <button
                type="submit"
                className=" text-blue-400 m-2 hover:text-blue-300"
              >
                Agree
              </button>
              <button
                type="submit"
                className=" text-red-400 m-2 hover:text-red-300"
              >
                Disagree
              </button>
            </section>
          )
        })}
      </div>
    </div>
  );
}
