# ConnectHub - Authentication System

A full-stack social media platform with secure JWT-based authentication.

## 🚀 Features

- **Secure Authentication**: JWT-based login and signup
- **Password Hashing**: Bcrypt for secure password storage
- **Protected Routes**: Middleware for route protection
- **Role-Based Access**: User and Admin roles
- **Responsive UI**: Modern, clean interface
- **Context API**: Global state management for auth
- **MongoDB**: NoSQL database for user storage

## 📁 Project Structure

```
ronit/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── authController.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── authRoutes.js
│   ├── .env
│   ├── package.json
│   └── server.js
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/
    │   │   └── PrivateRoute.js
    │   ├── context/
    │   │   └── AuthContext.js
    │   ├── pages/
    │   │   ├── Login.js
    │   │   ├── Signup.js
    │   │   └── Dashboard.js
    │   ├── services/
    │   │   └── api.js
    │   ├── App.js
    │   ├── App.css
    │   ├── index.js
    │   └── index.css
    ├── .env
    └── package.json
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Backend Setup

1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables in `.env`:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/connecthub
   JWT_SECRET=your_super_secret_jwt_key_change_in_production
   JWT_EXPIRE=7d
   NODE_ENV=development
   ```

4. Make sure MongoDB is running:
   - **Local MongoDB**: Start MongoDB service
   - **MongoDB Atlas**: Use your Atlas connection string in `MONGODB_URI`

5. Start the backend server:
   ```bash
   npm run dev
   ```
   
   Server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables in `.env`:
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```

4. Start the React app:
   ```bash
   npm start
   ```
   
   App will run on `http://localhost:3000`

## 🧪 Testing the Authentication

### 1. Signup Flow
- Navigate to `http://localhost:3000`
- You'll be redirected to the login page
- Click "Sign up" link
- Fill in the signup form:
  - Full Name
  - Username (min 3 characters)
  - Email
  - Password (min 6 characters)
  - Confirm Password
- Click "Sign Up"
- You'll be automatically logged in and redirected to the dashboard

### 2. Login Flow
- Go to `http://localhost:3000/login`
- Enter your email and password
- Click "Login"
- You'll be redirected to the dashboard

### 3. Protected Routes
- Try accessing `http://localhost:3000/dashboard` without logging in
- You'll be redirected to the login page
- After logging in, you can access the dashboard

### 4. Logout
- Click the "Logout" button in the dashboard
- You'll be logged out and redirected to the login page

## 📡 API Endpoints

### Authentication Routes

#### Signup
```http
POST /api/auth/signup
Content-Type: application/json

{
  "name": "John Doe",
  "username": "johndoe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "username": "johndoe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "username": "johndoe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

#### Get Current User
```http
GET /api/auth/me
Authorization: Bearer jwt_token_here
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "username": "johndoe",
    "email": "john@example.com",
    "role": "user",
    "followers": [],
    "following": []
  }
}
```

## 🔒 Security Features

1. **Password Hashing**: Passwords are hashed using bcrypt before storing
2. **JWT Tokens**: Secure token-based authentication
3. **Protected Routes**: Middleware to verify authentication
4. **Role-Based Access**: Admin and User roles
5. **Input Validation**: Server-side validation for all inputs
6. **CORS**: Configured for cross-origin requests

## 🎨 Frontend Features

1. **React Router**: Client-side routing
2. **Context API**: Global authentication state
3. **Protected Routes**: HOC for route protection
4. **Axios Interceptors**: Automatic token attachment
5. **Responsive Design**: Mobile-friendly UI
6. **Error Handling**: User-friendly error messages

## 📦 Tech Stack

### Backend
- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **MongoDB**: Database
- **Mongoose**: ODM for MongoDB
- **bcryptjs**: Password hashing
- **jsonwebtoken**: JWT authentication
- **cors**: Cross-origin resource sharing
- **dotenv**: Environment variables

### Frontend
- **React**: UI library
- **React Router**: Routing
- **Axios**: HTTP client
- **Context API**: State management

## 🚢 Next Steps

To expand this authentication system:

1. **Password Reset**: Add forgot/reset password functionality
2. **Email Verification**: Verify user emails
3. **Profile Management**: Update user profiles
4. **Social Features**: Add posts, comments, likes
5. **File Upload**: Profile pictures with ImageKit
6. **Search & Filter**: User search functionality
7. **Follow System**: Follow/unfollow users
8. **Feed**: Personalized post feed

## 📝 Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRE=7d
NODE_ENV=development
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
```

## 🐛 Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running
- Check connection string in `.env`
- For Atlas, whitelist your IP address

### CORS Error
- Verify backend is running on port 5000
- Check frontend API URL in `.env`
- Ensure CORS is enabled in backend

### Token Errors
- Check JWT_SECRET is set in backend `.env`
- Verify token is being sent in Authorization header
- Check token expiration

## 📄 License

MIT

## 👤 Author

ConnectHub Team
# connectedhub
