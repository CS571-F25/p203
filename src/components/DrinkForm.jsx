import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

// 1. Define your popular drinks data
const PRESETS = [
  { name: 'Drip Coffee (8oz)', amount: 95 },
  { name: 'Espresso (1 shot)', amount: 65 },
  { name: 'Latte / Cappuccino', amount: 75 },
  { name: 'Black Tea (8oz)', amount: 47 },
  { name: 'Green Tea (8oz)', amount: 28 },
  { name: 'Soda / Cola (Can)', amount: 34 },
  { name: 'Energy Drink (Can)', amount: 150 },
];

export default function DrinkForm({ onAdd }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();

  // 2. Handle the "Quick Select" change
  const handlePresetChange = (e) => {
    const selectedName = e.target.value;
    if (!selectedName) return; // User selected the placeholder

    // Find the drink object from the array
    const drink = PRESETS.find(p => p.name === selectedName);
    if (drink) {
      setName(drink.name);
      setAmount(drink.amount);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh on Enter key
    if (!name || !amount) {
      alert("Please fill in both fields!");
      return;
    }

    const newDrink = {
      id: Date.now(),
      name: name,
      amount: parseInt(amount),
      date: new Date().toLocaleString()
    };

    onAdd(newDrink);
    navigate('/');
  };

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          
          {/* NEW: Interactive Selective Dropdown */}
          <Form.Group className="mb-4">
            <Form.Label><strong>Quick Select (Popular Options)</strong></Form.Label>
            <Form.Select onChange={handlePresetChange} defaultValue="">
              <option value="">-- Choose a drink to auto-fill --</option>
              {PRESETS.map((p) => (
                <option key={p.name} value={p.name}>
                  {p.name} ({p.amount}mg)
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <hr />

          {/* Standard Inputs (Auto-filled by select, or manual) */}
          <Form.Group className="mb-3">
            <Form.Label>Drink Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="e.g. Double Shot Espresso" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Caffeine Amount (mg)</Form.Label>
            <Form.Control 
              type="number" 
              placeholder="e.g. 130" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Add to Log
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}