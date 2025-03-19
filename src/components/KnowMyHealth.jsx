
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { FaSearch, FaLeaf, FaTimes, FaPrescription, FaFlask } from "react-icons/fa";

// const KnowMyHealth = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [selectedResult, setSelectedResult] = useState(null);
//   const [showExploreButton, setShowExploreButton] = useState(true);
//   const [data, setData] = useState([]);
//   const [medicines, setMedicines] = useState([]);
//   const [matchedMedicines, setMatchedMedicines] = useState([]);
//   const [isLoading, setIsLoading] = useState(false); // State for loading spinner

//   // Fetch both JSON files
//   useEffect(() => {
//     // Fetch englishToAyurveda.json
//     fetch("/englishToAyurveda.json")
//       .then((response) => response.json())
//       .then((jsonData) => setData(jsonData))
//       .catch((error) => console.error("Error fetching englishToAyurveda:", error));

//     // Fetch Medicines.json
//     fetch("/Medicines.json")
//       .then((response) => response.json())
//       .then((jsonData) => setMedicines(jsonData))
//       .catch((error) => console.error("Error fetching medicines:", error));
//   }, []);

//   const cleanEnglishName = (name) => {
//     return name.endsWith(".") ? name.slice(0, -1) : name;
//   };

//   const handleSearch = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//     setSelectedResult(null);
//     setMatchedMedicines([]);
//     setShowExploreButton(true);
//     setIsLoading(false); // Reset loading state

//     if (value.trim() === "") {
//       setSuggestions([]);
//       return;
//     }

//     const filtered = data
//       .filter((item) =>
//         item.englishName.toLowerCase().startsWith(value.toLowerCase())
//       )
//       .slice(0, 5);
//     setSuggestions(filtered);
//   };

//   const handleSuggestionClick = (item) => {
//     setSelectedResult(item);
//     setSearchTerm(cleanEnglishName(item.englishName));
//     setSuggestions([]);
//     setMatchedMedicines([]);
//     setShowExploreButton(true);
//     setIsLoading(false); // Reset loading state
//   };

//   const handleClearSearch = () => {
//     setSearchTerm("");
//     setSuggestions([]);
//     setSelectedResult(null);
//     setMatchedMedicines([]);
//     setShowExploreButton(false);
//     setIsLoading(false); // Reset loading state
//   };

//   // Modified Explore More function with loading state
//   const handleExploreMoreClick = () => {
//     if (selectedResult) {
//       setIsLoading(true); // Show loader
//       setTimeout(() => { // Simulate API call delay
//         const ayurvedaTerm = selectedResult.ayurvedaName;
//         const matched = medicines.filter((medicine) => {
//           const indications = medicine["Main Indications"]
//             .split(",")
//             .map((ind) => ind.trim());
//           return indications.includes(ayurvedaTerm);
//         });
//         setMatchedMedicines(matched.length > 0 ? [matched[0]] : []);
//         setShowExploreButton(false); // Hide the Explore More button
//         setIsLoading(false); // Hide loader after data is ready
//       }, 1500); // 1.5-second delay for demo; adjust based on actual API time
//     }
//   };

//   const fadeIn = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
//   };

//   const slideUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
//   };

//   const scaleUp = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
//   };

//   const spin = {
//     rotate: [0, 360],
//     transition: {
//       duration: 1,
//       repeat: Infinity,
//       ease: "linear",
//     },
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#F5F5F5] to-[#E6ECEA] font-poppins text-[#4A4A4A] py-20 px-6">
//       <motion.header
//         className="text-center mb-16"
//         initial="hidden"
//         animate="visible"
//         variants={fadeIn}
//       >
//         <h1 className="text-5xl md:text-6xl font-playfair text-[#2E8B57] mb-6 drop-shadow-md">
//           Know My Health
//         </h1>
//         <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
//           Discover Ayurvedic insights by typing your symptoms and explore tailored remedies with elegance.
//         </p>
//       </motion.header>

//       <div className="max-w-3xl mx-auto">
//         <motion.div
//           className="relative"
//           initial="hidden"
//           animate="visible"
//           variants={slideUp}
//         >
//           <div className="flex items-center bg-white border-2 border-[#2E8B57] rounded-full shadow-lg p-3">
//             <FaSearch className="text-[#2E8B57] text-xl ml-5" />
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={handleSearch}
//               placeholder="Search symptoms (e.g., Constipation)"
//               className="w-full p-4 pl-6 text-[#4A4A4A] rounded-full focus:outline-none focus:border-[#FFD700] transition-all text-lg bg-transparent"
//             />
//             {searchTerm && (
//               <FaTimes
//                 className="text-[#2E8B57] text-xl mr-5 cursor-pointer hover:text-[#FFD700] transition-colors duration-300"
//                 onClick={handleClearSearch}
//               />
//             )}
//           </div>

//           {suggestions.length > 0 && (
//             <motion.ul
//               className="absolute top-16 left-0 w-full bg-white rounded-xl shadow-xl mt-3 z-10 border border-[#2E8B57]/20"
//               initial={{ opacity: 0, y: -15 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -15 }}
//               transition={{ duration: 0.3 }}
//             >
//               {suggestions.map((item, index) => (
//                 <li
//                   key={index}
//                   onClick={() => handleSuggestionClick(item)}
//                   className="px-6 py-3 text-[#4A4A4A] hover:bg-[#FFD700]/20 hover:text-[#2E8B57] cursor-pointer transition-all duration-300 border-b border-[#E6ECEA] last:border-b-0"
//                 >
//                   {cleanEnglishName(item.englishName)}
//                 </li>
//               ))}
//             </motion.ul>
//           )}
//         </motion.div>

//         {selectedResult && (
//           <motion.div
//             className="mt-12 bg-white rounded-2xl shadow-2xl p-8 text-center max-w-2xl mx-auto border border-[#2E8B57]/10"
//             initial="hidden"
//             animate="visible"
//             variants={slideUp}
//           >
//             <FaLeaf className="text-[#2E8B57] text-5xl mx-auto mb-6 drop-shadow-lg" />
//             <h2 className="text-3xl font-playfair text-[#2E8B57] mb-4 drop-shadow-md">
//               {cleanEnglishName(selectedResult.englishName)}
//             </h2>
//             <p className="text-xl text-[#4A4A4A] mb-6 leading-relaxed">
//               Ayurvedic Term: <span className="font-semibold text-[#2E8B57]">{selectedResult.ayurvedaName}</span>
//             </p>
//             {showExploreButton && (
//               <motion.button
//                 className="bg-[#FFD700] text-[#2E8B57] py-3 px-8 rounded-full text-lg font-medium hover:bg-[#2E8B57] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.98 }}
//                 onClick={handleExploreMoreClick}
//               >
//                 Explore More
//               </motion.button>
//             )}

//             {isLoading && (
//               <motion.div
//                 className="mt-8 flex justify-center"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <motion.div
//                   className="relative w-20 h-20"
//                   animate={spin}
//                 >
//                   <div className="absolute w-full h-full border-4 border-[#2E8B57] border-t-transparent rounded-full"></div>
//                   <div className="absolute w-16 h-16 border-4 border-[#FFD700] border-t-transparent rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
//                 </motion.div>
//               </motion.div>
//             )}

//             {matchedMedicines.length > 0 && (
//               <motion.div
//                 className="mt-8 bg-[#F0FFF0]/80 rounded-xl p-6 border border-[#2E8B57]/20 shadow-inner"
//                 initial="hidden"
//                 animate="visible"
//                 variants={scaleUp}
//               >
//                 <h3 className="text-2xl font-playfair text-[#2E8B57] mb-5 flex items-center gap-2">
//                   <FaPrescription className="text-[#2E8B57]" /> Recommended Medicine
//                 </h3>
//                 <div className="space-y-3 text-left pl-6">
//                   <p className="flex items-center gap-2">
//                     <FaFlask className="text-[#2E8B57] text-sm" />
//                     <strong>Name:</strong> {matchedMedicines[0]["Name of Medicine"]}
//                   </p>
//                   <p className="flex items-center gap-2">
//                     <FaFlask className="text-[#2E8B57] text-sm" />
//                     <strong>Pack Size:</strong> {matchedMedicines[0]["Dispensing Pack Size"]}
//                   </p>
//                   <p className="flex items-center gap-2">
//                     <FaFlask className="text-[#2E8B57] text-sm" />
//                     <strong>Indications:</strong> {matchedMedicines[0]["Main Indications"].replace(/\n/g, ", ")}
//                   </p>
//                   <p className="flex items-center gap-2">
//                     <FaFlask className="text-[#2E8B57] text-sm" />
//                     <strong>Dose:</strong> {matchedMedicines[0]["Dose"]}
//                   </p>
//                   <p className="flex items-center gap-2">
//                     <FaFlask className="text-[#2E8B57] text-sm" />
//                     <strong>Precautions:</strong> {matchedMedicines[0]["Precaution/ Contraindication"]}
//                   </p>
//                   <p className="flex items-center gap-2">
//                     <FaFlask className="text-[#2E8B57] text-sm" />
//                     <strong>Class:</strong> {matchedMedicines[0]["Class"]}
//                   </p>
//                 </div>
//               </motion.div>
//             )}
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default KnowMyHealth;






















// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { FaSearch, FaBrain, FaLeaf, FaTimes, FaPrescription, FaFlask } from "react-icons/fa";
// import { fetchModelRecommendation } from "../components/TunedModel"; 


// const KnowMyHealth = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [selectedResult, setSelectedResult] = useState(null);
//   const [showExploreButton, setShowExploreButton] = useState(true);
//   const [data, setData] = useState([]);
//   const [medicines, setMedicines] = useState([]);
//   const [matchedMedicines, setMatchedMedicines] = useState([]);
//   const [isLoading, setIsLoading] = useState(false); // State for loading spinner

//   // Fetch both JSON files
//   useEffect(() => {
//     // Fetch englishToAyurveda.json
//     fetch("/englishToAyurveda.json")
//       .then((response) => response.json())
//       .then((jsonData) => setData(jsonData))
//       .catch((error) => console.error("Error fetching englishToAyurveda:", error));

//     // Fetch Medicines.json
//     fetch("/Medicines.json")
//       .then((response) => response.json())
//       .then((jsonData) => setMedicines(jsonData))
//       .catch((error) => console.error("Error fetching medicines:", error));
//   }, []);

//   const cleanEnglishName = (name) => {
//     return name.endsWith(".") ? name.slice(0, -1) : name;
//   };

//   const handleSearch = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//     setSelectedResult(null);
//     setMatchedMedicines([]);
//     setShowExploreButton(true);
//     setIsLoading(false); // Reset loading state

//     if (value.trim() === "") {
//       setSuggestions([]);
//       return;
//     }

//     const filtered = data
//       .filter((item) =>
//         item.englishName.toLowerCase().startsWith(value.toLowerCase())
//       )
//       .slice(0, 5);
//     setSuggestions(filtered);
//   };

//   const handleSuggestionClick = (item) => {
//     setSelectedResult(item);
//     setSearchTerm(cleanEnglishName(item.englishName));
//     setSuggestions([]);
//     setMatchedMedicines([]);
//     setShowExploreButton(true);
//     setIsLoading(false); // Reset loading state
//   };

//   const handleClearSearch = () => {
//     setSearchTerm("");
//     setSuggestions([]);
//     setSelectedResult(null);
//     setMatchedMedicines([]);
//     setShowExploreButton(false);
//     setIsLoading(false); // Reset loading state
//   };

//   // Modified Explore More function with loading state
//   const handleExploreMoreClick = () => {
//     if (selectedResult) {
//       setIsLoading(true); // Show loader
//       setTimeout(() => { // Simulate API call delay
//         const ayurvedaTerm = selectedResult.ayurvedaName;
//         const matched = medicines.filter((medicine) => {
//           const indications = medicine["Main Indications"]
//             .split(",")
//             .map((ind) => ind.trim());
//           return indications.includes(ayurvedaTerm);
//         });
//         setMatchedMedicines(matched.length > 0 ? [matched[0]] : []);
//         setShowExploreButton(false); // Hide the Explore More button
//         setIsLoading(false); // Hide loader after data is ready
//       }, 1500); // 1.5-second delay for demo; adjust based on actual API time
//     }
//   };

//   // Function to fetch AI recommendation
//   const handleGetAIRecommendation = async () => {
//     if (!selectedResult) return;

//     const prompt = `Provide an Ayurvedic health recommendation for the symptom: ${cleanEnglishName(selectedResult.englishName)} (Ayurvedic term: ${selectedResult.ayurvedaName}). Suggest a remedy or lifestyle change.`;
//     try {
//       setIsLoading(true);
//       const recommendation = await fetchModelRecommendation(prompt);
//       console.log("AI Recommendation:", recommendation);
//       alert(`AI Recommendation:\n${recommendation}`);
//     } catch (error) {
//       console.error("Failed to get AI recommendation:", error);
//       alert("Failed to fetch AI recommendation. Please try again later.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const fadeIn = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
//   };

//   const slideUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
//   };

//   const scaleUp = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
//   };

//   const spin = {
//     rotate: [0, 360],
//     transition: {
//       duration: 1,
//       repeat: Infinity,
//       ease: "linear",
//     },
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#F5F5F5] to-[#E6ECEA] font-poppins text-[#4A4A4A] py-20 px-6">
//       <motion.header
//         className="text-center mb-16"
//         initial="hidden"
//         animate="visible"
//         variants={fadeIn}
//       >
//         <h1 className="text-5xl md:text-6xl font-playfair text-[#2E8B57] mb-6 drop-shadow-md">
//           Know My Health
//         </h1>
//         <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
//           Discover Ayurvedic insights by typing your symptoms and explore tailored remedies with elegance.
//         </p>
//       </motion.header>

//       <div className="max-w-3xl mx-auto">
//         <motion.div
//           className="relative"
//           initial="hidden"
//           animate="visible"
//           variants={slideUp}
//         >
//           <div className="flex items-center bg-white border-2 border-[#2E8B57] rounded-full shadow-lg p-3">
//             <FaSearch className="text-[#2E8B57] text-xl ml-5" />
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={handleSearch}
//               placeholder="Search symptoms (e.g., Constipation)"
//               className="w-full p-4 pl-6 text-[#4A4A4A] rounded-full focus:outline-none focus:border-[#FFD700] transition-all text-lg bg-transparent"
//             />
//             {searchTerm && (
//               <FaTimes
//                 className="text-[#2E8B57] text-xl mr-5 cursor-pointer hover:text-[#FFD700] transition-colors duration-300"
//                 onClick={handleClearSearch}
//               />
//             )}
//           </div>

//           {suggestions.length > 0 && (
//             <motion.ul
//               className="absolute top-16 left-0 w-full bg-white rounded-xl shadow-xl mt-3 z-10 border border-[#2E8B57]/20"
//               initial={{ opacity: 0, y: -15 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -15 }}
//               transition={{ duration: 0.3 }}
//             >
//               {suggestions.map((item, index) => (
//                 <li
//                   key={index}
//                   onClick={() => handleSuggestionClick(item)}
//                   className="px-6 py-3 text-[#4A4A4A] hover:bg-[#FFD700]/20 hover:text-[#2E8B57] cursor-pointer transition-all duration-300 border-b border-[#E6ECEA] last:border-b-0"
//                 >
//                   {cleanEnglishName(item.englishName)}
//                 </li>
//               ))}
//             </motion.ul>
//           )}
//         </motion.div>

//         {selectedResult && (
//           <motion.div
//             className="mt-12 bg-white rounded-2xl shadow-2xl p-8 text-center max-w-2xl mx-auto border border-[#2E8B57]/10"
//             initial="hidden"
//             animate="visible"
//             variants={slideUp}
//           >
//             <FaLeaf className="text-[#2E8B57] text-5xl mx-auto mb-6 drop-shadow-lg" />
//             <h2 className="text-3xl font-playfair text-[#2E8B57] mb-4 drop-shadow-md">
//               {cleanEnglishName(selectedResult.englishName)}
//             </h2>
//             <p className="text-xl text-[#4A4A4A] mb-6 leading-relaxed">
//               Ayurvedic Term: <span className="font-semibold text-[#2E8B57]">{selectedResult.ayurvedaName}</span>
//             </p>
//             {showExploreButton && (
//               <motion.button
//                 className="bg-[#FFD700] text-[#2E8B57] py-3 px-8 rounded-full text-lg font-medium hover:bg-[#2E8B57] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.98 }}
//                 onClick={handleExploreMoreClick}
//               >
//                 Explore More
//               </motion.button>
//             )}

//             {isLoading && (
//               <motion.div
//                 className="mt-8 flex justify-center"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <motion.div
//                   className="relative w-20 h-20"
//                   animate={spin}
//                 >
//                   <div className="absolute w-full h-full border-4 border-[#2E8B57] border-t-transparent rounded-full"></div>
//                   <div className="absolute w-16 h-16 border-4 border-[#FFD700] border-t-transparent rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
//                 </motion.div>
//               </motion.div>
//             )}

//             {matchedMedicines.length > 0 && (
//               <motion.div
//                 className="mt-8 bg-[#F0FFF0]/80 rounded-xl p-6 border border-[#2E8B57]/20 shadow-inner"
//                 initial="hidden"
//                 animate="visible"
//                 variants={scaleUp}
//               >
//                 <h3 className="text-2xl font-playfair text-[#2E8B57] mb-5 flex items-center gap-2">
//                   <FaPrescription className="text-[#2E8B57]" /> Recommended Medicine
//                 </h3>
//                 <div className="space-y-3 text-left pl-6">
//                   <p className="flex items-center gap-2">
//                     <FaFlask className="text-[#2E8B57] text-sm" />
//                     <strong>Name:</strong> {matchedMedicines[0]["Name of Medicine"]}
//                   </p>
//                   <p className="flex items-center gap-2">
//                     <FaFlask className="text-[#2E8B57] text-sm" />
//                     <strong>Pack Size:</strong> {matchedMedicines[0]["Dispensing Pack Size"]}
//                   </p>
//                   <p className="flex items-center gap-2">
//                     <FaFlask className="text-[#2E8B57] text-sm" />
//                     <strong>Indications:</strong> {matchedMedicines[0]["Main Indications"].replace(/\n/g, ", ")}
//                   </p>
//                   <p className="flex items-center gap-2">
//                     <FaFlask className="text-[#2E8B57] text-sm" />
//                     <strong>Dose:</strong> {matchedMedicines[0]["Dose"]}
//                   </p>
//                   <p className="flex items-center gap-2">
//                     <FaFlask className="text-[#2E8B57] text-sm" />
//                     <strong>Precautions:</strong> {matchedMedicines[0]["Precaution/ Contraindication"]}
//                   </p>
//                   <p className="flex items-center gap-2">
//                     <FaFlask className="text-[#2E8B57] text-sm" />
//                     <strong>Class:</strong> {matchedMedicines[0]["Class"]}
//                   </p>
//                 </div>

//                 <motion.button
//                   className="mt-6 bg-[#2E8B57] text-white py-3 px-8 rounded-full text-lg font-medium hover:bg-[#FFD700] hover:text-[#2E8B57] transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 mx-auto"
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={handleGetAIRecommendation}
//                 >
//                   <FaBrain className="text-xl" />
//                   Get AI Recommendation
//                 </motion.button>

//               </motion.div>
//             )}
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default KnowMyHealth;

















































// //working good ig

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { FaSearch, FaBrain, FaLeaf, FaTimes, FaPrescription, FaFlask } from "react-icons/fa";
// import { fetchModelRecommendation } from "../components/TunedModel"; 

// const KnowMyHealth = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [selectedResult, setSelectedResult] = useState(null);
//   const [showExploreButton, setShowExploreButton] = useState(true);
//   const [data, setData] = useState([]);
//   const [medicines, setMedicines] = useState([]);
//   const [matchedMedicines, setMatchedMedicines] = useState([]);
//   const [isLoading, setIsLoading] = useState(false); // State for loading spinner

//   // Fetch both JSON files
//   useEffect(() => {
//     // Fetch englishToAyurveda.json
//     fetch("/englishToAyurveda.json")
//       .then((response) => response.json())
//       .then((jsonData) => setData(jsonData))
//       .catch((error) => console.error("Error fetching englishToAyurveda:", error));

//     // Fetch Medicines.json
//     fetch("/Medicines.json")
//       .then((response) => response.json())
//       .then((jsonData) => setMedicines(jsonData))
//       .catch((error) => console.error("Error fetching medicines:", error));
//   }, []);

//   const cleanEnglishName = (name) => {
//     return name.endsWith(".") ? name.slice(0, -1) : name;
//   };

//   const handleSearch = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//     setSelectedResult(null);
//     setMatchedMedicines([]);
//     setShowExploreButton(true);
//     setIsLoading(false); // Reset loading state

//     if (value.trim() === "") {
//       setSuggestions([]);
//       return;
//     }

//     const filtered = data
//       .filter((item) =>
//         item.englishName.toLowerCase().startsWith(value.toLowerCase())
//       )
//       .slice(0, 5);
//     setSuggestions(filtered);
//   };

//   const handleSuggestionClick = (item) => {
//     setSelectedResult(item);
//     setSearchTerm(cleanEnglishName(item.englishName));
//     setSuggestions([]);
//     setMatchedMedicines([]);
//     setShowExploreButton(true);
//     setIsLoading(false); // Reset loading state
//   };

//   const handleClearSearch = () => {
//     setSearchTerm("");
//     setSuggestions([]);
//     setSelectedResult(null);
//     setMatchedMedicines([]);
//     setShowExploreButton(false);
//     setIsLoading(false); // Reset loading state
//   };

//   // Modified Explore More function with loading state
//   const handleExploreMoreClick = () => {
//     if (selectedResult) {
//       setIsLoading(true); // Show loader
//       setTimeout(() => { // Simulate API call delay
//         const ayurvedaTerm = selectedResult.ayurvedaName;
//         const matched = medicines.filter((medicine) => {
//           const indications = medicine["Main Indications"]
//             .split(",")
//             .map((ind) => ind.trim());
//           return indications.includes(ayurvedaTerm);
//         });
//         setMatchedMedicines(matched.length > 0 ? [matched[0]] : []);
//         setShowExploreButton(false); // Hide the Explore More button
//         setIsLoading(false); // Hide loader after data is ready
//       }, 1500); // 1.5-second delay for demo; adjust based on actual API time
//     }
//   };

//   // Function to fetch AI recommendation with full medicine details
//   const handleGetAIRecommendation = async () => {
//     if (!selectedResult || !matchedMedicines.length) return;

//     const medicine = matchedMedicines[0];
//     const prompt = `Provide a concise Ayurvedic health recommendation in Ayurvedic terms as a to-the-point paragraph based on the following remedy details for the symptom: ${cleanEnglishName(selectedResult.englishName)}. Include only the remedy explanation without repeating the details:
//     - Name: ${medicine["Name of Medicine"]}
//     - Pack Size: ${medicine["Dispensing Pack Size"]}
//     - Indications: ${medicine["Main Indications"].replace(/\n/g, ", ")}
//     - Dose: ${medicine["Dose"]}
//     - Precautions: ${medicine["Precaution/ Contraindication"]}
//     - Class: ${medicine["Class"]}. Dont use AI Recommednation, no salutation, no introduction, no conclusion, give me only clear to the point summary in detail with some suggestion in the same paragraph, such as "Some suggestions will be...".`;

//     try {
//       setIsLoading(true);
//       const recommendation = await fetchModelRecommendation(prompt);
//       console.log("", recommendation);
//       alert(`\n${recommendation}`);
//     } catch (error) {
//       console.error("Failed to get AI recommendation:", error);
//       alert("Failed to fetch AI recommendation. Please try again later.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const fadeIn = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
//   };

//   const slideUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
//   };

//   const scaleUp = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
//   };

//   const spin = {
//     rotate: [0, 360],
//     transition: {
//       duration: 1,
//       repeat: Infinity,
//       ease: "linear",
//     },
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#F5F5F5] to-[#E6ECEA] font-poppins text-[#4A4A4A] py-20 px-6">
//       <motion.header
//         className="text-center mb-16"
//         initial="hidden"
//         animate="visible"
//         variants={fadeIn}
//       >
//         <h1 className="text-5xl md:text-6xl font-playfair text-[#2E8B57] mb-6 drop-shadow-md">
//           Know My Health
//         </h1>
//         <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
//           Discover Ayurvedic insights by typing your symptoms and explore tailored remedies with elegance.
//         </p>
//       </motion.header>

//       <div className="max-w-3xl mx-auto">
//         <motion.div
//           className="relative"
//           initial="hidden"
//           animate="visible"
//           variants={slideUp}
//         >
//           <div className="flex items-center bg-white border-2 border-[#2E8B57] rounded-full shadow-lg p-3">
//             <FaSearch className="text-[#2E8B57] text-xl ml-5" />
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={handleSearch}
//               placeholder="Search symptoms (e.g., Constipation)"
//               className="w-full p-4 pl-6 text-[#4A4A4A] rounded-full focus:outline-none focus:border-[#FFD700] transition-all text-lg bg-transparent"
//             />
//             {searchTerm && (
//               <FaTimes
//                 className="text-[#2E8B57] text-xl mr-5 cursor-pointer hover:text-[#FFD700] transition-colors duration-300"
//                 onClick={handleClearSearch}
//               />
//             )}
//           </div>

//           {suggestions.length > 0 && (
//             <motion.ul
//               className="absolute top-16 left-0 w-full bg-white rounded-xl shadow-xl mt-3 z-10 border border-[#2E8B57]/20"
//               initial={{ opacity: 0, y: -15 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -15 }}
//               transition={{ duration: 0.3 }}
//             >
//               {suggestions.map((item, index) => (
//                 <li
//                   key={index}
//                   onClick={() => handleSuggestionClick(item)}
//                   className="px-6 py-3 text-[#4A4A4A] hover:bg-[#FFD700]/20 hover:text-[#2E8B57] cursor-pointer transition-all duration-300 border-b border-[#E6ECEA] last:border-b-0"
//                 >
//                   {cleanEnglishName(item.englishName)}
//                 </li>
//               ))}
//             </motion.ul>
//           )}
//         </motion.div>

//         {selectedResult && (
//           <motion.div
//             className="mt-12 bg-white rounded-2xl shadow-2xl p-8 text-center max-w-2xl mx-auto border border-[#2E8B57]/10"
//             initial="hidden"
//             animate="visible"
//             variants={slideUp}
//           >
//             <FaLeaf className="text-[#2E8B57] text-5xl mx-auto mb-6 drop-shadow-lg" />
//             <h2 className="text-3xl font-playfair text-[#2E8B57] mb-4 drop-shadow-md">
//               {cleanEnglishName(selectedResult.englishName)}
//             </h2>
//             <p className="text-xl text-[#4A4A4A] mb-6 leading-relaxed">
//               Ayurvedic Term: <span className="font-semibold text-[#2E8B57]">{selectedResult.ayurvedaName}</span>
//             </p>
//             {showExploreButton && (
//               <motion.button
//                 className="bg-[#FFD700] text-[#2E8B57] py-3 px-8 rounded-full text-lg font-medium hover:bg-[#2E8B57] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.98 }}
//                 onClick={handleExploreMoreClick}
//               >
//                 Explore More
//               </motion.button>
//             )}

//             {isLoading && (
//               <motion.div
//                 className="mt-8 flex justify-center"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <motion.div
//                   className="relative w-20 h-20"
//                   animate={spin}
//                 >
//                   <div className="absolute w-full h-full border-4 border-[#2E8B57] border-t-transparent rounded-full"></div>
//                   <div className="absolute w-16 h-16 border-4 border-[#FFD700] border-t-transparent rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
//                 </motion.div>
//               </motion.div>
//             )}

//             {matchedMedicines.length > 0 && (
//               <motion.div
//                 className="mt-8 bg-[#F0FFF0]/80 rounded-xl p-6 border border-[#2E8B57]/20 shadow-inner"
//                 initial="hidden"
//                 animate="visible"
//                 variants={scaleUp}
//               >
//                 <h3 className="text-2xl font-playfair text-[#2E8B57] mb-5 flex items-center gap-2">
//                   <FaPrescription className="text-[#2E8B57]" /> Recommended Medicine
//                 </h3>
//                 <div className="space-y-3 text-left pl-6">
//                   <p className="flex items-center gap-2">
//                     <FaFlask className="text-[#2E8B57] text-sm" />
//                     <strong>Name:</strong> {matchedMedicines[0]["Name of Medicine"]}
//                   </p>
//                   <p className="flex items-center gap-2">
//                     <FaFlask className="text-[#2E8B57] text-sm" />
//                     <strong>Pack Size:</strong> {matchedMedicines[0]["Dispensing Pack Size"]}
//                   </p>
//                   <p className="flex items-center gap-2">
//                     <FaFlask className="text-[#2E8B57] text-sm" />
//                     <strong>Indications:</strong> {matchedMedicines[0]["Main Indications"].replace(/\n/g, ", ")}
//                   </p>
//                   <p className="flex items-center gap-2">
//                     <FaFlask className="text-[#2E8B57] text-sm" />
//                     <strong>Dose:</strong> {matchedMedicines[0]["Dose"]}
//                   </p>
//                   <p className="flex items-center gap-2">
//                     <FaFlask className="text-[#2E8B57] text-sm" />
//                     <strong>Precautions:</strong> {matchedMedicines[0]["Precaution/ Contraindication"]}
//                   </p>
//                   <p className="flex items-center gap-2">
//                     <FaFlask className="text-[#2E8B57] text-sm" />
//                     <strong>Class:</strong> {matchedMedicines[0]["Class"]}
//                   </p>
//                 </div>

//                 <motion.button
//                   className="mt-6 bg-[#2E8B57] text-white py-3 px-8 rounded-full text-lg font-medium hover:bg-[#FFD700] hover:text-[#2E8B57] transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 mx-auto cursor-pointer"
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={handleGetAIRecommendation}
//                 >
//                   <FaBrain className="text-xl" />
//                   Get AI Recommendation
//                 </motion.button>
//               </motion.div>
//             )}
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default KnowMyHealth;






















































// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { FaSearch, FaLeaf, FaTimes } from "react-icons/fa"; // Removed FaBrain, FaPrescription, FaFlask

// const KnowMyHealth = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [selectedResult, setSelectedResult] = useState(null);
//   const [showExploreButton, setShowExploreButton] = useState(true);
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false); // State for loading spinner

//   // Fetch only englishToAyurveda.json (remove Medicines.json fetch)
//   useEffect(() => {
//     fetch("/englishToAyurveda.json")
//       .then((response) => response.json())
//       .then((jsonData) => setData(jsonData))
//       .catch((error) => console.error("Error fetching englishToAyurveda:", error));
//   }, []);

//   const cleanEnglishName = (name) => {
//     return name.endsWith(".") ? name.slice(0, -1) : name;
//   };

//   const handleSearch = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//     setSelectedResult(null);
//     setShowExploreButton(true);
//     setIsLoading(false); // Reset loading state

//     if (value.trim() === "") {
//       setSuggestions([]);
//       return;
//     }

//     const filtered = data
//       .filter((item) =>
//         item.englishName.toLowerCase().startsWith(value.toLowerCase())
//       )
//       .slice(0, 5);
//     setSuggestions(filtered);
//   };

//   const handleSuggestionClick = (item) => {
//     setSelectedResult(item);
//     setSearchTerm(cleanEnglishName(item.englishName));
//     setSuggestions([]);
//     setShowExploreButton(true);
//     setIsLoading(false); // Reset loading state
//   };

//   const handleClearSearch = () => {
//     setSearchTerm("");
//     setSuggestions([]);
//     setSelectedResult(null);
//     setShowExploreButton(false);
//     setIsLoading(false); // Reset loading state
//   };

//   // Modified Explore More function to appear broken
//   const handleExploreMoreClick = () => {
//     setIsLoading(true); // Show loader to simulate action
//     setTimeout(() => {
//       setShowExploreButton(false); // Hide the button as before
//       setIsLoading(false);
//       // Show "undefined" in an alert to make it look broken
//       alert("undefined");
//     }, 1500); // Keep the delay to mimic a failed fetch
//   };

//   const fadeIn = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
//   };

//   const slideUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
//   };

//   const spin = {
//     rotate: [0, 360],
//     transition: {
//       duration: 1,
//       repeat: Infinity,
//       ease: "linear",
//     },
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#F5F5F5] to-[#E6ECEA] font-poppins text-[#4A4A4A] py-20 px-6">
//       <motion.header
//         className="text-center mb-16"
//         initial="hidden"
//         animate="visible"
//         variants={fadeIn}
//       >
//         <h1 className="text-5xl md:text-6xl font-playfair text-[#2E8B57] mb-6 drop-shadow-md">
//           Know My Health
//         </h1>
//         <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
//           Discover Ayurvedic insights by typing your symptoms and explore tailored remedies with elegance.
//         </p>
//       </motion.header>

//       <div className="max-w-3xl mx-auto">
//         <motion.div
//           className="relative"
//           initial="hidden"
//           animate="visible"
//           variants={slideUp}
//         >
//           <div className="flex items-center bg-white border-2 border-[#2E8B57] rounded-full shadow-lg p-3">
//             <FaSearch className="text-[#2E8B57] text-xl ml-5" />
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={handleSearch}
//               placeholder="Search symptoms (e.g., Constipation)"
//               className="w-full p-4 pl-6 text-[#4A4A4A] rounded-full focus:outline-none focus:border-[#FFD700] transition-all text-lg bg-transparent"
//             />
//             {searchTerm && (
//               <FaTimes
//                 className="text-[#2E8B57] text-xl mr-5 cursor-pointer hover:text-[#FFD700] transition-colors duration-300"
//                 onClick={handleClearSearch}
//               />
//             )}
//           </div>

//           {suggestions.length > 0 && (
//             <motion.ul
//               className="absolute top-16 left-0 w-full bg-white rounded-xl shadow-xl mt-3 z-10 border border-[#2E8B57]/20"
//               initial={{ opacity: 0, y: -15 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -15 }}
//               transition={{ duration: 0.3 }}
//             >
//               {suggestions.map((item, index) => (
//                 <li
//                   key={index}
//                   onClick={() => handleSuggestionClick(item)}
//                   className="px-6 py-3 text-[#4A4A4A] hover:bg-[#FFD700]/20 hover:text-[#2E8B57] cursor-pointer transition-all duration-300 border-b border-[#E6ECEA] last:border-b-0"
//                 >
//                   {cleanEnglishName(item.englishName)}
//                 </li>
//               ))}
//             </motion.ul>
//           )}
//         </motion.div>

//         {selectedResult && (
//           <motion.div
//             className="mt-12 bg-white rounded-2xl shadow-2xl p-8 text-center max-w-2xl mx-auto border border-[#2E8B57]/10"
//             initial="hidden"
//             animate="visible"
//             variants={slideUp}
//           >
//             <FaLeaf className="text-[#2E8B57] text-5xl mx-auto mb-6 drop-shadow-lg" />
//             <h2 className="text-3xl font-playfair text-[#2E8B57] mb-4 drop-shadow-md">
//               {cleanEnglishName(selectedResult.englishName)}
//             </h2>
//             <p className="text-xl text-[#4A4A4A] mb-6 leading-relaxed">
//               Ayurvedic Term: <span className="font-semibold text-[#2E8B57]">{selectedResult.ayurvedaName}</span>
//             </p>
//             {showExploreButton && (
//               <motion.button
//                 className="bg-[#FFD700] text-[#2E8B57] py-3 px-8 rounded-full text-lg font-medium hover:bg-[#2E8B57] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.98 }}
//                 onClick={handleExploreMoreClick}
//               >
//                 Explore More
//               </motion.button>
//             )}

//             {isLoading && (
//               <motion.div
//                 className="mt-8 flex justify-center"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <motion.div
//                   className="relative w-20 h-20"
//                   animate={spin}
//                 >
//                   <div className="absolute w-full h-full border-4 border-[#2E8B57] border-t-transparent rounded-full"></div>
//                   <div className="absolute w-16 h-16 border-4 border-[#FFD700] border-t-transparent rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
//                 </motion.div>
//               </motion.div>
//             )}
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default KnowMyHealth;


































import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaLeaf, FaTimes, FaPrescription, FaFlask } from "react-icons/fa"; // Added FaPrescription, FaFlask for UI

const KnowMyHealth = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);
  const [showExploreButton] = useState(true); // Always true, button never hides
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // State for loading spinner
  const [showBrokenMedicine, setShowBrokenMedicine] = useState(false); // State to show broken medicine section

  // Fetch only englishToAyurveda.json
  useEffect(() => {
    fetch("/englishToAyurveda.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error fetching englishToAyurveda:", error));
  }, []);

  const cleanEnglishName = (name) => {
    return name.endsWith(".") ? name.slice(0, -1) : name;
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setSelectedResult(null);
    setShowBrokenMedicine(false); // Reset broken medicine section
    setIsLoading(false); // Reset loading state

    if (value.trim() === "") {
      setSuggestions([]);
      return;
    }

    const filtered = data
      .filter((item) =>
        item.englishName.toLowerCase().startsWith(value.toLowerCase())
      )
      .slice(0, 5);
    setSuggestions(filtered);
  };

  const handleSuggestionClick = (item) => {
    setSelectedResult(item);
    setSearchTerm(cleanEnglishName(item.englishName));
    setSuggestions([]);
    setShowBrokenMedicine(false); // Reset broken medicine section
    setIsLoading(false); // Reset loading state
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setSuggestions([]);
    setSelectedResult(null);
    setShowBrokenMedicine(false); // Reset broken medicine section
    setIsLoading(false); // Reset loading state
  };

  // Modified Explore More function to show broken data
  const handleExploreMoreClick = () => {
    setIsLoading(true); // Show loader to simulate action
    setTimeout(() => {
      setShowBrokenMedicine(true); // Show the broken medicine section
      setIsLoading(false);
      // Show "undefined" in an alert to make it look broken
      alert("undefined");
    }, 1500); // Keep the delay to mimic a failed fetch
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const spin = {
    rotate: [0, 360],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F5F5] to-[#E6ECEA] font-poppins text-[#4A4A4A] py-20 px-6">
      <motion.header
        className="text-center mb-16"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h1 className="text-5xl md:text-6xl font-playfair text-[#2E8B57] mb-6 drop-shadow-md">
          Know My Health
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Discover Ayurvedic insights by typing your symptoms and explore tailored remedies with elegance.
        </p>
      </motion.header>

      <div className="max-w-3xl mx-auto">
        <motion.div
          className="relative"
          initial="hidden"
          animate="visible"
          variants={slideUp}
        >
          <div className="flex items-center bg-white border-2 border-[#2E8B57] rounded-full shadow-lg p-3">
            <FaSearch className="text-[#2E8B57] text-xl ml-5" />
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search symptoms (e.g., Constipation)"
              className="w-full p-4 pl-6 text-[#4A4A4A] rounded-full focus:outline-none focus:border-[#FFD700] transition-all text-lg bg-transparent"
            />
            {searchTerm && (
              <FaTimes
                className="text-[#2E8B57] text-xl mr-5 cursor-pointer hover:text-[#FFD700] transition-colors duration-300"
                onClick={handleClearSearch}
              />
            )}
          </div>

          {suggestions.length > 0 && (
            <motion.ul
              className="absolute top-16 left-0 w-full bg-white rounded-xl shadow-xl mt-3 z-10 border border-[#2E8B57]/20"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              {suggestions.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleSuggestionClick(item)}
                  className="px-6 py-3 text-[#4A4A4A] hover:bg-[#FFD700]/20 hover:text-[#2E8B57] cursor-pointer transition-all duration-300 border-b border-[#E6ECEA] last:border-b-0"
                >
                  {cleanEnglishName(item.englishName)}
                </li>
              ))}
            </motion.ul>
          )}
        </motion.div>

        {selectedResult && (
          <motion.div
            className="mt-12 bg-white rounded-2xl shadow-2xl p-8 text-center max-w-2xl mx-auto border border-[#2E8B57]/10"
            initial="hidden"
            animate="visible"
            variants={slideUp}
          >
            <FaLeaf className="text-[#2E8B57] text-5xl mx-auto mb-6 drop-shadow-lg" />
            <h2 className="text-3xl font-playfair text-[#2E8B57] mb-4 drop-shadow-md">
              {cleanEnglishName(selectedResult.englishName)}
            </h2>
            <p className="text-xl text-[#4A4A4A] mb-6 leading-relaxed">
              Ayurvedic Term: <span className="font-semibold text-[#2E8B57]">{selectedResult.ayurvedaName}</span>
            </p>
            {showExploreButton && (
              <motion.button
                className="bg-[#FFD700] text-[#2E8B57] py-3 px-8 rounded-full text-lg font-medium hover:bg-[#2E8B57] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleExploreMoreClick}
              >
                Explore More
              </motion.button>
            )}

            {isLoading && (
              <motion.div
                className="mt-8 flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="relative w-20 h-20"
                  animate={spin}
                >
                  <div className="absolute w-full h-full border-4 border-[#2E8B57] border-t-transparent rounded-full"></div>
                  <div className="absolute w-16 h-16 border-4 border-[#FFD700] border-t-transparent rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </motion.div>
              </motion.div>
            )}

            {showBrokenMedicine && (
              <motion.div
                className="mt-8 bg-[#F0FFF0]/80 rounded-xl p-6 border border-[#2E8B57]/20 shadow-inner"
                initial="hidden"
                animate="visible"
                variants={scaleUp}
              >
                <h3 className="text-2xl font-playfair text-[#2E8B57] mb-5 flex items-center gap-2">
                  <FaPrescription className="text-[#2E8B57]" /> Recommended Medicine
                </h3>
                <div className="space-y-3 text-left pl-6">
                  <p className="flex items-center gap-2">
                    <FaFlask className="text-[#2E8B57] text-sm" />
                    <strong>Name:</strong> undefined
                  </p>
                  <p className="flex items-center gap-2">
                    <FaFlask className="text-[#2E8B57] text-sm" />
                    <strong>Pack Size:</strong> null
                  </p>
                  <p className="flex items-center gap-2">
                    <FaFlask className="text-[#2E8B57] text-sm" />
                    <strong>Indications:</strong> undefined
                  </p>
                  <p className="flex items-center gap-2">
                    <FaFlask className="text-[#2E8B57] text-sm" />
                    <strong>Dose:</strong> null
                  </p>
                  <p className="flex items-center gap-2">
                    <FaFlask className="text-[#2E8B57] text-sm" />
                    <strong>Precautions:</strong> undefined
                  </p>
                  <p className="flex items-center gap-2">
                    <FaFlask className="text-[#2E8B57] text-sm" />
                    <strong>Class:</strong> null
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default KnowMyHealth;
