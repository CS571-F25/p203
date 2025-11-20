import React from 'react';
import { ProgressBar, Card } from 'react-bootstrap';

export default function CaffeineMeter(props) {
  const limit = 400; // FDA Adult Limit
  const now = (props.currentAmount / limit) * 100;
  
  // Change color based on danger levels
  let variant = "success";
  if (now > 50) variant = "warning";
  if (now > 90) variant = "danger";

  return (
    <Card className="mb-4" style={{ margin: '2rem 0' }}>
      <Card.Body>
        <Card.Title>Daily Limit: {props.currentAmount} / {limit} mg</Card.Title>
        <ProgressBar 
            now={now} 
            label={`${Math.round(now)}%`} 
            variant={variant} 
            striped 
        />
      </Card.Body>
    </Card>
  );
}