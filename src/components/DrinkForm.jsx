import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // To redirect after adding

export default function DrinkForm({ onAdd }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Basic validation
    if (!name || !amount) {
      alert("Please fill in both fields!");
      return;
    }

    // Create the drink object
    const newDrink = {
      id: Date.now(), // Unique ID based on time
      name: name,
      amount: parseInt(amount), // Ensure it's a number
      date: new Date().toLocaleString()
    };

    // Send data up to App.jsx
    onAdd(newDrink);
    
    // Redirect user back to Dashboard to see progress
    navigate('/'); 
  };

  return (
    <Form className="border p-4 rounded shadow-sm bg-light">
      <Form.Group className="mb-3">
        <Form.Label>Drink Name</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="e.g. Espresso" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Caffeine Amount (mg)</Form.Label>
        <Form.Control 
          type="number" 
          placeholder="e.g. 65" 
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" onClick={handleSubmit}>
        Add to Log
      </Button>
    </Form>
  );
}