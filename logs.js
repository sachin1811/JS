function createIncrement() {
  let count = 10;
  function increment() { 
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log, count];
}

const [increment, log, count] = createIncrement();
increment(); 
increment(); 
increment(); 
log();
