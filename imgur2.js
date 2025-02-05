const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");
const multer = require("multer");

// Imgur Client ID
const CLIENT_ID = "e4f58fc81daec99"; 

// Multer configuration for handling image uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});
const upload = multer({ storage });

// Function to upload image to Imgur
async function uploadToImgur(imagePath) {
    const form = new FormData();
    form.append("image", fs.createReadStream(imagePath));

    try {
        const response = await axios.post("https://api.imgur.com/3/image", form, {
            headers: {
                ...form.getHeaders(),
                Authorization: `Client-ID ${CLIENT_ID}`,
            },
        });

        fs.unlinkSync(imagePath); // Delete the file after uploading
        return response.data.data.link;
    } catch (error) {
        console.error("Error uploading image:", error.response?.data || error.message);
        return null;
    }
}

// Export functions
module.exports = { upload, uploadToImgur };
