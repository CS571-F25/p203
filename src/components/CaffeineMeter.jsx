import React from 'react';
import { ProgressBar, Card } from 'react-bootstrap';

export default function CaffeineMeter({ currentAmount, limit = 400 }) {
  
  // Calculate percentage against the PERSONALIZED limit
  const percentage = (currentAmount / limit) * 100;
  
  let variant = "success"; 
  if (percentage > 50) variant = "warning"; 
  if (percentage > 100) variant = "danger"; 

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <Card.Title className="d-flex justify-content-between">
          <span>Daily Intake</span>
          {/* Display the dynamic limit */}
          <span className="text-muted small">{currentAmount} / {limit} mg</span>
        </Card.Title>
        
        <ProgressBar 
            now={percentage} 
            label={`${Math.round(percentage)}%`} 
            variant={variant} 
            striped 
            animated={percentage > 80}
            style={{ height: '25px', fontSize: '1rem' }}
        />
        
        <Card.Text className="mt-2 text-muted small">
          {percentage < 100 
            ? `You have ${limit - currentAmount}mg remaining today.`
            : "You have exceeded your recommended daily limit."}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}