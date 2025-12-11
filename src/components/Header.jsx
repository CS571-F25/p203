import React from 'react';

export default function Header({ title, subtitle }) {
  return (
    <header className="mb-4">
      <h1 className="display-5">{title}</h1>
      {subtitle && <p className="lead text-muted">{subtitle}</p>}
      <hr />
    </header>
  );
}