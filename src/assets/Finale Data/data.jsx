import { nanoid } from "@reduxjs/toolkit"
import mfn1 from "./clothes/Mfns/1/1.jpg"
import mfn2 from "./clothes/Mfns/2/1.jpg"
import mfn3 from "./clothes/Mfns/3/1.jpg"
import mfn4 from "./clothes/Mfns/4/1.jpg"
import mfn5 from "./clothes/Mfns/5/1.jpg"

export const categories = ['Clothes', 'Makeup', 'Self Care', 'Shoes & bags']

export const products = [
    {
        id: nanoid(),
        img: mfn1,
        name: "BASIC CHARCOAL HOODIE",
        text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
        brand: "Mfns",
        color: ["grey"],
        price: 880,
        category: 'clothes'
    },
    {
        id: nanoid(),
        img: mfn2,
        name: "STITCHED OLIVE SWEATPANTS",
        text: "The new MFNS Sweatpants are a sleek & seamless design for the perfect loose fit. Made from 100% Breathable Egyptian Cotton.",
        brand: "Mfns",
        color: ["black", "gray", "green"],
        price: 850,
        category: 'clothes'
    },
    {
        id: nanoid(),
        img: mfn3,
        name: "STITCHED BLUSH HOODIE",
        text: "The new MFNS Washed Hoodies are a sleek & seamless design for the perfect loose fit. Made from 100% Breathable Egyptian Cotton and loop back hood.",
        brand: "Mfns",
        color: ["pink"],
        price: 950,
        category: 'clothes'
    },
    {
        id: nanoid(),
        img: mfn4,
        name: "STITCHED CHARCOAL HOODIE",
        text: "The new MFNS Washed Hoodies are a sleek & seamless design for the perfect loose fit. Made from 100% Breathable Egyptian Cotton and loop back hood.",
        brand: "Mfns",
        color: ["black",],
        price: 950,
        category: 'clothes'
    },
    {
        id: nanoid(),
        img: mfn5,
        name: "BASIC OLIVE SWEATPANTS",
        text: "The new MFNS Sweatpants are a sleek & seamless design for the perfect loose fit. Made from 100% Breathable Egyptian Cotton.",
        brand: "Mfns",
        color: ["black", "gray", "green"],
        price: 850,
        category: 'clothes'
    },

]