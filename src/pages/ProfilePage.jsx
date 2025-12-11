import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Card, Alert, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';

export default function ProfilePage({ userData, onSave }) {
  // Local state for form inputs
  const [weight, setWeight] = useState(userData.weight || '');
  const [height, setHeight] = useState(userData.height || '');
  const [bmi, setBmi] = useState(null);

  // Calculate BMI and Advice whenever weight/height changes
  useEffect(() => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(calculatedBmi);
    }
  }, [weight, height]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ weight, height }); // Send data back to App.jsx
    alert("Profile Saved! Your caffeine limit has been updated.");
  };

  return (
    <Container>
      <Header title="My Profile" subtitle="Personalize your limits." />

      <Row>
        <Col md={6}>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <Card.Title>Body Metrics</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Weight (kg)</Form.Label>
                  <Form.Control 
                    type="number" 
                    placeholder="e.g. 70" 
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    required
                  />
                  <Form.Text className="text-muted">
                    Used to calculate safe caffeine dosage.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Height (cm)</Form.Label>
                  <Form.Control 
                    type="number" 
                    placeholder="e.g. 175" 
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Save & Recalculate Limit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          {/* DYNAMIC ADVICE SECTION */}
          <Card className="bg-light border-0">
            <Card.Body>
              <h4>Your Health Insights</h4>
              <hr />
              {userData.limit < 400 ? (
                <Alert variant="info">
                  <strong>Personalized Limit:</strong> Based on your weight of {userData.weight}kg, 
                  we have lowered your recommended daily limit to <strong>{userData.limit}mg</strong> to prevent jitters.
                </Alert>
              ) : (
                <Alert variant="success">
                  <strong>Standard Limit:</strong> Your weight allows for the standard max of <strong>400mg</strong>, 
                  but be careful not to exceed it!
                </Alert>
              )}

              {bmi && (
                <div className="mt-3">
                  <strong>BMI Score: {bmi}</strong>
                  <p className="small text-muted">
                    Remember: Caffeine is a diuretic. For your height/weight, 
                    ensure you drink {Math.round(userData.weight * 0.033)} liters of water daily.
                  </p>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}