const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors()); // Allow frontend to connect from browser extension

app.post("/summarize", async (req, res) => {
  const { text } = req.body;

  // Check if the text is missing
  if (!text || text.trim() === "") {
    return res.status(400).json({ error: "Blog content is missing or empty." });
  }

  console.log("Received blog content for summarization:", text.slice(0, 200)); // Log the first 200 characters for debugging

  try {
    // Request for the general summary (paragraph format)
    const summaryResponse = await axios.post(
      "https://api.cohere.ai/v1/generate",
      {
        model: "command-light",
        prompt: `Summarize the following blog content in a detailed paragraph. Be concise but informative. The summary should capture the most important aspects of the blog content:

        Blog Content:
        ${text}`,
        max_tokens: 400,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.COHERE_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Request for key points (bullet points)
    const pointsResponse = await axios.post(
      "https://api.cohere.ai/v1/generate",
      {
        model: "command-light",
        prompt: `Provide key takeaways from the following blog content as bullet points. Be concise and clear. Make sure to cover the most important points:

        Blog Content:
        ${text}`,
        max_tokens: 400,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.COHERE_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Handle the potential errors or unexpected responses gracefully
    const summary = summaryResponse?.data?.generations?.[0]?.text?.trim() || "No summary available.";
    const points = pointsResponse?.data?.generations?.[0]?.text?.trim().split("\n") || ["No key points available."];

    res.json({ summary, points });

  } catch (error) {
    console.error("Error with Cohere API:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to generate summary and key points." });
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
