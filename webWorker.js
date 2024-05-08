import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [result, setResult] = useState(null);
  const [worker, setWorker] = useState(null);

  useEffect(() => {
    // Create a new web worker
    const myWorker = new Worker('worker.js');

    // Set up event listener for messages from the worker
    myWorker.onmessage = function (event) {
      console.log('Received result from worker:', event.data);
      setResult(event.data);
    };

    // Save the worker instance to state
    setWorker(myWorker);

    // Clean up the worker when the component unmounts
    return () => {
      myWorker.terminate();
    };
  }, []); // Run this effect only once when the component mounts

  const handleClick = () => {
    // Send a message to the worker
    if (worker) {
      worker.postMessage(5); // Send the number 5 to the worker
    }
  };

  return (
    <div>
      <p>Result from the worker: {result}</p>
      <button onClick={handleClick}>Calculate in Web Worker</button>
    </div>
  );
};

export default MyComponent;


const first = document.querySelector('#number1');
const second = document.querySelector('#number2');

const result = document.querySelector('.result');

if (window.Worker) {
  const myWorker = new Worker("worker.js");

  [first, second].forEach(input => {
    input.onchange = function() {
      myWorker.postMessage([first.value, second.value]);
      console.log('Message posted to worker');
    }
  })

  myWorker.onmessage = function(e) {
    result.textContent = e.data;
    console.log('Message received from worker');
  }
} else {
  console.log('Your browser doesn\'t support web workers.');
}
