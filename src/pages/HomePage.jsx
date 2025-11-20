import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CaffeineMeter from '../components/CaffeineMeter';

export default function HomePage({ drinks }) {
  const totalCaffeine = drinks.reduce((total, drink) => total + drink.amount, 0);

  return (
    <div> 
      <div className="mb-5"> {/* Removed text-center to align left like a dashboard, add back if you want */}
        <h1>Caffeine Companion</h1>
        <p className="lead">Track your intake, stay within safe limits.</p>
      </div>

      {/* CHANGE: Remove Row/Col constraints to let it stretch */}
      <CaffeineMeter currentAmount={totalCaffeine} />

      <h4 className="mt-5">Today's Log</h4>
      <ul>
        {drinks.map(d => (
          <li key={d.id}>{d.name} - {d.amount}mg</li>
        ))}
      </ul>
    </div>
  )
}