import React, { useRef, forwardRef, useState } from 'react';
import './style.css';

export default function App() {
  const inputRefs = useRef([]);

  const focusInput = (index) => {
    inputRefs.current[index].focus();
  };

  return (
    <div>
      <Child ref={inputRefs} />
      <button onClick={() => focusInput(0)}>Button 1</button>
      <button onClick={() => focusInput(1)}>Button 2</button>
    </div>
  );
}

const Child = forwardRef((props, ref) => {
  return (
    <div>
      <input ref={(el) => ref.current.push(el)} placeholder="text 1" />
      <input ref={(el) => ref.current.push(el)} placeholder="text 2" />
    </div>
  );
});
