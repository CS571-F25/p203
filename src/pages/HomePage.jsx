import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import CaffeineMeter from '../components/CaffeineMeter';
import WarningBanner from '../components/WarningBanner';
import DrinkList from '../components/DrinkList';

// Now accepts 'limit' as a prop
export default function HomePage({ drinks, limit }) {
  // Calculate total caffeine
  const totalCaffeine = drinks.reduce((total, drink) => total + drink.amount, 0);

  return (
    <div>
      <Header 
        title="Dashboard" 
        subtitle={`Daily Goal: Keep under ${limit}mg`} 
      />
      
      <WarningBanner currentAmount={totalCaffeine} limit={limit} />

      <Row className="justify-content-center">
        <Col md={8}>
          {/* Dynamic Meter based on personal limit */}
          <CaffeineMeter currentAmount={totalCaffeine} limit={limit} />
        </Col>
      </Row>

      <h2 className="mt-5 h4">Today's Log</h2>
      <DrinkList drinks={drinks} />
    </div>
  )
}