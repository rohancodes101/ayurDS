// src/utils/GeminiApi.js

const GEMINI_API_KEY = "AIzaSyCxWbiRc1skn81Evv9R6Kx_vGDeSIMeDO8";
// const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent"; 
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";  

// Function to fetch AI recommendation from Gemini API
export const fetchModelRecommendation = async (prompt) => {
  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt, // The prompt to send to Gemini
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.7, // Adjust for creativity
          maxOutputTokens: 200, // Limit response length
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    const data = await response.json();
    const generatedText = data.candidates[0]?.content?.parts[0]?.text || "No response received.";

    return generatedText;
  } catch (error) {
    console.error("Error fetching AI recommendation:", error);
    throw error;
  }
};