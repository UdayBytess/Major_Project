

***

# 🌍 Wanderlust – A Full-Stack Travel Listing Platfor

Wanderlust is a full-featured travel and accommodation web platform built using the MERN (MongoDB, Express, Node.js) stack and EJS templating. It enables users to discover, create, review, and manage travel listings with seamless authentication, image hosting, and cloud integration.

***

## 🚀 Features

- 🧭 Dynamic Travel Listings – Create, view, and manage listings with details like title, price, country, and location.
- 🖼️ Cloud Image Uploads – Integrated with Cloudinary for secure image storage and optimization.
- 🔐 User Authentication & Authorization – Login, signup, and route protection via Passport.js and session handling.
- 💬 Reviews & Ratings – Add, validate, and manage user reviews with Joi schema validation.
- ⚙️ Error Handling Middleware – Custom 404 and server error pages using centralized Express middleware.
- 🌐 Responsive Frontend – EJS templates and layout engine (ejs-mate) for dynamic HTML rendering.
- 🧠 Validation & Access Control – Middleware checks ensure secure CRUD operations for listings and reviews.

***

## 🛠️ Tech Stack

| Layer             | Technology / Library                | Purpose                               |
|-------------------|------------------------------------|----------------------------------------|
| Frontend          | EJS, EJS-Mate                      | Dynamic templating & layouts           |
| Backend           | Express.js, Node.js                 | RESTful API and server logic           |
| Database          | MongoDB, Mongoose                   | Data modeling and queries              |
| Authentication    | Passport.js, Passport-Local-Mongoose| Login and route security               |
| File Uploads      | Multer, Cloudinary                  | Media handling and cloud storage       |
| Validation        | Joi                                 | Schema-based data validation           |
| Session & Flash   | Express-Session, Connect-Mongo, Connect-Flash | User sessions, alerts & persistent login |
| Environment Mgmt  | Dotenv                              | Manage environment variables           |
| Deployment Ready  | Cloudinary Config, Mongo Atlas URL  | Cloud-based storage & database connectivity |

***

## 🧩 Folder Architecture Overview

```
.
├── app.js                # Main server entry point
├── cloudConfig.js        # Cloudinary configuration for file uploads
├── middleware.js         # Custom middlewares for auth & validation
├── schema.js             # Joi schemas for listing and review validation
├── package.json          # Project metadata and dependencies
├── /models               # Mongoose schemas (User, Listing, Review)
├── /routes               # Modular routing for users, listings, reviews
├── /views                # EJS templates and layouts
├── /public               # Static assets (CSS, JS, images)
└── /utils                # Error handlers and utility modules
```

***

## 📦 Major Dependencies

- express (v5.1.0) – Core web server framework
- mongoose (v8.17.2) – MongoDB ODM
- passport (v0.7.0) and passport-local-mongoose (v8.0.0) – Authentication
- cloudinary (v1.41.3) – Image storage and delivery
- multer-storage-cloudinary (v4.0.0) – Upload handling via Multer
- connect-mongo (v5.1.0) – MongoDB session store
- dotenv (v17.2.2) – Environment variable management
- joi (v18.0.1) – Data validation
- method-override (v3.0.0) – PUT/DELETE method emulation

***

## 🧠 Core Workflow

- User Registration & Login through Passport.js.
- CRUD Operations – Create, read, update, and delete listings and reviews.
- File Uploads handled by Multer and stored in Cloudinary.
- Form Validation with Joi before database transactions.
- Flash Messages for user feedback (success/error).
- Secure Sessions using connect-mongo for persistent logins.

***

## 🌐 Cloud & Deployment Integration

- Cloudinary: For real-time image optimization and CDN delivery.
- MongoDB Atlas: Cloud-hosted, scalable database.
- Environment Variables: Managed via .env file to keep credentials secure.

***

## 🎯 Highlights for Recruiters

- Demonstrates complete full-stack workflow with DB integration, API structure, and authentication.
- Implements production-level middleware for security and error handling.
- Uses cloud services for scalability — ideal for deployment on Render/Heroku/Vercel.
- Clean, modular codebase following MVC architectural principles.

***

## 🏁 Getting Started

**Installation:**
```bash
git clone https://github.com/yourusername/wanderlust.git
cd wanderlust
npm install
```

**Environment Setup:**
Create a .env file with:
```
ATLASDB_URL=your_mongodb_url
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_api_key
CLOUD_API_SECRET=your_api_secret
SECRET=session_secret
```

**Run Server:**
```bash
npm start
```

Then visit:
```
http://localhost:8080/
```

***

## 🤝 Contributions
Pull requests are welcome! For major changes, please open an issue first to discuss potential updates.

***

## 💡 Future Enhancements

- Implement a map view using Mapbox SDK.
- Add real-time chat feature for travelers.
- Improve UI with frontend frameworks like React or Bootstrap.

***

