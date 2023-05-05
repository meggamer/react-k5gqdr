import React from 'react';
export function Header(props) {
  let clock = Date().toLocaleString();

  setInterval(() => {
    clock = Date().toLocaleString();
  }, 1000);

  console.log('Header executed');

  return (
    <h1 className="orange">
      Hello {props.name} {clock}
    </h1>
  );
}
