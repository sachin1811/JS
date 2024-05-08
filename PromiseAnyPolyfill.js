Promise.myAny = (promises) => {
    const errorsList = new Array(promises.length);
    let counter = 0;
  
    return new Promise((resolve, reject) => {
      promises.forEach((promise, idx) => {
        Promise.resolve(promise)
          .then((res) => resolve(res))
          .catch((err) => {
            errorsList[idx] = err;
            counter++;
  
            if (counter === promises.length) {
              reject(
                new Error(errorsList, "All promises were rejected")
              );
            }
          });
      });
    });
  };

  /**
 *
 * Case 1: Any of the promises resolve
 *
 */

const case1 = [
    new Promise((resolve) => {
      timer2 = setTimeout(resolve, 3000, "resolved");
    }),
    200,
    Promise.reject("Hello"),
  ];
  
  Promise.myAny(case1)
    .then((res) => console.log(res))
    .catch((err) => console.log("Error: ", err));
  
  // Output:
  // 200
  
  /**
   *
   * Case 2: All of the promises reject
   *
   */
  
  const case2 = [
    Promise.reject("rejected"),
    new Promise((resolve, reject) => {
      timer2 = setTimeout(reject, 3000, "rejectedReason");
    }),
  ];
  
  Promise.myAny(case2)
    .then((res) => console.log(res))
    .catch((err) => console.log("Error: ", err.name, err.message, err.errors));
  
  // Output:
  // Error: AggregateError All promises were rejected ["rejected", "rejectedReason"]