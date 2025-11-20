import React from 'react';
import { Container } from 'react-bootstrap';
import DrinkForm from '../components/DrinkForm';

export default function TrackerPage({ onAdd }) {
  return (
    <Container>
      <h2>Log a Drink</h2>
      <DrinkForm onAdd={onAdd} /> 
    </Container>
  )
}