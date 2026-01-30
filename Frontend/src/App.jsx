import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import TodoList from './components/Todolist';

function App() {

  // 🛡 ProtectedRoute component App.js ke andar hi
  const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token");
    if (!token) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected route */}
        <Route 
          path="/task" 
          element={
            <ProtectedRoute>
              <TodoList />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
