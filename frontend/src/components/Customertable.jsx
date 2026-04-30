// src/CustomerTable.js
import React from "react";
import "../style/Customertable.css"

const Customertable = ({ customers, onDeleteCustomer }) => {
  if (customers.length === 0) {
    return <p className="no-customers">No customers yet.</p>;
  }

  return (
    <section className="table-section">
      <h2>Customers</h2>
      <table className="customers-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr
              key={customer.id}
              className={
                index % 2 === 0
                  ? "table-row even"
                  : "table-row odd"
              }
            >
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>
                <button
                  onClick={() => onDeleteCustomer(customer.id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Customertable;