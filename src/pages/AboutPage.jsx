import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Header from '../components/Header'; 

export default function AboutPage() {
  return (
    <div>
      <Header title="About Us" subtitle="Staying healthy, one cup at a time." />

      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow-sm border-0 p-4">
              <Card.Body>
                <h3>Our Mission</h3>
                <p className="lead">
                  Caffeine Companion helps you track your daily intake so you can stay focused without the jitters.
                </p>
                <p>
                  We use guidelines from the <strong>FDA</strong> (400mg daily limit) and <strong>WHO</strong> to 
                  provide safe, personalized recommendations based on your body weight.
                </p>
                
                <hr className="my-4"/>

                <h5>Privacy First</h5>
                <p className="text-muted">
                  Your data is stored locally on your device. We do not track you or send your data to any servers.
                </p>
              </Card.Body>
            </Card>

          </Col>
        </Row>
      </Container>
    </div>
  );
}