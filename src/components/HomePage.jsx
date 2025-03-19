// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaWind,
//   FaFire,
//   FaWater,
//   FaCheckCircle,
//   FaTwitter,
//   FaInstagram,
// } from "react-icons/fa";

// // Carousel images (replace with actual image paths or URLs)
// const carouselSlides = [
//   {
//     title: "What is Ayurveda?",
//     text: "Discover the ancient science of holistic healing tailored to your unique body and mind.",
//     image: "https://static.vecteezy.com/system/resources/previews/035/978/179/non_2x/ai-generated-indian-ayurveda-herbal-medicine-free-photo.jpg", // Replace with actual image
//     ctaButtons: [
//       { text: "Know Your Body Type", link: "/basic-checkup" },
//       { text: "Predict Your Health", link: "/health-prediction" },
//     ],
//   },
//   {
//     title: "Why Ayurveda Matters",
//     text: "From fever to fatigue, find remedies designed for YOU.",
//     image: "https://assets.aboutamazon.com/dims4/default/f3acdd0/2147483647/strip/true/crop/1279x720+0+0/resize/1240x698!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F13%2F93%2Ffd28d0a94e85a5cb06c670e751d2%2Fblog2-1280x720.jpg", // Replace with actual image
//   },
//   {
//     title: "Personalized Wellness",
//     text: "Unlock your Dosha and health insights today.",
//     image: "https://media.post.rvohealth.io/wp-content/uploads/2024/02/Ayurvedic-header.jpg", // Replace with actual image
//   },
// ];

// const HomePage = () => {
//   // State for carousel
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Auto-scroll for carousel
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
//     }, 5000); // Change slide every 5 seconds
//     return () => clearInterval(timer);
//   }, []);

//   // Animation variants for Framer Motion
//   const slideUp = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
//   };

//   const fadeIn = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 1 } },
//   };

//   const staggerChildren = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//       },
//     },
//   };

//   const child = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <div className="min-h-screen bg-offwhite font-sans text-sea-green mt-8">
//       {/* Header Section */}
//       <header className="bg-sea-green text-offwhite py-6 text-center">
//         <h1 className="text-4xl font-playfair">AyurInsight</h1>
//         <p className="mt-2">Your Journey to Holistic Wellness</p>
//       </header>

//       {/* Section 0: Carousel */}
//       <section className="relative w-full h-[60vh] overflow-hidden">
//         <AnimatePresence>
//           <motion.div
//             key={currentSlide}
//             className="absolute inset-0 flex items-center justify-center bg-cover bg-center"
//             style={{ backgroundImage: `url(${carouselSlides[currentSlide].image})` }}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5 }}
//             onMouseEnter={() => clearInterval()} // Pause on hover
//           >
//             <div className="text-center text-offwhite bg-transparent bg-opacity-50 p-6 rounded-lg">
//               <motion.h2
//                 className="text-3xl font-playfair mb-4 text-white"
//                 variants={slideUp}
//                 initial="hidden"
//                 animate="visible"
//               >
//                 {carouselSlides[currentSlide].title}
//               </motion.h2>
//               <motion.p
//                 className="text-lg mb-6 text-white"
//                 variants={slideUp}
//                 initial="hidden"
//                 animate="visible"
//               >
//                 {carouselSlides[currentSlide].text}
//               </motion.p>
//               {carouselSlides[currentSlide].ctaButtons && (
//                 <div className="flex justify-center gap-4 text-white">
//                   {carouselSlides[currentSlide].ctaButtons.map((btn, index) => (
//                     <motion.a
//                       key={index}
//                       href={btn.link}
//                       className="px-6 py-3 bg-sea-green text-white text-lg rounded-lg hover:bg-opacity-80 border border-white cursor-pointer"
//                       variants={slideUp}
//                       initial="hidden"
//                       animate="visible"
//                     >
//                       {btn.text}
//                     </motion.a>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         {/* Carousel Dots */}
//         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
//           {carouselSlides.map((_, index) => (
//             <button
//               key={index}
//               className={`w-3 h-3 rounded-full ${
//                 currentSlide === index ? "bg-sea-green" : "bg-offwhite opacity-50"
//               }`}
//               onClick={() => setCurrentSlide(index)}
//             />
//           ))}
//         </div>
//       </section>

//       {/* Section 1: Know Your Body */}
//       <section className="py-16 px-8 flex flex-col md:flex-row items-center gap-8">
//         <div className="md:w-1/2">
//           <motion.h2
//             className="text-3xl font-playfair text-sea-green mb-6"
//             variants={fadeIn}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             Understand Your Unique Constitution
//           </motion.h2>
//           <motion.div
//             className="grid grid-cols-1 md:grid-cols-3 gap-6"
//             variants={staggerChildren}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             {/* Vata Card */}
//             <motion.div
//               className="p-6 bg-offwhite shadow-lg rounded-lg"
//               variants={child}
//               whileHover={{ scale: 1.05 }}
//             >
//               <FaWind className="text-sea-green text-4xl mb-4" />
//               <h3 className="text-xl font-playfair mb-2">Vata</h3>
//               <p>Characterized by air and space, Vata governs movement and creativity.</p>
//             </motion.div>
//             {/* Pitta Card */}
//             <motion.div
//               className="p-6 bg-offwhite shadow-lg rounded-lg"
//               variants={child}
//               whileHover={{ scale: 1.05 }}
//             >
//               <FaFire className="text-sea-green text-4xl mb-4" />
//               <h3 className="text-xl font-playfair mb-2">Pitta</h3>
//               <p>Driven by fire and water, Pitta controls digestion and metabolism.</p>
//             </motion.div>
//             {/* Kapha Card */}
//             <motion.div
//               className="p-6 bg-offwhite shadow-lg rounded-lg"
//               variants={child}
//               whileHover={{ scale: 1.05 }}
//             >
//               <FaWater className="text-sea-green text-4xl mb-4" />
//               <h3 className="text-xl font-playfair mb-2">Kapha</h3>
//               <p>Made of earth and water, Kapha provides structure and stability.</p>
//             </motion.div>
//           </motion.div>
//         </div>
//         <motion.div
//           className="md:w-1/2"
//           variants={fadeIn}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           <img
//             src="https://myyogaayurveda.com/wp-content/uploads/2023/08/Know-Three-Doshas-Vata-Pitta-and-Kapha-in-Ayurveda.webp" // Replace with actual image
//             alt="Dosha Anatomy"
//             className="w-full h-auto"
//           />
//         </motion.div>
//       </section>

//       {/* Section 2: Explore Ayurvedic Wisdom */}
//       <section className="py-16 px-8 bg-sea-green text-offwhite flex flex-col md:flex-row items-center gap-8">
//         <motion.div
//           className="md:w-1/2 order-2 md:order-1"
//           variants={fadeIn}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           <img
//             src="https://www.thermofisher.com/blog/behindthebench/wp-content/uploads/sites/9/2016/01/Ayurveda-making.jpg" // Replace with actual image
//             alt="Herbal Leaf"
//             className="w-full h-auto animate-spin-slow"
//           />
//         </motion.div>
//         <motion.div
//           className="md:w-1/2 order-1 md:order-2"
//           variants={fadeIn}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           <h2 className="text-3xl font-playfair mb-6">Ancient Knowledge, Modern Solutions</h2>
//           <p className="text-lg">
//             Harness the power of Ayurvedic herbs and formulations, tailored to address symptoms like
//             cough, fever, and more, blending timeless wisdom with modern needs.
//           </p>
//         </motion.div>
//       </section>

//       {/* Section 3: Why Choose AyurInsight */}
//       <section className="py-16 px-8">
//         <motion.h2
//           className="text-3xl font-playfair text-sea-green mb-6 text-center"
//           variants={fadeIn}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           Your Path to Wellness Starts Here
//         </motion.h2>
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-3 gap-8"
//           variants={staggerChildren}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           <motion.div className="flex items-center gap-4" variants={child}>
//             <FaCheckCircle className="text-sea-green text-2xl" />
//             <p>Accurate Dosha Analysis</p>
//           </motion.div>
//           <motion.div className="flex items-center gap-4" variants={child}>
//             <FaCheckCircle className="text-sea-green text-2xl" />
//             <p>Symptom-Based Predictions</p>
//           </motion.div>
//           <motion.div className="flex items-center gap-4" variants={child}>
//             <FaCheckCircle className="text-sea-green text-2xl" />
//             <p>Trusted Ayurvedic Sources</p>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* Footer */}
//       <footer className="py-6 bg-offwhite text-sea-green text-center">
//         <p>© 2025 AyurInsight. All rights reserved.</p>
//         <div className="flex justify-center gap-4 mt-4">
//           <motion.a
//             href="https://twitter.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.2 }}
//           >
//             <FaTwitter className="text-sea-green text-2xl" />
//           </motion.a>
//           <motion.a
//             href="https://instagram.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.2 }}
//           >
//             <FaInstagram className="text-sea-green text-2xl" />
//           </motion.a>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;














import { Link } from 'react-router-dom';

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLeaf,
  FaWind,
  FaFire,
  FaWater,
  FaCheckCircle,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import NavBar from './NavBar';

// Carousel slides with modernized content
const carouselSlides = [
  {
    title: "Explore Ayurveda",
    text: "Unlock the timeless science of holistic healing, personalized for your mind and body.",
    image: "https://static.vecteezy.com/system/resources/previews/035/978/179/non_2x/ai-generated-indian-ayurveda-herbal-medicine-free-photo.jpg",
    ctaButtons: [
      { text: "Discover Your Dosha", link: "/knowyourhealth" },
      { text: "Predict Health", link: "/knowmyhealth" },
    ],
  },
  {
    title: "Healing for Today",
    text: "Tailored remedies for modern ailments—fever, stress, and beyond.",
    image: "https://assets.aboutamazon.com/dims4/default/f3acdd0/2147483647/strip/true/crop/1279x720+0+0/resize/1240x698!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F13%2F93%2Ffd28d0a94e85a5cb06c670e751d2%2Fblog2-1280x720.jpg",
  },
  {
    title: "Your Wellness Journey",
    text: "Step into balance with insights into your unique Dosha.",
    image: "https://media.post.rvohealth.io/wp-content/uploads/2024/02/Ayurvedic-header.jpg",
  },
];

// Educational content for scrollable section
const eduContent = [
  {
    title: "What is Ayurveda?",
    description: "A 5,000-year-old system of natural healing from India, focusing on balance in body, mind, and spirit.",
    icon: <FaLeaf className="text-[#2E8B57] text-3xl" />,
  },
  {
    title: "The Five Elements",
    description: "Ether, Air, Fire, Water, and Earth form the basis of all life and influence your Dosha.",
    icon: <FaWater className="text-[#2E8B57] text-3xl" />,
  },
  {
    title: "Daily Routines",
    description: "Dinacharya aligns your day with nature’s rhythms for optimal health and vitality.",
    icon: <FaWind className="text-[#2E8B57] text-3xl" />,
  },
  {
    title: "Herbal Remedies",
    description: "Plants like Turmeric, Ashwagandha, and Tulsi support healing and balance.",
    icon: <FaFire className="text-[#2E8B57] text-3xl" />,
  },
  {
    title: "Mindful Eating",
    description: "Food as medicine—eat according to your Dosha for harmony and digestion.",
    icon: <FaLeaf className="text-[#2E8B57] text-3xl" />,
  },
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-scroll carousel with pause on hover
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 6000); // 6 seconds for a smoother pace
    return () => clearInterval(timer);
  }, []);

  // Framer Motion animation variants
  const slideUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2, ease: "easeInOut" } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  const child = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-poppins text-[#4A4A4A] overflow-x-hidden">
      {/* Navbar */}
      <NavBar/>
      {/* <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FaLeaf className="text-[#2E8B57] text-2xl" />
          <h1 className="text-2xl font-playfair text-[#2E8B57]">AyurInsight</h1>
        </div>
        <div className="flex gap-4">
          <Link
            to="/knowyourhealth"
            className="px-5 py-2 bg-[#2E8B57] text-white rounded-full hover:bg-[#FFD700] hover:text-[#2E8B57] transition-all duration-300"
          >
            Know Your Body
          </Link>
          <a
            href="/health-prediction"
            className="px-5 py-2 bg-[#2E8B57] text-white rounded-full hover:bg-[#FFD700] hover:text-[#2E8B57] transition-all duration-300"
          >
            Health Prediction
          </a>
        </div>
      </nav> */}

      {/* Hero Section: Carousel */}
      <section className="relative w-full h-[80vh] mt-16">
        <AnimatePresence>
          <motion.div
            key={currentSlide}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${carouselSlides[currentSlide].image})` }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-transparent bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white px-6">
                <motion.h2
                  className="text-5xl md:text-6xl font-playfair mb-4"
                  variants={slideUp}
                  initial="hidden"
                  animate="visible"
                >
                  {carouselSlides[currentSlide].title}
                </motion.h2>
                <motion.p
                  className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
                  variants={slideUp}
                  initial="hidden"
                  animate="visible"
                >
                  {carouselSlides[currentSlide].text}
                </motion.p>


{carouselSlides[currentSlide].ctaButtons && (
  <div className="flex justify-center gap-6">
    {carouselSlides[currentSlide].ctaButtons.map((btn, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.1 }}
        variants={slideUp}
        initial="hidden"
        animate="visible"
      >
        <Link
          to={btn.link} // changed from href to to for react-router-dom
          className="px-6 py-3 bg-[#2E8B57] text-white rounded-full hover:bg-[#FFD700] hover:text-[#2E8B57] transition-all duration-300"
        >
          {btn.text}
        </Link>
      </motion.div>
    ))}
  </div>
)}
                
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        {/* Carousel Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-[#FFD700] scale-125" : "bg-white opacity-60"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Section 1: Know Your Body */}
      <section className="py-20 px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          className="md:w-1/2"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-playfair text-[#2E8B57] mb-6">
            Your Unique Constitution
          </h2>
          <p className="text-lg text-[#4A4A4A] mb-8">
            Discover the balance of Vata, Pitta, and Kapha that defines your body and mind.
          </p>
          <motion.div
            className="grid grid-cols-1 gap-6"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="p-6 bg-white rounded-xl shadow-lg flex items-center gap-4"
              variants={child}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              <FaWind className="text-[#2E8B57] text-3xl" />
              <div>
                <h3 className="text-xl font-playfair text-[#2E8B57]">Vata</h3>
                <p className="text-sm">Air & Space: Movement, creativity, and energy.</p>
              </div>
            </motion.div>
            <motion.div
              className="p-6 bg-white rounded-xl shadow-lg flex items-center gap-4"
              variants={child}
              whileHover={{ scale: 1.03 }}
            >
              <FaFire className="text-[#2E8B57] text-3xl" />
              <div>
                <h3 className="text-xl font-playfair text-[#2E8B57]">Pitta</h3>
                <p className="text-sm">Fire & Water: Digestion, intellect, and passion.</p>
              </div>
            </motion.div>
            <motion.div
              className="p-6 bg-white rounded-xl shadow-lg flex items-center gap-4"
              variants={child}
              whileHover={{ scale: 1.03 }}
            >
              <FaWater className="text-[#2E8B57] text-3xl" />
              <div>
                <h3 className="text-xl font-playfair text-[#2E8B57]">Kapha</h3>
                <p className="text-sm">Earth & Water: Stability, strength, and calm.</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className="md:w-1/2"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src="https://myyogaayurveda.com/wp-content/uploads/2023/08/Know-Three-Doshas-Vata-Pitta-and-Kapha-in-Ayurveda.webp"
            alt="Dosha Illustration"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </motion.div>
      </section>

      {/* Section 2: Ayurvedic Wisdom */}
      <section className="py-20 px-6 md:px-12 bg-[#2E8B57] text-white flex flex-col md:flex-row items-center gap-12">
        <motion.div
          className="md:w-1/2 order-2 md:order-1"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src="https://www.thermofisher.com/blog/behindthebench/wp-content/uploads/sites/9/2016/01/Ayurveda-making.jpg"
            alt="Herbal Wisdom"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </motion.div>
        <motion.div
          className="md:w-1/2 order-1 md:order-2"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-playfair mb-6">Timeless Wisdom, Modern Healing</h2>
          <p className="text-lg">
            Experience the synergy of ancient Ayurvedic herbs and cutting-edge personalization for today’s health challenges.
          </p>
        </motion.div>
      </section>

      {/* Section 3: Why AyurInsight */}
      <section className="py-20 px-6 md:px-12 text-center">
        <motion.h2
          className="text-4xl font-playfair text-[#2E8B57] mb-10"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Why Choose AyurInsight?
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="flex flex-col items-center gap-4" variants={child}>
            <FaCheckCircle className="text-[#2E8B57] text-3xl" />
            <p className="text-lg font-medium">Precision Dosha Insights</p>
          </motion.div>
          <motion.div className="flex flex-col items-center gap-4" variants={child}>
            <FaCheckCircle className="text-[#2E8B57] text-3xl" />
            <p className="text-lg font-medium">Smart Symptom Matching</p>
          </motion.div>
          <motion.div className="flex flex-col items-center gap-4" variants={child}>
            <FaCheckCircle className="text-[#2E8B57] text-3xl" />
            <p className="text-lg font-medium">Rooted in Tradition</p>
          </motion.div>
        </motion.div>
      </section>



{/* New Section: Educational Scrollable Content */}
<section className="py-20 px-6 md:px-12 bg-[#FFF8E7]">
        <motion.h2
          className="text-4xl font-playfair text-[#2E8B57] mb-10 text-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Learn Ayurveda
        </motion.h2>
        <div className="overflow-x-auto scrollbar-hide">
          <motion.div
            className="flex gap-6 pb-6"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {eduContent.map((item, index) => (
              <motion.div
                key={index}
                className="min-w-[280px] bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
                variants={child}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                {item.icon}
                <h3 className="text-xl font-playfair text-[#2E8B57] mt-4 mb-2">{item.title}</h3>
                <p className="text-sm text-[#4A4A4A]">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white text-[#2E8B57] text-center">
        <p className="text-sm">© 2025 AyurInsight. All Rights Reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <FaTwitter className="text-[#2E8B57] text-2xl" />
          </motion.a>
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <FaInstagram className="text-[#2E8B57] text-2xl" />
          </motion.a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;