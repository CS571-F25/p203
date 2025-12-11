import React from 'react';
import { Alert } from 'react-bootstrap';

export default function WarningBanner({ currentAmount, limit = 400 }) {
  if (currentAmount < limit) return null; // Don't show if safe

  return (
    <Alert variant="danger" role="alert">
      <strong>Warning:</strong> You have exceeded the daily recommended limit of {limit}mg!
    </Alert>
  );
}