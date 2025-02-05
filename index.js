const express = require("express");
const { upload, uploadToImgur } = require("./imgur2");
const fs = require("fs-extra");

const app = express();
const PORT = 3000;

app.use(express.static("public")); // Serve HTML frontend
fs.ensureDirSync("uploads"); // Ensure uploads directory exists

// Upload endpoint
app.post("/upload", upload.single("image"), async (req, res) => {
    if (!req.file) return res.status(400).json({ error: "No file uploaded." });

    const imgurLink = await uploadToImgur(req.file.path);
    if (imgurLink) {
        res.json({ success: true, url: imgurLink });
    } else {
        res.status(500).json({ error: "Failed to upload image to Imgur." });
    }
});

// Start server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
