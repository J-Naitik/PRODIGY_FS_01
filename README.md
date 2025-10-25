# PRODIGY_FS_01

🛡️ Secure User Authentication — Task 01
📋 Description

This project implements a secure user authentication system using the MERN stack (MongoDB, Express, React, Node.js) with Vite for the frontend.

Users can:

Register for a new account

Log in securely

Access protected routes only after successful authentication

Additional optional features include:

Password hashing using bcrypt

JWT-based session management

Role-based access control for different user types

🧩 Tech Stack

Frontend: React (Vite), Axios, React Router
Backend: Node.js, Express.js, MongoDB, Mongoose, bcrypt, JWT
Database: MongoDB

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/secure-user-authentication.git
cd secure-user-authentication

2️⃣ Setup Backend
cd backend
npm install


Create a .env file inside the backend folder and add the following variables:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret


Run the backend server:

npm run dev


Your backend will start on http://localhost:5000

3️⃣ Setup Frontend

Open a new terminal and run:

cd frontend
npm install
npm run dev


Your frontend will start on http://localhost:5173 (default Vite port)

🔐 Features

✅ Secure user registration and login
✅ Passwords stored as bcrypt hashes
✅ JWT-based authentication system
✅ Protected routes accessible only after login
✅ Role-based access (Admin/User) (optional)
✅ Session management



# Terminal 1
cd backend
npm run dev

# Terminal 2
cd frontend
npm run dev




