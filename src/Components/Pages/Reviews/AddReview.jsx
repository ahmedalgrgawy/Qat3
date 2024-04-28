import { useState } from 'react'
import { useDispatch } from "react-redux";
import { useUser } from '@clerk/clerk-react';
import { reviewAdded } from '../../../features/reviews/reviewSlice';

const AddReview = () => {

    const { user } = useUser();

    const dispatch = useDispatch()

    const [reviewText, setReviewText] = useState('');

    const onReviewTextChange = e => setReviewText(e.target.value)

    const onPostBtnClicked = () => {
        if (reviewText) {
            dispatch(
                reviewAdded(reviewText, user.fullName, user.id, user.imageUrl)
            )
            setReviewText('')
        }
    }

    const canPost = Boolean(reviewText);

    return (
        <section className='my-16 flex flex-col justify-center items-center gap-y-5'>
            <h2 data-aos='fade-down' className='font-bold text-[30px] w-fit mx-auto mt-24 mb-[50px] relative'>Hello, <span className='text-main'>{user.firstName}</span></h2>
            <form data-aos='fade-up' className='flex flex-col justify-center items-center gap-y-5'>
                <textarea className='mb-5 outline-none border border-main-darker resize-none w-[200px] h-[200px] md:w-[400px] md:h-[250px] p-5 leading-5'
                    id="reviewText"
                    name="reviewText"
                    value={reviewText}
                    onChange={onReviewTextChange}
                />
                <button className='second-btn cursor-pointer'
                    type="button" onClick={onPostBtnClicked} disabled={!canPost}
                >Post Review</button>
            </form>
        </section>
    )
}

export default AddReview