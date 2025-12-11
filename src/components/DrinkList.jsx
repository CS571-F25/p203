import React from 'react';
import { ListGroup } from 'react-bootstrap';
import DrinkItem from './DrinkItem';

export default function DrinkList({ drinks }) {
  if (drinks.length === 0) {
    return <p className="text-muted fst-italic">No drinks logged yet.</p>;
  }

  return (
    <ListGroup variant="flush">
      {drinks.map(drink => (
        <DrinkItem key={drink.id} drink={drink} />
      ))}
    </ListGroup>
  );
}