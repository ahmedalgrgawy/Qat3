import randomImg from "../../assets/r_img/image1.jpeg"
import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialStates = [
    {
        id: '1',
        uerFullName: 'Monica Green',
        imageUrl: randomImg,
        reviewText: 'It was very good sale',
        date: '2 weeks ago',
        reactions: {
            like: 5,
            dislike: 2
        },
    },
    {
        id: '2',
        uerFullName: 'Monica Green',
        imageUrl: randomImg,
        reviewText: 'It was very good sale',
        date: '1 weeks ago',
        reactions: {
            like: 5,
            dislike: 2
        },

    },
    {
        id: '3',
        uerFullName: 'Monica Green',
        imageUrl: randomImg,
        reviewText: 'It was very good sale',
        date: '2 weeks ago',
        reactions: {
            like: 5,
            dislike: 2
        },

    }
]


const reviewSlice = createSlice({
    name: 'reviews',
    initialState: {
        allReviews: JSON.parse(localStorage.getItem('reviews')) || initialStates,
    },
    reducers: {
        reviewAdded: {
            reducer(state, action) {

                state.allReviews.push(action.payload)

                let getReview = JSON.parse(localStorage.getItem('reviews'));

                if (getReview === null) {
                    localStorage.setItem('reviews', JSON.stringify([action.payload]))
                } else {
                    const getCurrentReviews = localStorage.getItem('reviews');

                    const currentReview = JSON.parse(getCurrentReviews);

                    currentReview.push(action.payload);

                    localStorage.setItem('reviews', JSON.stringify(currentReview))
                }
            },
            prepare(reviewText, uerFullName, userId, imageUrl) {
                return {
                    payload: {
                        id: nanoid(),
                        uerFullName,
                        imageUrl,
                        reviewText: reviewText,
                        date: `${new Date().getDate()} / ${new Date().getMonth()} / ${new Date().getFullYear()}`,
                        userId,
                        reactions: {
                            like: 0,
                            dislike: 0
                        }
                    }
                }
            }
        }
    }
});

export const { reviewAdded } = reviewSlice.actions;

export default reviewSlice.reducer;