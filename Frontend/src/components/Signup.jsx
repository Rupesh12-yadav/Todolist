import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../utils/api";
import { validateEmail, validatePassword, validateName } from "../utils/validation";
import "./Signup.css";

function Signup() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const navigate = useNavigate();

  const validateField = (name, value) => {
    switch (name) {
      case 'name': return validateName(value);
      case 'email': return validateEmail(value);
      case 'password': return validatePassword(value);
      default: return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {};
    newErrors.name = validateName(formData.name);
    newErrors.email = validateEmail(formData.email);
    newErrors.password = validatePassword(formData.password);
    
    setErrors(newErrors);
    setTouched({ name: true, email: true, password: true });
    
    return !newErrors.name && !newErrors.email && !newErrors.password;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    try {
      await API.post("/auth/signup", formData);
      alert("Signup successful 🎉");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Signup</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.name && touched.name ? 'error' : ''}
            />
            {errors.name && touched.name && (
              <span className="error-message">{errors.name}</span>
            )}
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email && touched.email ? 'error' : ''}
            />
            {errors.email && touched.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.password && touched.password ? 'error' : ''}
            />
            {errors.password && touched.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>

          <button type="submit">Signup</button>
        </form>

        <p className="footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;