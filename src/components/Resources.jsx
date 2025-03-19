import React from "react";
import { motion } from "framer-motion";
import { FaWind, FaFire, FaWater, FaLeaf } from "react-icons/fa";

const Resources = () => {
  // Framer Motion Animation Variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-poppins text-[#4A4A4A] py-20 px-6">
      {/* Header */}
      <motion.header
        className="text-center mb-16 max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h1 className="text-4xl md:text-5xl font-playfair text-[#2E8B57] mb-4">
          Ayurvedic Body Types
        </h1>
        <p className="text-lg md:text-xl text-[#4A4A4A]">
          Discover the three primal energies—Vata, Pitta, and Kapha—that shape your physical, mental, and spiritual essence from birth.
        </p>
      </motion.header>

      {/* Body Types Sections */}
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Vata Body Type */}
        <motion.section
          className="bg-white rounded-2xl shadow-lg p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <div className="flex items-center gap-4 mb-6">
            <FaWind className="text-[#2E8B57] text-4xl" />
            <h2 className="text-3xl font-playfair text-[#2E8B57]">Vata Body Type</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={child}>
              <h3 className="text-xl font-medium text-[#2E8B57] mb-4 flex items-center gap-2">
                <FaLeaf className="text-sm" /> Physical Appearance
              </h3>
              <ul className="space-y-2 text-[#4A4A4A]">
                <li className="flex items-start gap-2">
                  <span className="text-[#2E8B57]">•</span> Tall, lean build with prominent joints.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2E8B57]">•</span> Dry, rough skin; wheatish complexion.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2E8B57]">•</span> Curly, scanty hair; thin lashes.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2E8B57]">•</span> Sunken eyes; cold extremities.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2E8B57]">•</span> Brittle nails; BMI 18-20.
                </li>
              </ul>
            </motion.div>
            <motion.div variants={child}>
              <h3 className="text-xl font-medium text-[#2E8B57] mb-4 flex items-center gap-2">
                <FaLeaf className="text-sm" /> Lifestyle Characteristics
              </h3>
              <ul className="space-y-2 text-[#4A4A4A]">
                <li className="flex items-start gap-2">
                  <span className="text-[#2E8B57]">•</span> Energetic but restless.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2E8B57]">•</span> Variable appetite; irregular eating.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2E8B57]">•</span> Light, interrupted sleep.
                </li>
              </ul>
            </motion.div>
          </div>
          <motion.img
            src="https://kairalicenters.com/wp-content/uploads/2024/04/Vata-Dosha-800x400.jpeg"
            alt="Vata Illustration"
            className="mt-6 w-full h-64 object-fit rounded-xl"
            variants={slideUp}
          />
        </motion.section>

        {/* Pitta Body Type */}
        <motion.section
          className="bg-white rounded-2xl shadow-lg p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <div className="flex items-center gap-4 mb-6">
            <FaFire className="text-[#2E8B57] text-4xl" />
            <h2 className="text-3xl font-playfair text-[#2E8B57]">Pitta Body Type</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={child}>
              <h3 className="text-xl font-medium text-[#2E8B57] mb-4 flex items-center gap-2">
                <FaLeaf className="text-sm" /> Physical Appearance
              </h3>
              <ul className="space-y-2 text-[#4A4A4A]">
                <li className="flex items-start gap-2">
                  <span className="text-[#2E8B57]">•</span> Moderate build; muscular.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2E8B57]">•</span> Warm, reddish skin; freckles easily.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2E8B57]">•</span> Soft, oily hair; early graying.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2E8B57]">•</span> Sharp, keen eyes.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2E8B57]">•</span> Strong nails; athletic frame.
                </li>
              </ul>
            </motion.div>
            <motion.div variants={child}>
              <h3 className="text-xl font-medium text-[#2E8B57] mb-4 flex items-center gap-2">
                <FaLeaf className="text-sm" /> Lifestyle Characteristics
              </h3>
              <ul className="space-y-2 text-[#4A4A4A]">
                <li className="flex items-start gap-2">
                  <span className="text-[#2E8B57]">•</span> Ambitious and driven.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2E8B57]">•</span> Strong appetite; intense thirst.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2E8B57]">•</span> Prefers cool climates.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2E8B57]">•</span> Irritable when hungry.
                </li>
              </ul>
            </motion.div>
          </div>
          <motion.img
            src="https://vediherbals.com/cdn/shop/articles/PittaDiet_63e349f2-ee44-42b3-9e60-2882151b1c8a.jpg?v=1739767600"
            alt="Pitta Illustration"
            className="mt-6 w-full h-64 object-fit rounded-xl"
            variants={slideUp}
          />
        </motion.section>

        {/* Kapha Body Type */}
        <motion.section
          className="bg-white rounded-2xl shadow-lg p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <div className="flex items-center gap-4 mb-6">
            <FaWater className="text-[#2E8B57] text-4xl" />
            <h2 className="text-3xl font-playfair text-[#2E8B57]">Kapha Body Type</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={child}>
              <h3 className="text-xl font-medium text-[#2E8B57] mb-4 flex items-center gap-2">
                <FaLeaf className="text-sm" /> Physical Appearance
              </h3>
              <ul className="space-y-2 text-[#4A4A4A]">
                <li className="flex items-start gap-2">
                  <span className="text-[#2E8B57]">•</span> Solid, heavy build; gains weight easily.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2E8B57]">•</span> Smooth, moist skin; pale tone.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2E8B57]">•</span> Thick, lustrous hair.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2E8B57]">•</span> Large, calm eyes.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2E8B57]">•</span> Strong nails; sturdy frame.
                </li>
              </ul>
            </motion.div>
            <motion.div variants={child}>
              <h3 className="text-xl font-medium text-[#2E8B57] mb-4 flex items-center gap-2">
                <FaLeaf className="text-sm" /> Lifestyle Characteristics
              </h3>
              <ul className="space-y-2 text-[#4A4A4A]">
                <li className="flex items-start gap-2">
                  <span className="text-[#2E8B57]">•</span> Calm and steady nature.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2E8B57]">•</span> Consistent appetite; loves routine.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2E8B57]">•</span> Prone to lethargy; needs exercise.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2E8B57]">•</span> Enjoys stability and comfort.
                </li>
              </ul>
            </motion.div>
          </div>
          <motion.img
            src="https://kairalicenters.com/wp-content/uploads/2024/04/Kapha-Dosha-800x400.jpeg"
            alt="Kapha Illustration"
            className="mt-6 w-full h-64 object-fit rounded-xl"
            variants={slideUp}
          />
        </motion.section>
      </div>
    </div>
  );
};

export default Resources;