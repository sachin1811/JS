//Promise All Settled

Promise.myAllSettled = (promises) => {
    const results = new Array(promises.length);
    let counter = 0;
  
    return new Promise((resolve, reject) => {
      promises.forEach((promise, index) => {
        Promise.resolve(promise)
          .then((res) => {
            results[index] = { status: "fulfilled", value: res };
          })
          .catch((err) => {
            results[index] = { status: "rejected", reason: err };
          })
          .finally(() => {
            counter++;
            if (counter === promises.length) {
              resolve(results);
            }
          });
      });
    });
  };

/**
 *
 * Case: When all promises settle
 *
 */

const case1 = [
  new Promise((resolve) => {
    timer2 = setTimeout(resolve, 3000, "resolved");
  }),
  200,
  Promise.reject("Hello"),
];

Promise.myAllSettled(case1)
  .then((res) => console.log(res))
  .catch((err) => console.log("Error: ", err));

// Output:
// [
//  { status: 'fulfilled', value: 'resolved' },
//  { status: 'fulfilled', value: 200 },
//  { status: 'rejected', reason: 'Hello' }
// ]