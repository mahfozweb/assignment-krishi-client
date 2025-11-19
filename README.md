# 🌿 KrishiLink – Connecting Farmers, Traders & Consumers

A Smart Agricultural Marketplace for Buying, Selling, and Sharing Crop Insights

<!-- ![GreenPlant Banner](https://i.ibb.co/p6WJjLzv/mahfozgithub-Banner.png) -->

# 📖 About the Project

KrishiLink is a comprehensive agricultural marketplace designed to connect farmers, traders, and consumers.
It provides a platform where users can upload, manage, and sell their crops, while buyers can browse and request crops in real time.
The system also offers crop news, farming tips, and best practices to support informed decision-making.

# 📖 Project Overview :

## 🎯 Objective

- Facilitate direct interaction between farmers and buyers

- Help farmers manage their crops efficiently

- Provide reliable updates and insights on crop availability

## 👥 Target Audience

- Small and medium-scale farmers

- Traders looking to buy crops directly

- Consumers interested in fresh, local produce

- Agricultural enthusiasts seeking news and tips

## 📊 Key Metrics

- Number of active users (farmers & buyers)

- Crop uploads and approved requests

- Transactions completed through the platform

- Engagement with crop news and tips

## 🚀 Deployment

- The project is deployed on Vercel: [Click here to view](https://vercel.com/mahfozul-hoques-projects/assignment-krishi-server)

## ✨ Key Features

1. **Browse Crops & Vegetables**  
   Effortlessly explore a variety of crops and vegetables uploaded by other users.  
   Filter by category, price, and care level to quickly find what you need.  
   Real-time availability ensures accurate stock information.

2. **Upload Your Crops**  
   Users can easily upload their own crops or vegetables for sale.  
   Add details like crop name, category, price, quantity, care level, description, and images.  
   Manage all your uploads efficiently from your dashboard.

3. **Admin Control for Uploaded Crops**  
   Each user acts as an admin for their uploaded crops.  
   Approve or delete incoming requests from other users.  
   Monitor crop quantity and ensure proper inventory management.

4. **Request & Purchase Crops**  
   Users can send requests to buy crops from others.  
   Accepting a request automatically reduces the available quantity.  
   Track the status of your requests in real-time.

5. **User Authentication**  
   Secure login and registration system using Firebase Authentication.  
   Role-based access ensures privacy and control over user data.  
   Forgot password and reset functionality for seamless account management.

6. **Crop News & Tips**  
   Access the latest agricultural news and updates.  
   Get practical farming tips and insights to improve crop yield and quality.

7. **User Dashboard**  
   Manage your uploaded crops, requests, and profile from a single dashboard.  
   Monitor accepted and pending requests.  
   Edit or remove crops with ease.

8. **Admin Dashboard (Optional Future Enhancement)**  
   Comprehensive control over platform management.  
   View, approve, or manage user requests and uploads.  
   User management: Add, edit, or deactivate user accounts.

9. **Responsive & Modern Design**  
   Fully responsive UI built with Tailwind CSS and DaisyUI.  
   Optimized for desktop, tablet, and mobile devices.  
   Smooth and intuitive navigation for a seamless user experience.

10. **Deployment & Scalability**  
    Hosted on **Vercel** for fast, reliable performance.  
    Built with scalability in mind to handle increasing users and data.  
    Continuous updates and improvements for enhanced functionality.
    ## 🛠️ Tech Stack

### 🎨 Frontend

<div align="left">

| Technology       | Icon                                                                                                |
| ---------------- | --------------------------------------------------------------------------------------------------- |
| **HTML5**        | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="40"/> |
| **CSS3**         | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="40"/>   |
| **Tailwind CSS** | <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" width="40"/>          |
| **React.js**     | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="40"/> |

</div>

---

### 🧩 Backend

<div align="left">

| Technology     | Icon                                                                                                                                                              |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Node.js**    | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="40"/>                                                             |
| **Express.js** | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="40" style="background:white; padding:5px; border-radius:6px;"/> |

</div>

---

### 🗄️ Database

<div align="left">

| Technology  | Icon                                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------------------- |
| **MongoDB** | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width="40"/> |

</div>

---

### 🔐 Authentication

<div align="left">

| Technology               | Icon                                                                                         |
| ------------------------ | -------------------------------------------------------------------------------------------- |
| **Firebase Auth**        | <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" width="40"/>         |
| **JWT (JSON Web Token)** | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jwt/jwt-plain.svg" width="40"/> |

</div>

---

### 🚀 Deployment

<div align="left">

| Platform   | Icon                                                                             |
| ---------- | -------------------------------------------------------------------------------- |
| **Vercel** | <img src="https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg" width="40"/> |

</div>

# 🚀 Installation / Local Setup

Follow the steps below to run **KrishiLink** locally.

---

## 📥 🖥️ FRONTEND SETUP

```bash
git clone https://github.com/mahfozweb/assignment-krishi-client.git
cd krishilink
npm install
# Create Environment File
# This file will store your backend API URL and Firebase config
VITE_apiKey=yourApiKey
VITE_authDomain=yourAuthDomain
VITE_projectId=yourProjectId
VITE_storageBucket=yourStorageBucket
VITE_messagingSenderId=yourMessagingSenderId
VITE_appId=yourAppId

VITE_SERVER_URL=http://localhost:4000
# Run Frontend
npm run dev

```

# 🗄️ BACKEND SETUP

```bash
# Open a New Terminal & Navigate to Server Folder
cd ../server
# Install Dependencies
npm install
# Create Backend .env File
PORT=4000
MONGO_URL=yourMongoDBURL
JWT_SECRET=yourSecretKey
# Start Backend Server
npm start


```

# 🎉 All Setup Done!

## Your project is now running locally with:

- Frontend: http://localhost:5173

- Backend: http://localhost:4000

## 🚀 Project Live Link

[Click here to view the live site](https://assignment-krishi-client.netlify.app/)

---

# 📜 License

This project is **licensed under the MIT License** – one of the most permissive open-source licenses.  
You are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of this project, under the following conditions:

- You **must include the original copyright notice** and this permission notice in all copies or substantial portions of the project.
- The software is provided **“as is”**, without warranty of any kind, express or implied.
- The authors are **not responsible for any damages or liabilities** arising from the use of this project.

For more details, see the [LICENSE.txt](LICENSE.txt) file included in this repository.

---
