import React, { useState } from 'react';

const PopupForm = ({ onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        // Initialize your form fields here
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform any validation here if needed
        onSubmit(formData);
    };

    return (
        <div className="popup">
            <div className="popup-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    </label>
                    <label>
                        Message:
                        <textarea name="message" value={formData.message} onChange={handleChange} />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default PopupForm;
