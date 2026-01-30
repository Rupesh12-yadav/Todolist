import { useState } from 'react';

// Validation utility functions
export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return 'Email is required';
    if (!emailRegex.test(email)) return 'Please enter a valid email';
    return '';
};

export const validatePassword = (password) => {
    if (!password) return 'Password is required';
    if (password.length < 6) return 'Password must be at least 6 characters';
    if (!/(?=.*[a-z])/.test(password)) return 'Password must contain at least one lowercase letter';
    if (!/(?=.*[A-Z])/.test(password)) return 'Password must contain at least one uppercase letter';
    if (!/(?=.*\d)/.test(password)) return 'Password must contain at least one number';
    return '';
};

export const validateName = (name) => {
    if (!name) return 'Name is required';
    if (name.trim().length < 2) return 'Name must be at least 2 characters';
    if (name.trim().length > 50) return 'Name must be less than 50 characters';
    return '';
};

export const validateTaskTitle = (title) => {
    if (!title) return 'Task title is required';
    if (title.trim().length < 1) return 'Task title cannot be empty';
    if (title.trim().length > 200) return 'Task title must be less than 200 characters';
    return '';
};

// Form validation hook
export const useFormValidation = (initialState, validationRules) => {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const validateField = (name, value) => {
        if (validationRules[name]) {
            return validationRules[name](value);
        }
        return '';
    };

    const handleChange = (name, value) => {
        setValues(prev => ({ ...prev, [name]: value }));
        
        if (touched[name]) {
            const error = validateField(name, value);
            setErrors(prev => ({ ...prev, [name]: error }));
        }
    };

    const handleBlur = (name) => {
        setTouched(prev => ({ ...prev, [name]: true }));
        const error = validateField(name, values[name]);
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    const validateAll = () => {
        const newErrors = {};
        let isValid = true;

        Object.keys(validationRules).forEach(field => {
            const error = validateField(field, values[field]);
            newErrors[field] = error;
            if (error) isValid = false;
        });

        setErrors(newErrors);
        setTouched(Object.keys(validationRules).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
        return isValid;
    };

    return {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        validateAll,
        setValues
    };
};