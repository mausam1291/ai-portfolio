const { getAIResponse } = require("../services/aiService");

async function chatController(req, res) {
  try {
    const { message } = req.body;

    if (!message || message.trim() === "") {
      return res.status(400).json({
        error: "Message is required",
      });
    }

    const reply = await getAIResponse(message);

    res.json({
      reply: reply,
    });
  } catch (error) {
    console.error("AI Error:", error);

    res.status(500).json({
      error: "Something went wrong while contacting the AI.",
    });
  }
}

module.exports = {
  chatController,
};