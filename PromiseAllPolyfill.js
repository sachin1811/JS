//Promise All
Promise.myAll = function (promises) {
    const result = [];
    let resolvedCount = 0;
  
    if(promises.length === 0) {
      return Promise.resolve(promises)
    }
  
    return new Promise((resolve, reject) => {
      promises.forEach((promise, idx) => {
        Promise.resolve(promise)
          .then((res) => {
            result[idx] = res;
            resolvedCount++;
  
            if (resolvedCount === promises.length) {
              resolve(result);
            }
          })
          .catch((err) => {
              reject(err)
          });
      });
    });
  };


  const case1 = [
    new Promise((resolve) => {
      timer2 = setTimeout(resolve, 3000, "resolved");
    }),
    200,
    Promise.resolve("Hello"),
  ];
  
  Promise.myAll(case1)
    .then((res) => console.log(res))
    .catch((err) => console.log("Error: ", err));
  
  // Output:
  // [ "resolved", 200, "Hello"]
  
  /**
   *
   * Case 2: Any of the promises reject
   *
   */
  
  const case2 = [
    Promise.reject("rejected"),
    new Promise((resolve, reject) => {
      timer2 = setTimeout(reject, 3000, "rejectedReason");
    }),
  ];
  
  Promise.myAll(case2)
    .then((res) => console.log(res))
    .catch((err) => console.log("Error: ", err));
  
  // Output:
  // Error: rejected
  
  /**
   *
   * Case 3: Empty array passed
   *
   */
  
  const case3 = [];
  
  Promise.myAll(case3)
    .then((res) => console.log(res))
    .catch((err) => console.log("Error: ", err));
  
  // Output:
  // []
  

  let hooks = []; // This array will hold our states
let currentHook = 0; // A pointer to the current hook

function useState(initialValue) {
  hooks[currentHook] = hooks[currentHook] || initialValue; // If state doesn't exist, initialize it
  let hookIndex = currentHook; // Store the current hook index
  const setState = (newState) => {
      hooks[hookIndex] = newState; // Update the state
    };
  return [hooks[currentHook++], setState]; // Return current state and updater function, then move the pointer
}

const [data, setData] = useState(5);
setData(7);
console.log(data);
