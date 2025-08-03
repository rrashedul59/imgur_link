const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");

async function uploadToImgur(imagePath) {
    try {
        if (!fs.existsSync(imagePath)) {
            throw new Error("File not found: " + imagePath);
        }

        const imageData = fs.createReadStream(imagePath);
        const form = new FormData();
        form.append("image", imageData);

        const response = await axios.post("https://api.imgur.com/3/image", form, {
            headers: {
                Authorization: "Client-ID d70305e7c3ac5c6", // Change to your actual Client-ID
                ...form.getHeaders(),
            },
        });

        return response.data.data.link;
    } catch (error) {
        throw new Error("Upload failed: " + error.message);
    }
}

// ✅ Export function for package use
module.exports = { uploadToImgur };
