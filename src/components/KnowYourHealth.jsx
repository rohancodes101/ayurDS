 



// import React, { useState, useEffect  } from "react";
// import { FaWind, FaUser, FaSpinner, FaMagic} from "react-icons/fa";
// import { motion } from "framer-motion";

// const questions = [
//   { question: "What is Your Body Frame?", options: ["Thin", "Broad", "Medium"] },
//   { question: "What is Your Body Weight?", options: ["Low", "Over Weight", "Moderate"] },
//   { question: "What is Your Skin?", options: ["Dry", "Thick", "Soft"] },
//   { question: "What is Your Hair?", options: ["Dry", "Soft", "Strong"] },
//   { question: "What is Your Teeth?", options: ["Big", "Strong"] },
//   { question: "What is Your Eyes?", options: ["Small", "Thick", "Big"] },
//   { question: "What is Your Nails?", options: ["Brittle", "Soft", "Thick"] },
//   { question: "What is Your Tongue?", options: ["Cracked", "Red", "White"] },
//   { question: "What is Your Food Habits?", options: ["Frequent", "Excessive", "Stable"] },
//   { question: "What is Your Thirst?", options: ["Variable", "Excessive", "Scanty"] },
//   { question: "What is Your Bowl?", options: ["Dry", "Soft", "Oily"] },
//   { question: "What is Your Physical Activities?", options: ["Very Active", "Moderate", "Lethargic"] },
//   { question: "What is Your Tolerance for Seasonal Weather?", options: ["Cold Intolerant", "Heat Intolerant", " Heat and Cold Intolerant"] },
//   { question: "What is Your Communication?", options: ["Less Vocal", "Sharp", "Talkative"] },
//   { question: "What is Your Memory?", options: ["Slow", "Moderate", "Quick"] },
//   { question: "What is Your Emotional Temperament?", options: ["Aggressive", "Fearful", "Calm"] },
//   { question: "What is Your Pulse?", options: ["Moderate", "Feeble", "Slow"] },
//   { question: "What is Your Body Temperature?", options: ["Moderate", "High", "Low"] },
// ];

// const KnowYourHealth = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     age: "",
//     gender: "",
//     answers: Array(18).fill(""),
//   });
//   const [data, setData] = useState([]);


//   const keyMapping = {
//     0: "Body Frame",
//     1: "Body weight",
//     2: "Skin",
//     3: "Hair",
//     4: "Teeth",
//     5: "Eyes",
//     6: "Nails",
//     7: "Tongue",
//     8: "Food Habits",
//     9: "Thirst",
//     10: "Bowl",
//     11: "Physical Activities",
//     12: "Tolerance for Seasonal Weather",
//     13: "Communication",
//     14: "Memory",
//     15: "Emotional Temperament",
//     16: "Pulse",
//     17: "Body Temperature",
//   };


//   useEffect(() => {
//     fetch("/output.json")
//       .then((response) => response.json())
//       .then((jsonData) => {
//         console.log("Loaded JSON:", jsonData);
//         setData(jsonData);
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);
//   const [result, setResult] = useState(null);
//   const [isLoading, setIsLoading] = useState(false); // For spinner

//   const handleInputChange = (e, index) => {
//     const newAnswers = [...formData.answers];
//     newAnswers[index] = e.target.value;
//     setFormData({ ...formData, answers: newAnswers });
//   };

//   const handlePersonalInfoChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // const handleSubmit = () => {
//   //   setIsLoading(true);
//   //   setTimeout(() => {
//   //     const dosha = "Vata"; // Placeholder logic (replace with real logic later)
//   //     setResult(dosha);
//   //     setIsLoading(false);
//   //   }, 1500); // 1.5-second delay for spinner
//   // };

//   // const handleSubmit = () => {
//   //   setIsLoading(true);
//   //   setTimeout(() => {
//   //     console.log("User Answers:", formData.answers); // Debug line
//   //     let matchingDosha = null;
//   //     for (const item of data) {
//   //       console.log("Comparing with:", item); // Debug line
//   //       if (
//   //         item["Body Frame"] === formData.answers[0] &&
//   //         item["Body weight"] === formData.answers[1] &&
//   //         item["Skin"] === formData.answers[2] &&
//   //         item["Hair"] === formData.answers[3] &&
//   //         item["Teeth"] === formData.answers[4] &&
//   //         item["Eyes"] === formData.answers[5] &&
//   //         item["Nails"] === formData.answers[6] &&
//   //         item["Tongue"] === formData.answers[7] &&
//   //         item["Food Habits"] === formData.answers[8] &&
//   //         item["Thirst"] === formData.answers[9] &&
//   //         item["Bowl"] === formData.answers[10] &&
//   //         item["Physical Activities"] === formData.answers[11] &&
//   //         item["Tolerance for Seasonal Weather"] === formData.answers[12] &&
//   //         item["Communication"] === formData.answers[13] &&
//   //         item["Memory"] === formData.answers[14] &&
//   //         item["Emotional Temperament"] === formData.answers[15] &&
//   //         item["Pulse"] === formData.answers[16] &&
//   //         item["Body Temperature"] === formData.answers[17]
//   //       ) {
//   //         matchingDosha = item["Prakruti type"];
//   //         break;
//   //       }
//   //     }
//   //     console.log("Result:", matchingDosha || "Unknown"); // Debug line
//   //     setResult(matchingDosha || "Unknown"); // Set "Unknown" if no match
//   //     setIsLoading(false);
//   //   }, 1500);
//   // };

//   const getDosha = () => {
//     const doshas = ["Vata", "Pitta", "Kapha"];
//     return doshas[Math.floor(Math.random() * doshas.length)];
//   };

//   const handleSubmit = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       let matchingDosha = null;
//       for (const item of data) {
//         let match = true;
//         for (let i = 0; i < formData.answers.length; i++) {
//           // Case-insensitive comparison
//           if (
//             item[keyMapping[i]].toLowerCase() !== formData.answers[i].toLowerCase()
//           ) {
//             match = false;
//             break;
//           }
//         }
//         if (match) {
//           matchingDosha = item["Prakruti type"];
//           break;
//         }
//       }
//       setResult(matchingDosha || getDosha());
//       setIsLoading(false);
//     }, 1500);
//   };



//   return (
//     <div className="flex flex-col items-center justify-center p-4 pt-16 lg:pt-20 min-h-screen">
//       {/* Title and Description */}
//       <motion.h1
//         className="text-4xl font-playfair text-seaGreen text-center mb-2"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         Know Your Body Type
//       </motion.h1>
//       <motion.p
//         className="text-lg font-poppins text-gray-700 text-center mb-6"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 0.5 }}
//       >
//         Answer a few questions to discover your Ayurvedic Dosha and unlock personalized insights.
//       </motion.p>

//       {/* Quiz Section with Personal Info and Reference Image */}
//       <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-6">
//         {/* Quiz Card */}
//         <motion.div
//           className="bg-offWhite border-2 border-seaGreen rounded-lg shadow-md w-full lg:w-2/3 p-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 1 }}
//         >
//           {/* Personal Info */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//             <div className="flex flex-col">
//               <label className="text-lg font-semibold mb-2 flex items-center">
//                 <FaUser className="mr-2" />
//                 Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Enter your name"
//                 value={formData.name}
//                 onChange={handlePersonalInfoChange}
//                 className="bg-white border-seaGreen border-2 rounded-md p-2 focus:outline-none hover:border-goldenYellow"
//               />
//             </div>
//             <div className="flex flex-col">
//   <label className="text-lg font-semibold mb-2 flex items-center">
//     <FaUser className="mr-2" />
//     Age
//   </label>
//   <input
//     type="number"
//     name="age"
//     value={formData.age}
//     onChange={handlePersonalInfoChange}
//     className="bg-white border-seaGreen border-2 rounded-md p-2 
//                focus:outline-none hover:border-goldenYellow
//                [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none 
//                [&::-webkit-inner-spin-button]:appearance-none"
//     placeholder="Enter your age"
//     min="0"
//     max="99"
//     step="1"
//     maxLength="2"
//   />
// </div>
//             <div className="flex flex-col">
//               <label className="text-lg font-semibold mb-2 flex items-center">
//                 <FaUser className="mr-2" />
//                 Gender
//               </label>
//               <select
//                 name="gender"
//                 value={formData.gender}
//                 onChange={handlePersonalInfoChange}
//                 className="bg-white border-seaGreen border-2 rounded-md p-2 focus:outline-none hover:border-goldenYellow"
//               >
//                 <option value="">Select Gender</option>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//                 <option value="Other">Other</option>
//               </select>
//             </div>
//           </div>

//           {/* Questions Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {questions.map((question, index) => (
//               <div key={index} className="flex flex-col mb-4">
//                 <label className="text-lg font-semibold mb-2 flex items-center">
//                   <FaUser className="mr-2" />
//                   {question.question}
//                 </label>
//                 <select
//                   className="bg-white border-seaGreen border-2 rounded-md p-2 focus:outline-none hover:border-goldenYellow"
//                   value={formData.answers[index]}
//                   onChange={(e) => handleInputChange(e, index)}
//                 >
//                   <option value="">Select an option</option>
//                   {question.options.map((option, i) => (
//                     <option key={i} value={option}>
//                       {option}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             ))}
//           </div>

//           {/* Submit Button */}
//           <motion.button
//             className="relative bg-seaGreen text-black py-3 px-6 rounded-lg mt-6 w-full 
//              border-2 border-goldenYellow/20
//              flex items-center justify-center gap-2
//              overflow-hidden
//              shadow-md
//              hover:bg-goldenYellow hover:text-seaGreen 
//              hover:border-goldenYellow
//              disabled:opacity-50 disabled:cursor-not-allowed
//              transition-all duration-300 ease-in-out cursor-pointer"
//             onClick={handleSubmit}
//             animate={{ scale: [1, 1.05, 1] }}
//             transition={{ duration: 0.5, repeat: Infinity }}
//             disabled={isLoading}
//             whileHover={{ 
//                 scale: 1.03,
//                 boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)"
//               }}
//               whileTap={{ scale: 0.98 }}
//           >
//             <FaMagic className="w-5 h-5" />
//             {isLoading ? "Calculating..." : "Find My Dosha"}
//           </motion.button>
//         </motion.div>

//         {/* Reference Image (Right on Desktop, Below on Mobile) */}
//         <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
//           <img
//             src="https://buddhica.com/wp-content/uploads/2020/01/Vata-2.jpg"
//             alt="Dosha Reference"
//             className="w-full max-w-md lg:max-w-sm rounded-lg shadow-md"
//           />
//         </div>
//       </div>

//       {/* Result Section */}
//       {isLoading && (
//         <motion.div
//           className="mt-8 flex justify-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <FaSpinner className="text-seaGreen text-5xl animate-spin" />
//         </motion.div>
//       )}

//       {result && !isLoading && (
//         <motion.div
//           className="bg-offWhite border-2 border-seaGreen rounded-lg shadow-md w-full max-w-3xl p-6 mt-8"
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <FaWind className="text-seaGreen text-5xl mx-auto mb-4" />
//           <h2 className="text-2xl font-semibold text-center mb-2">
//             {formData.name ? `${formData.name}, you` : "You"} are {result} Dominant
//           </h2>
//           <p className="text-lg text-gray-700 text-center mb-4">
//             Based on your answers, you are primarily a {result} type. This means you may exhibit characteristics like creativity, enthusiasm, and a light, agile nature.  
//           </p>
//           <button className="bg-goldenYellow text-black py-2 px-4 rounded-lg mx-auto block hover:bg-seaGreen hover:text-white transition duration-300">
//             {/* Learn More */}
//           </button>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default KnowYourHealth;
























































import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaLeaf,
  FaWind,
  FaFire,
  FaWater,
  FaSpinner,
  FaUser,
  FaMagic,
} from "react-icons/fa";

const questions = [
  { question: "What is Your Body Frame?", options: ["Thin", "Broad", "Medium"] },
  { question: "What is Your Body Weight?", options: ["Low", "Over Weight", "Moderate"] },
  { question: "What is Your Skin?", options: ["Dry", "Thick", "Soft"] },
  { question: "What is Your Hair?", options: ["Dry", "Soft", "Strong"] },
  { question: "What is Your Teeth?", options: ["Big", "Strong"] },
  { question: "What is Your Eyes?", options: ["Small", "Thick", "Big"] },
  { question: "What is Your Nails?", options: ["Brittle", "Soft", "Thick"] },
  { question: "What is Your Tongue?", options: ["Cracked", "Red", "White"] },
  { question: "What is Your Food Habits?", options: ["Frequent", "Excessive", "Stable"] },
  { question: "What is Your Thirst?", options: ["Variable", "Excessive", "Scanty"] },
  { question: "What is Your Bowl?", options: ["Dry", "Soft", "Oily"] },
  { question: "What is Your Physical Activities?", options: ["Very Active", "Moderate", "Lethargic"] },
  { question: "What is Your Tolerance for Seasonal Weather?", options: ["Cold Intolerant", "Heat Intolerant", "Cold and Heat Intolerant"] },
  { question: "What is Your Communication?", options: ["Less Vocal", "Sharp", "Talkative"] },
  { question: "What is Your Memory?", options: ["Slow", "Moderate", "Quick"] },
  { question: "What is Your Emotional Temperament?", options: ["Aggressive", "Fearful", "Calm"] },
  { question: "What is Your Pulse?", options: ["Moderate", "Feeble", "Slow"] },
  { question: "What is Your Body Temperature?", options: ["Moderate", "High", "Low"] },
];

const keyMapping = {
  0: "Body Frame",
  1: "Body weight",
  2: "Skin",
  3: "Hair",
  4: "Teeth",
  5: "Eyes",
  6: "Nails",
  7: "Tongue",
  8: "Food Habits",
  9: "Thirst",
  10: "Bowl",
  11: "Physical Activities",
  12: "Tolerance for Seasonal Weather",
  13: "Communication",
  14: "Memory",
  15: "Emotional Temperament",
  16: "Pulse",
  17: "Body Temperature",
};

const KnowYourBodyType = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    answers: Array(18).fill(""),
  });
  const [data, setData] = useState([]);
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("/output.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleInputChange = (e, index) => {
    const newAnswers = [...formData.answers];
    newAnswers[index] = e.target.value;
    setFormData({ ...formData, answers: newAnswers });
  };

  const handlePersonalInfoChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getDosha = () => {
    const doshas = ["Vata", "Pitta", "Kapha"];
    return doshas[Math.floor(Math.random() * doshas.length)];
  };
  const [error, setError] = useState("");
  const handleSubmit = () => {
    if (
      !formData.name ||
      !formData.age ||
      !formData.gender ||
      formData.answers.some((answer) => !answer)
    ) {
      setError("Please fill out all fields and select an option for each question.");
      return;
    }
  
    setError(""); // Clear error if all fields are valid
    
    setIsLoading(true);
    setTimeout(() => {
      let matchingDosha = null;
      for (const item of data) {
        let match = true;
        for (let i = 0; i < formData.answers.length; i++) {
          if (item[keyMapping[i]]?.toLowerCase() !== formData.answers[i]?.toLowerCase()) {
            match = false;
            break;
          }
        }
        if (match) {
          matchingDosha = item["Prakruti type"];
          break;
        }
      }
      setResult(matchingDosha || getDosha());
      setIsLoading(false);
    }, 1500);
  };

  // Framer Motion Variants
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
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-poppins text-[#4A4A4A] pt-20 pb-12">
      {/* Header */}
      <motion.header
        className="text-center mb-12"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h1 className="text-5xl md:text-6xl font-playfair text-[#2E8B57] mb-4">
          Know Your Body Type
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-[#4A4A4A]">
          Take this quiz to uncover your Ayurvedic Dosha and gain personalized wellness insights.
        </p>
      </motion.header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-12">
        {/* Quiz Form */}
        <motion.div
          className="w-full lg:w-2/3 bg-white rounded-2xl shadow-lg p-8"
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
        >
          {/* Personal Info */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            variants={staggerChildren}
          >
            <motion.div variants={child}>
              <label className="flex items-center gap-2 text-[#2E8B57] font-medium mb-2">
                <FaUser /> Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handlePersonalInfoChange}
                className="w-full p-3 border border-[#2E8B57] rounded-lg focus:outline-none focus:border-[#FFD700] transition-all"
              />
            </motion.div>
            <motion.div variants={child}>
      <label className="flex items-center gap-2 text-[#2E8B57] font-medium mb-2">
        <FaUser /> Age
      </label>
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handlePersonalInfoChange}
        className="w-full p-3 border border-[#2E8B57] rounded-lg focus:outline-none focus:border-[#FFD700] transition-all"
        placeholder="Enter age"
        min="1"
        max="99"
        maxLength={2} 
      />
    </motion.div>
            <motion.div variants={child}>
              <label className="flex items-center gap-2 text-[#2E8B57] font-medium mb-2">
                <FaUser /> Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handlePersonalInfoChange}
                className="w-full p-3 border border-[#2E8B57] rounded-lg focus:outline-none focus:border-[#FFD700] transition-all"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </motion.div>
          </motion.div>

          {/* Questions */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={staggerChildren}
          >
            {questions.map((question, index) => (
              <motion.div key={index} variants={child}>
                <label className="flex items-center gap-2 text-[#2E8B57] font-medium mb-2">
                  <FaLeaf className="text-sm" /> {question.question}
                </label>
                <select
                  value={formData.answers[index]}
                  onChange={(e) => handleInputChange(e, index)}
                  className="w-full p-3 border border-[#2E8B57] rounded-lg focus:outline-none focus:border-[#FFD700] transition-all"
                >
                  <option value="">Select an Option</option>
                  {question.options.map((option, i) => (
                    <option key={i} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </motion.div>
            ))}
          </motion.div>

          {/* Submit Button */}
          <motion.button
  onClick={handleSubmit}
  disabled={isLoading}
  className="mt-8 w-full bg-[#2E8B57] text-white py-4 rounded-full flex items-center justify-center gap-2 text-lg font-medium hover:bg-[#FFD700] hover:text-[#2E8B57] transition-all duration-300 disabled:opacity-50"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  {isLoading ? <FaSpinner className="animate-spin" /> : <FaMagic />}
  {isLoading ? "Calculating..." : "Find My Dosha"}
</motion.button>
{error && (
  <motion.p
    className="mt-4 text-red-500 text-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    {error}
  </motion.p>
)}
        </motion.div>

        {/* Reference Image */}
        <motion.div
          className="w-full lg:w-1/3 flex justify-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <img
            src="https://buddhica.com/wp-content/uploads/2020/01/Vata-2.jpg"
            alt="Dosha Illustration"
            className="w-full max-w-sm rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>

      {/* Result Section */}
      {isLoading && (
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaSpinner className="text-[#2E8B57] text-5xl animate-spin" />
        </motion.div>
      )}

      {result && !isLoading && (
        <motion.div
          className="mt-12 max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {result === "Vata" && <FaWind className="text-[#2E8B57] text-5xl mx-auto mb-4" />}
          {result === "Pitta" && <FaFire className="text-[#2E8B57] text-5xl mx-auto mb-4" />}
          {result === "Kapha" && <FaWater className="text-[#2E8B57] text-5xl mx-auto mb-4" />}
          <h2 className="text-3xl font-playfair text-[#2E8B57] mb-4">
            {formData.name ? `${formData.name}, You` : "You"} Are {result} Dominant
          </h2>
          <p className="text-lg text-[#4A4A4A] mb-6">
            {result === "Vata" && "Your Vata dominance reflects creativity, agility, and a light spirit."}
            {result === "Pitta" && "Your Pitta dominance shines with passion, intellect, and fiery energy."}
            {result === "Kapha" && "Your Kapha dominance brings calm, strength, and grounded stability."}
          </p>
          <motion.button
            className="bg-[#FFD700] text-[#2E8B57] py-3 px-6 rounded-full hover:bg-[#2E8B57] hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default KnowYourBodyType;