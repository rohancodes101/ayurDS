 


// import React, { useState, useEffect } from "react";
// import { FaLeaf } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { Link } from "react-router-dom";

// const NavBar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isVisible, setIsVisible] = useState(true); // Tracks navbar visibility
//   const [lastScrollY, setLastScrollY] = useState(0); // Tracks last scroll position

//   // Toggle mobile menu
//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   // Handle scroll behavior
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY > lastScrollY && currentScrollY > 50) {
//         // Scrolling down and past 50px threshold
//         setIsVisible(false);
//       } else if (currentScrollY < lastScrollY) {
//         // Scrolling up
//         setIsVisible(true);
//       }

//       setLastScrollY(currentScrollY); // Update last scroll position
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll); // Cleanup
//   }, [lastScrollY]); // Dependency on lastScrollY

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full bg-offWhite shadow-lg p-2 transition-transform duration-300 z-50 mb-2 ${
//         isVisible ? "translate-y-0" : "-translate-y-full"
//       }`}
//     >
//       <div className="flex justify-between items-center max-w-screen-xl mx-auto">
//         {/* Left: Logo with Leaf Icon */}
//         <div className="flex items-center space-x-2">
//           <span className="text-3xl font-playfair text-seaGreen">AyurInsight</span>
//           <FaLeaf className="text-seaGreen text-xl" />
//         </div>

//         {/* Right: Hamburger Icon (Mobile) */}
//         <div className="flex items-center space-x-4 lg:hidden">
//           <GiHamburgerMenu
//             className="text-seaGreen text-3xl cursor-pointer"
//             onClick={toggleMenu}
//           />
//         </div>

//         {/* Navbar buttons (Visible on desktop) */}
//         <div className="hidden lg:flex space-x-4">
//           <Link
//             to="/"
//             className="bg-seaGreen text-black py-2 px-4 rounded-lg hover:border-2 hover:border-goldenYellow hover:bg-white hover:text-seaGreen transition duration-300"
//           >
//             Home
//           </Link>
//           <Link
//             to="/knowyourhealth"
//             className="bg-seaGreen text-black py-2 px-4 rounded-lg hover:border-2 hover:border-goldenYellow hover:bg-white hover:text-seaGreen transition duration-300"
//           >
//             Know Your Health
//           </Link>
//           <Link
//             to="/"
//             className="bg-seaGreen text-black py-2 px-4 rounded-lg hover:border-2 hover:border-goldenYellow hover:bg-white hover:text-seaGreen transition duration-300"
//           >
//             Prediction
//           </Link>
//         </div>
//       </div>

//       {/* Mobile Menu (Visible when hamburger is clicked) */}
//       {isMenuOpen && (
//         <div className="lg:hidden flex flex-col items-center mt-4">
//           <Link
//             to="/"
//             className="bg-seaGreen text-black py-2 px-4 rounded-lg w-full mb-2 hover:border-2 hover:border-goldenYellow hover:bg-white hover:text-seaGreen transition duration-300"
//           >
//             Home
//           </Link>
//           <Link
//             to="/knowyourhealth"
//             className="bg-seaGreen text-black py-2 px-4 rounded-lg w-full mb-2 hover:border-2 hover:border-goldenYellow hover:bg-white hover:text-seaGreen transition duration-300"
//           >
//             Know Your Health
//           </Link>
//           <Link
//             to="/"
//             className="bg-seaGreen text-black py-2 px-4 rounded-lg w-full mb-2 hover:border-2 hover:border-goldenYellow hover:bg-white hover:text-seaGreen transition duration-300"
//           >
//             Prediction
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default NavBar;
































import React, { useState } from "react";
import { FaLeaf, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";



const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle hamburger menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Animation variants for mobile menu
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 py-4 px-6">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
      <div className="flex items-center gap-2">
          <FaLeaf className="text-[#2E8B57] text-2xl" />
          <Link to="/">
            <h1 className="text-2xl font-playfair text-[#2E8B57]">AyurInsight</h1>
          </Link>
        </div>

        {/* Hamburger Icon (Visible on Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#2E8B57] text-2xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex gap-4">
          <Link
            to="/knowyourhealth"
            className="px-5 py-2 bg-[#2E8B57] text-white rounded-full hover:bg-[#FFD700] hover:text-[#2E8B57] transition-all duration-300"
          >
            Know Your Dosha
          </Link>
          <Link
            to="/knowmyhealth"
            className="px-5 py-2 bg-[#2E8B57] text-white rounded-full hover:bg-[#FFD700] hover:text-[#2E8B57] transition-all duration-300"
          >
            Discover Remedies
          </Link>
          <Link
            to="/resources"
            className="px-5 py-2 bg-[#2E8B57] text-white rounded-full hover:bg-[#FFD700] hover:text-[#2E8B57] transition-all duration-300"
          >
            Resources
          </Link>
        </div>
      </div>

      {/* Mobile Menu (Shown when hamburger is clicked) */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-white shadow-lg absolute top-16 left-0 w-full px-6 py-4 flex flex-col gap-4"
          initial="hidden"
          animate="visible"
          variants={menuVariants}
        >
          <Link
            to="/knowyourhealth"
            className="px-5 py-2 bg-[#2E8B57] text-white rounded-full text-center hover:bg-[#FFD700] hover:text-[#2E8B57] transition-all duration-300"
            onClick={toggleMenu}
          >
            Know Your Body
          </Link>
          <Link
            to="/knowmyhealth"
            className="px-5 py-2 bg-[#2E8B57] text-white rounded-full text-center hover:bg-[#FFD700] hover:text-[#2E8B57] transition-all duration-300"
            onClick={toggleMenu}
          >
            Discover Remedies
          </Link>
          <Link
            to="/resources"
            className="px-5 py-2 bg-[#2E8B57] text-white rounded-full text-center hover:bg-[#FFD700] hover:text-[#2E8B57] transition-all duration-300"
            onClick={toggleMenu}
          >
            Resources
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

export default NavBar;
