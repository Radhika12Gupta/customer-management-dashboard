// src/CustomerForm.js
import React, { useState } from "react";
import "../style/Customerform.css"

const Customerform = ({ onAddCustomer }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleAddCustomer = (e) => {
    e.preventDefault();
    setError("");

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();

    if (!trimmedName) {
      return setError("Name is required");
    }

    if (!trimmedEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return setError("Valid email is required");
    }

    if (!trimmedPhone.match(/^\d{10,}$/)) {
      return setError("Phone must be at least 10 digits");
    }

    onAddCustomer({ name: trimmedName, email: trimmedEmail, phone: trimmedPhone });

    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <section className="form-section">
      <div className="form-box">
        <h2>Add Customer</h2>

        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleAddCustomer}>
          <div className="form-group">
            <label className="form-label">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Phone</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="form-input"
            />
          </div>

          <button type="submit" className="form-button">
            Add Customer
          </button>
        </form>
      </div>
    </section>
  );
};

export default Customerform;