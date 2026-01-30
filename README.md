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
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- Git

### Quick Start
1. Clone the repository:
```bash
git clone <your-repo-url>
cd Todo_list
```

2. Install all dependencies:
```bash
npm run install-deps
```

3. Setup Backend:
```bash
cd Backend
cp .env.example .env
# Edit .env file with your MongoDB connection string and JWT secret
```

4. Start the application:
```bash
# Terminal 1 - Start Backend (from root directory)
npm run server

# Terminal 2 - Start Frontend (from root directory)
npm run client
```

### Manual Setup

#### Backend Setup
```bash
cd Backend
npm install
# Create .env file with your configuration (see .env.example)
npm start
```

#### Frontend Setup
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

Create `.env` file in Backend directory (use `.env.example` as template):
```
MONGODB_URI=mongodb://127.0.0.1:27017/todoapp
JWT_SECRET=your_jwt_secret_key_here
PORT=5000
```

**Note**: Never commit your actual `.env` file to version control.

## Demo

This application allows users to:
1. Register and login securely
2. Create new todo tasks
3. Mark tasks as completed
4. Edit existing tasks
5. Delete unwanted tasks
6. View all tasks in a clean, responsive interface

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Author

Rupesh - Full Stack Developer