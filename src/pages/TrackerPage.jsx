import React from 'react';
import { Container, Button } from 'react-bootstrap'; // Import Button
import DrinkForm from '../components/DrinkForm';
import Header from '../components/Header';

export default function TrackerPage({ onAdd, onClear }) { // Receive onClear
  return (
    <div>
      <Header title="Log a Drink" subtitle="Add manually or choose a preset." />
      
      <Container style={{ maxWidth: '600px' }}> {/* Limit width for better look */}
        <DrinkForm onAdd={onAdd} />
        
        <hr className="my-5" />
        
        <div className="text-center">
          <p className="text-muted">Start a fresh day?</p>
          <Button variant="outline-danger" onClick={onClear}>
            Reset Daily Log
          </Button>
        </div>
      </Container>
    </div>
  )
}