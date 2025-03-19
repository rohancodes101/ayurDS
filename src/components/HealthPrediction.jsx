// import React, { useState, useEffect } from "react";

// function HealthPrediction() {
//   const [data, setData] = useState([]);
//   const [searchInput, setSearchInput] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [selectedResult, setSelectedResult] = useState(null);

//   useEffect(() => {
//     fetch("/englishToAyurveda.json")
//       .then((response) => response.json())
//       .then((jsonData) => setData(jsonData))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   const handleInputChange = (e) => {
//     const inputValue = e.target.value;
//     setSearchInput(inputValue);

//     if (inputValue) {
//       const filteredSuggestions = data
//         .filter((item) =>
//           item.englishName.toLowerCase().startsWith(inputValue.toLowerCase())
//         )
//         .map((item) => item.englishName);
//       setSuggestions(filteredSuggestions);
//     } else {
//       setSuggestions([]);
//     }
//     setSelectedResult(null)
//   };

//   const handleSuggestionClick = (suggestion) => {
//     setSearchInput(suggestion);
//     setSuggestions([]);
//     const result = data.find(item => item.englishName === suggestion)
//     setSelectedResult(result);
//   };

//   return (
//     <div className="p-4">
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchInput}
//         onChange={handleInputChange}
//         className="border border-gray-300 rounded p-2 w-full"
//       />

//       {suggestions.length > 0 && (
//         <ul className="border border-gray-300 rounded mt-1">
//           {suggestions.map((suggestion, index) => (
//             <li
//               key={index}
//               onClick={() => handleSuggestionClick(suggestion)}
//               className="p-2 hover:bg-gray-100 cursor-pointer"
//             >
//               {suggestion}
//             </li>
//           ))}
//         </ul>
//       )}

//       {selectedResult && (
//         <div className="mt-4 p-4 border border-gray-300 rounded">
//           <h2 className="text-xl font-semibold">{selectedResult.englishName}</h2>
//           <p>Ayurveda Name: {selectedResult.ayurvedaName}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default HealthPrediction;




import React from 'react';

const HealthPrediction = () => {
  return (
    <div>
      <h1>Health Prediction Page</h1>
      {/* Your UI content here */}
    </div>
  );
};

export default HealthPrediction;