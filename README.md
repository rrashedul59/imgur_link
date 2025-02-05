Here's your **professional** `README.md` file with all the details you requested:  

---

# **lmgur_link - Upload Images to Imgur Effortlessly**  

🚀 **lmgur_link** is a simple and efficient Node.js package for uploading images to **Imgur**. It provides an **Express API** with an elegant **HTML web UI** for easy image uploads and sharing.

### ✨ **Features**  
✔ **Upload any image format** (JPG, PNG, GIF, etc.)  
✔ **Fast & Reliable** – Uses Imgur's API for instant uploads  
✔ **Copy Image URL** directly from UI  
✔ **Auto-delete local files** after upload  
✔ **Simple API endpoint for automation**  

---

## 📦 **Installation & Setup**  

### **1️⃣ Install the Package in Your Project**  
```sh
npm i imgur-link
```

### **2️⃣ Import and Use in Your Node.js Project**  
```javascript
const { uploadToImgur } = require("imgur-link");

async function testUpload() {
    try {
        const imgUrl = await uploadToImgur("image.jpg");
        console.log("Imgur URL:", imgUrl);
    } catch (error) {
        console.error("Error uploading image:", error);
    }
}

testUpload();

```

---

## 🎯 **Using the `imgur-link` NPM Package**  

### **Installation in Another Project**  
```sh
npm install imgur-link
```

### **Usage in Your Project**  
```javascript
const { uploadToImgur } = require("imgur-link");

async function testUpload() {
    try {
        const imgUrl = await uploadToImgur("image.jpg");
        console.log("Imgur URL:", imgUrl);
    } catch (error) {
        console.error("Error uploading image:", error);
    }
}

testUpload();

```

---

## 🚀 **Running the Express Server (For Web UI & API)**  

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/rrashedul59/imgur_link.git
cd imgur2
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Start the Server**
```sh
npm start
```

### **4️⃣ Open in Browser**
Visit: **[http://localhost:3000](http://localhost:3000)**  

✔ Upload an image  
✔ Get the Imgur link  
✔ Copy the link with one click  

---

## 📌 **API Usage**  

### **➤ Upload Image via API**  
#### **Endpoint:**  
```http
POST /upload
```
#### **Body (Form-Data):**
- `image` (File) - The image file to upload  

#### **Response:**
```json
{
  "success": true,
  "url": "https://i.imgur.com/example.jpg"
}
```

---

## 💡 **Project Structure**  
```
imgur_link/
│── imgur2.js       # Handles image upload to Imgur
│── index.js        # Main export file for the package
│── package.json    # NPM package config
│── README.md       # Documentation


---

## 📜 **License**  
This project is **MIT Licensed** – Free to use, modify, and distribute.

---

## 📢 **Author & Contact**  
💻 **Made by:** Sheikh Tamim  
📩 **Messenger:** [m.me/sheikh.tamim.lover](https://m.me/sheikh.tamim.lover)  
📸 **Instagram:** [@sheikh.tamim_lover](https://www.instagram.com/sheikh.tamim_lover)  

---

Let me know if you want any modifications! 🚀🔥