import React from 'react';
import { Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="bg-light text-center py-3 mt-5">
      <Container>
        <p className="mb-0 text-muted small">
          &copy; 2025 Caffeine Companion. Designed for CS571.
        </p>
      </Container>
    </footer>
  );
}