// //hoisting

sayhi("Panku");

var sayhi = (name) => {
 console.log("hi",name);
}

function sayhi (name){
    console.log("hii",name);
}

sayhi("amit");


//currying 
function add(num1){
    return function(num2){
        if(num2){
            return add(num1 + num2);
        }
        return num1;
    }
}
console.log(add(2)(3)(4)(5)());
console.log(add(2)(3)());
console.log(add(2)());

const adv_curry =(fn) =>{ // here the function is a outer function
    return curried = (...args) => { 
        if (fn.length !== args.length){ // comparison of function length is done here 
            return curried.bind(null, ...args)
        }
    return fn(...args);
    };
}
function sum(a,b,c){
    return a+b+c;
}
const dd = adv_curry(sum);
//console.log(sum(2,3,4));
console.log(dd(2)(3)(4));
console.log(dd(2)(3,4));
console.log(dd(2)(3,4)(5,6));


function useState(state){
    let value = state;
  function increamentValue(){
    value += 1;
  }
  function fetchValue(){
    return value;
  }
  return [fetchValue,increamentValue];
}

const [fetchValue,increamentValue] = useState(5);


console.log(increamentValue());
console.log(increamentValue());
console.log(fetchValue());


//throttling
function throttle(func, delay) {
    let lastCall = 0;
    return function (...args) {
      const now = new Date().getTime();
      if (now - lastCall >= delay) {
        func(...args);
        lastCall = now;
      }
    };
  }
  
  const throttledScrollHandler = throttle(() => {
    console.log("Loading more content...");
  }, 1000);

  //debouncing
  function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }
  
  const debounceSearch = debounce((query) => {
    console.log(`Searching for: ${query}`);
    // Make API call with the search query
  }, 300);


  //bind
if (!Function.prototype.bind) {
  Function.prototype.bind = function(...arg){
    const func = this
    const context = arg[0]
    const params = arg.slice(1)
    return function(...innerParam) {
      func.apply(context, [...params, ...innerParam])
    }
  }
}