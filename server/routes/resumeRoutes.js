const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const { PDFParse } = require("pdf-parse");

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

const resumePath = path.join(__dirname, "../data/resume.txt");

router.post("/upload", upload.single("resume"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        error: "Please upload a PDF resume.",
      });
    }

    if (req.file.mimetype !== "application/pdf") {
      return res.status(400).json({
        error: "Only PDF files are allowed.",
      });
    }

    const parser = new PDFParse({
      data: req.file.buffer,
    });

    const pdfData = await parser.getText();

    const resumeText = pdfData.text.trim();

    await parser.destroy();

    if (!resumeText) {
      return res.status(400).json({
        error: "Could not extract text from the PDF.",
      });
    }

    fs.writeFileSync(resumePath, resumeText, "utf8");

    res.json({
      message: "Resume uploaded and updated successfully.",
      characters: resumeText.length,
    });
  } catch (error) {
    console.error("Resume upload error:", error);

    res.status(500).json({
      error: "Failed to process the resume.",
      details: error.message,
    });
  }
});

module.exports = router;