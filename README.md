# Todo List Application

A full-stack Todo List application built with React.js frontend and Node.js/Express backend with MongoDB database.

## Features

- User Authentication (Login/Signup)
- Create, Read, Update, Delete Tasks
- Mark tasks as completed/incomplete
- Responsive design with Tailwind CSS
- JWT-based authentication
- RESTful API

## Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Axios for API calls

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing

## Project Structure

```
Todo_list/
├── Frontend/          # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── utils/
│   │   └── ...
│   └── package.json
├── Backend/           # Node.js backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js
- MongoDB
- Git

### Backend Setup
```bash
cd Backend
npm install
# Create .env file with your MongoDB connection string
npm start
```

### Frontend Setup
```bash
cd Frontend
npm install
npm run dev
```

## API Endpoints

### Authentication
- POST `/api/auth/register` - User registration
- POST `/api/auth/login` - User login

### Tasks
- GET `/api/tasks` - Get all tasks for authenticated user
- POST `/api/tasks` - Create new task
- PUT `/api/tasks/:id` - Update task
- DELETE `/api/tasks/:id` - Delete task

## Environment Variables

Create `.env` file in Backend directory:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

## Demo

This application allows users to:
1. Register and login securely
2. Create new todo tasks
3. Mark tasks as completed
4. Edit existing tasks
5. Delete unwanted tasks
6. View all tasks in a clean, responsive interface

## Author

Rupesh - Full Stack Developer