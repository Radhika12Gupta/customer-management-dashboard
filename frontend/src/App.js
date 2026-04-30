// src/App.js
import React, { useState, useEffect } from "react";
import Customerform from "./components/Customerform";
import Customertable from "./components/Customertable";
import "./App.css";

const App = () => {
  const [customers, setCustomers] = useState([]);
  const API_URL = "http://localhost:5001";

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const res = await fetch(`${API_URL}/customers`);
      const data = await res.json();
      setCustomers(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddCustomer = async (newCustomer) => {
    try {
      const res = await fetch(`${API_URL}/customers`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCustomer),
      });

      if (res.ok) {
        const addedCustomer = await res.json();
        setCustomers((prev) => [...prev, addedCustomer]);
      } else {
        const data = await res.json();
        alert(data.error || "Failed to add customer");
      }
    } catch (err) {
      alert("Network error");
    }
  };

  const handleDeleteCustomer = async (id) => {
    try {
      const res = await fetch(`${API_URL}/customers/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setCustomers((prev) =>
          prev.filter((customer) => customer.id !== id)
        );
      } else {
        const data = await res.json();
        alert(data.error || "Failed to delete customer");
      }
    } catch (err) {
      alert("Network error");
    }
  };

  return (
    <div className="app">
      {/* Only navbar in App.js */}
      <nav className="navbar">
        <h1 className="navbar-title">Customer Management Dashboard</h1>
      </nav>

      <main className="main-content">
        <Customerform onAddCustomer={handleAddCustomer} />
        <Customertable
          customers={customers}
          onDeleteCustomer={handleDeleteCustomer}
        />
      </main>
    </div>
  );
};

export default App;