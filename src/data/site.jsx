import banner1 from '../assets/banners/BANNER1.jpg';
import banner2 from '../assets/banners/BANNER2.jpg';
import banner3 from '../assets/banners/BANNER3.jpg';
import banner4 from '../assets/banners/BANNER4.jpg';
import banner5 from '../assets/banners/BANNER5.jpg';
import banner6 from '../assets/banners/BANNER6.jpg';

import food1 from '../assets/images/food1.jpeg';
import food2 from '../assets/images/food2.jpeg';
import food3 from '../assets/images/food3.jpg';
import food4 from '../assets/images/food4.jpg';
import food5 from '../assets/images/food5.jpg';
import food6 from '../assets/images/food6.jpeg';
import food7 from '../assets/images/food7.png';
import food8 from '../assets/images/food8.png';
import food9 from '../assets/images/food9.png';
import food10 from '../assets/images/food10.png';
import food11 from '../assets/images/food11.jpg';
import food12 from '../assets/images/food12.jpeg';
import food13 from '../assets/images/food13.jpeg';
import food14 from '../assets/images/food14.jpeg';
import food15 from '../assets/images/food15.jpg';
import food16 from '../assets/images/food16.jpeg';
import food17 from '../assets/images/food17.jpg';
import food18 from '../assets/images/food18.jpeg';
import food19 from '../assets/images/food19.jpeg';
import food20 from '../assets/images/food20.jpeg';
import food21 from '../assets/images/food21.jpeg';

// Madras Cafe — Sweet Jesus style data

export const HERO_SLIDES = [
  {
    id: "dosa",
    image:
      banner1,
    eyebrow: "Slide 01 · The Dosa",
    title: ["Crispy.", "Buttered.", "Borderline holy."],
    subtitle:
      "Hand-stretched, ghee-roasted, served with three chutneys and a long memory.",
    cta: "Order a Dosa",
  },
  {
    id: "filter-coffee",
    image:
      banner2,
    eyebrow: "Slide 02 · Filter Coffee",
    title: ["The foam,", "the brass,", "the ritual."],
    subtitle:
      "Single-estate Chikmagalur beans poured between brass davarah until the foam stands up.",
    cta: "See the menu",
  },
  {
    id: "biryani",
    image:
      banner3,
    eyebrow: "Slide 03 · Chettinad",
    title: ["Slow-roasted.", "Hand-pounded.", "Served loud."],
    subtitle:
      "Aged seeraga samba rice, twenty-two spices, and a cast-iron handi we have used since 1989.",
    cta: "Find a location",
  },
];

export const STORY_IMAGE = banner4;

export const INTERIOR_IMAGE = banner5;

// Filterable menu (Sweet Jesus card grid)
export const MENU_CATEGORIES = [
  "All",
  "Breakfast",
  "Lunch",
  "Dinner",
  "Filter Coffee",
];

export const MENU_ITEMS = [
  {
    id: "ghee-roast",
    name: "Ghee Roast Dosa",
    desc: "Hand-stretched. Cow-ghee crusted. Three chutneys, sambar.",
    price: "₹ 320",
    category: "Breakfast",
    image:
      banner1,
    tag: "Signature",
  },
  {
    id: "idli-sambar",
    name: "Idli & Sambar",
    desc: "Steamed pillowy rice cakes, twelve-vegetable sambar.",
    price: "₹ 240",
    category: "Breakfast",
    image:
      food2,
    tag: "Vegan",
  },
  {
    id: "medu-vada",
    name: "Medu Vada",
    desc: "Crisp lentil doughnuts. Coconut chutney. Sambar.",
    price: "₹ 220",
    category: "Breakfast",
    image:
      food3,
    tag: "Crunchy",
  },
  {
    id: "thali",
    name: "Heritage Thali",
    desc: "Twelve regional preparations on a banana leaf.",
    price: "₹ 880",
    category: "Lunch",
    image:
      food4,
    tag: "Bestseller",
  },
  {
    id: "biryani",
    name: "Chettinad Biryani",
    desc: "Aged seeraga samba rice, hand-pounded masala, slow-cooked.",
    price: "₹ 640",
    category: "Lunch",
    image:
      banner3,
    tag: "Spicy",
  },
  {
    id: "pongal",
    name: "Ven Pongal",
    desc: "Slow-cooked rice & yellow lentils, black pepper, ghee, curry leaf.",
    price: "₹ 260",
    category: "Breakfast",
    image:
      food5,
    tag: "Comfort",
  },
  {
    id: "kothu-parotta",
    name: "Kothu Parotta",
    desc: "Shredded layered parotta, masala, egg, on a flat tava.",
    price: "₹ 380",
    category: "Dinner",
    image:
      food6,
    tag: "Loud",
  },
  {
    id: "appam-stew",
    name: "Appam & Stew",
    desc: "Lacy fermented rice pancake. Coconut-curry vegetable stew.",
    price: "₹ 360",
    category: "Dinner",
    image:
      food3,
    tag: "Coastal",
  },
  {
    id: "filter-coffee",
    name: "Madras Filter Coffee",
    desc: "Single-estate Chikmagalur beans. Brass davarah. Foam to the brim.",
    price: "₹ 180",
    category: "Filter Coffee",
    image:
      banner2,
    tag: "Iconic",
  },
  {
    id: "bella-coffee",
    name: "Bella Coffee",
    desc: "Filter coffee sweetened with palm jaggery. No sugar.",
    price: "₹ 200",
    category: "Filter Coffee",
    image:
      food7,
    tag: "House",
  },
  {
    id: "iced-filter",
    name: "Iced Filter Latte",
    desc: "Cold-brewed filter decoction, slow-poured milk, brown sugar.",
    price: "₹ 240",
    category: "Filter Coffee",
    image:
      food8,
    tag: "Cold",
  },
  {
    id: "bisi-bele",
    name: "Bisi Bele Bath",
    desc: "Karnataka one-pot of rice, lentils, tamarind, twelve spices.",
    price: "₹ 360",
    category: "Lunch",
    image:
      food9,
    tag: "Hearty",
  },
];

// Locations data
export const LOCATIONS = [
  {
    id: "mylapore",
    city: "Chennai",
    name: "Madras Cafe — Mylapore",
    address: "14, Luz Church Road, Mylapore, Chennai 600 004",
    phone: "+91 44 2499 1814",
    hours: "Tue–Sun · 7:30 — 23:00",
    flagship: true,
    coords: { bbox: "80.2640,13.0335,80.2735,13.0395", marker: "13.0365,80.2687" },
    image:
      food10,
  },
  {
    id: "indiranagar",
    city: "Bengaluru",
    name: "Madras Cafe — Indiranagar",
    address: "117, 12th Main, Indiranagar, Bengaluru 560 008",
    phone: "+91 80 4123 8821",
    hours: "Daily · 7:00 — 23:30",
    flagship: false,
    coords: { bbox: "77.6300,12.9700,77.6450,12.9800", marker: "12.9755,77.6377" },
    image:
      food11,
  },
  {
    id: "fort-kochi",
    city: "Kochi",
    name: "Madras Cafe — Fort Kochi",
    address: "8, Princess Street, Fort Kochi 682 001",
    phone: "+91 484 221 9988",
    hours: "Wed–Mon · 8:00 — 22:30",
    flagship: false,
    coords: { bbox: "76.2400,9.9620,76.2480,9.9700", marker: "9.9659,76.2440" },
    image:
      food12,
  },
  {
    id: "bandra",
    city: "Mumbai",
    name: "Madras Cafe — Bandra West",
    address: "212, Hill Road, Bandra West, Mumbai 400 050",
    phone: "+91 22 2640 7711",
    hours: "Daily · 8:00 — 24:00",
    flagship: false,
    coords: { bbox: "72.8200,19.0500,72.8350,19.0600", marker: "19.0544,72.8270" },
    image:
      food13,
  },
];

export const FAB_LABEL = "Order Online";


