import React from 'react';
import { ListGroup } from 'react-bootstrap';

export default function DrinkItem({ drink }) {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <span>{drink.name}</span>
      <span className="badge bg-secondary rounded-pill">{drink.amount} mg</span>
    </ListGroup.Item>
  );
}