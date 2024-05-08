//Array at polyfill

Array.prototype.myAt = function (index) {
    if (index >= 0) {
      return this[index];
    } else {
      return this[this.length + index];
    }
  };

console.log([1,2,3,4,5,6].myAt(2));
console.log([1,2,3,4,5,6].myAt(-1));
console.log([1,2,3,4,5,6].myAt(-2));

//Array Concat

Array.prototype.myConcat = function () {
    let newArr = [];
  
    for (let i = 0; i < this.length; i++) {
      newArr.push(this[i]);
    }
  
    for (let i = 0; i < arguments.length; i++) {
      if (Array.isArray(arguments[i])) {
        const dummyArr = arguments[i];
        for (let i = 0; i < dummyArr.length; i++) {
          newArr.push(dummyArr[i]);
        }
      } else {
        newArr.push(arguments[i]);
      }
    }
    return newArr;
  };

  console.log([1,2,3,4,5].myConcat([8,9,[11,12,13],16,[17,18]],22,23));


  //Array Copywithin

  Array.prototype.myCopyWithin = function (
    target = 0,
    start = 0,
    end = this.length
  ){
    if (target < 0) {
        target = this.length + target;
      }
    
      if (start < 0) {
        start = this.length + start;
      }
    
      if (end < 0) {
        end = this.length + end;
      }
    let shift = target - start;
    if (shift < 0) {
        end = Math.min(end, this.length);
        for (let i = start; i < end; i++) {
            this[i + shift] = this[i]; 
        }
    } else {
        for (let i = Math.min(end, this.length - shift) - 1; i >= start; i--) {
            this[i + shift] = this[i]; 
        }
    }
    return this;
  }

  console.log([1,2,3,4,5].myCopyWithin(-2))
  console.log([1,2,3,4,5].myCopyWithin(-2,2))
  console.log([1,2,3,4,5].myCopyWithin(1,2))
  console.log([1,2,3,4,5].myCopyWithin(4,2,4))
  console.log([1,2,3,4,5].myCopyWithin(5,3,4))
  console.log("------------");
  console.log([1,2,3,4,5].copyWithin(-2))
  console.log([1,2,3,4,5].copyWithin(-2,2))
  console.log([1,2,3,4,5].copyWithin(1,2))
  console.log([1,2,3,4,5].copyWithin(4,2,4))
  console.log([1,2,3,4,5].copyWithin(5,3,4))
  
 //Array entries

 Array.prototype.myEntries = function () {
    let keys = [];
    for (let i = 0; i < this.length; i++) {
      keys.push([i, this[i]]);
    }
  
    function* iterator() {
      yield* keys;
    }
  
    return iterator();
  };

  let it =  [1,2].myEntries();
  console.log(it.next());
  console.log(it.next());
  console.log(it.next());

  //Array every
  Array.prototype.myEvery = function (exists) {
    for (let i = 0; i < this.length; i++) {
      if (!exists(this[i])) {
        return false;
      }
    }
    return true;
  };

  console.log([1,2,3].every(x => x< 5));
  console.log([1,2,3].myEvery(x => x< 5));

  //Array Fill

  Array.prototype.myFill = function (value, start = 0, end = this.length) {
    if (start < 0) {
      start = this.length + start;
    }
  
    if (end < 0) {
      end = this.length + end;
    }
  
    for (let i = start; i < end; i++) {
      this[i] = value;
    }
  
    return this;
  };

  console.log([1,2,3,4].myFill(5,4));
  console.log([1,2,3,4,6,7].myFill(5,4));


  //Array Filter
  Array.prototype.myFilter = function (cb) {
    let result = [];
  
    for (let i = 0; i < this.length; i++) {
      if (cb(this[i], i, this)) {
        result.push(this[i]);
      }
    }
    return result;
  };

  console.log([1,2,3,4,5,6].myFilter( x => x%2 === 0));

  //Array Find
  Array.prototype.myFind = function (cb) {
    for (let i = 0; i < this.length; i++) {
      if (cb(this[i], i, this)) {
        return this[i];
      }
    }
  };

  console.log([1,2,3,4,5,6].myFind( x => x%2 === 0));

  //Array Find Index
  Array.prototype.myFindIndex = function (cb) {
    for (let i = 0; i < this.length; i++) {
      if (cb(this[i], i, this)) {
        return i;
      }
    }
    return -1;
  };

  
  console.log([1,2,3,4,5,6].myFindIndex( x => x%3 === 0));

  Array.prototype.myFindLast = function (cb) {
    for (let i = this.length; i >= 0; i--) {
      if (cb(this[i], i, this)) {
        return this[i]
      }
    }
  };

  
  console.log([1,2,3,4,5,6].myFindLast( x => x%3 === 0));

  Array.prototype.myFindLastIndex = function (cb) {
    for (let i = this.length; i >= 0; i--) {
      if (cb(this[i], i, this)) {
        return i;
      }
    }
    return -1;
  };

  
  console.log([1,2,3,4,5,6].myFindLastIndex( x => x%3 === 0));

  Array.prototype.myFlat = function (depth = 1) {
    const result = [];
  
    (function flatten(arr, depth) {
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) && depth > 0) {
          flatten(arr[i], depth - 1);
        } else {
          result.push(arr[i]);
        }
      }
    })(this, depth);
  
    return result;
  };

  var arrayBase = [1,2,[3,4,5],6,[7,[8,9],10],11,12];
  var arrayFlat = arrayBase.myFlat(1);
  console.log(arrayBase);
  console.log(arrayFlat);

  Array.prototype.deepFlat = function () {
    const result = [];
  
    (function flatten(arr) {
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          flatten(arr[i]);
        } else {
          result.push(arr[i]);
        }
      }
    })(this);
  
    return result;
  };

  arrayFlat = arrayBase.deepFlat();
  console.log(arrayBase);
  console.log(arrayFlat);

  Array.prototype.myFlatMap = function (cb) {
    let result = [];
  
    for (let i = 0; i < this.length; i++) {
      let cbRes = cb(this[i], i, this);
  
      if (Array.isArray(cbRes)) {
        for (let i = 0; i < cbRes.length; i++) {
          result.push(cbRes[i]);
        }
      } else {
        result.push(cbRes);
      }
    }
  
    return result;
  };
  
  arrayFlat = [1,2,3,4,5,6,7,8,9].myFlatMap( (x) => (x%2 == 0?[x,2*x,3*x]:10*x));
  console.log(arrayFlat); 

  Array.prototype.myForEach = function (cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i], i, this);
    }
  };

  [1,2,3,undefined,5,6].myForEach( x => console.log(x*2));
  [1,2,3,undefined,5,6].forEach( x => console.log(x*2));

  Array.prototype.myIncludes = function (element, fromIndex = 0) {
    for (let i = fromIndex; i < this.length; i++) {
      if (this[i] === element) {
        return true;
      }
    }
    return false;
  };

  console.log([12,23,34,45,56,].myIncludes(23));
  console.log([12,23,34,45,56,].myIncludes(""));

  Array.prototype.myIndexOf = function (element, fromIndex = 0) {
    for (let i = fromIndex; i < this.length; i++) {
      if (this[i] === element) {
        return i;
      }
    }
  
    return -1;
  };

  const arr = [12,23,34,45,56,];
  console.log(arr.myIndexOf(12));

  Array.prototype.myJoin = function (separator = ",") {
    let result = "";
  
    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        result += this[i];
      } else {
        result += this[i] + separator;
      }
    }
  
    return result;
  };

  
  console.log(arr.myJoin(":"));

  Array.prototype.myKeys = function () {
    let keys = [];
    for (let i = 0; i < this.length; i++) {
      keys.push(i);
    }
  
    function* iterator() {
      yield* keys;
    }
  
    return iterator();
  };

  
  it =  [1,2,3].myKeys();
  console.log(it.next());
  console.log(it.next());
  console.log(it.next());

  Array.prototype.myLastIndexOf = function (
    element,
    fromIndex = this.length - 1
  ) {
    for (let i = fromIndex; i >= 0; i--) {
      if (this[i] === element) {
        return i;
      }
    }
    return -1;
  };

  
  console.log(arr.myLastIndexOf(23));

  Array.prototype.myMap = function (cb) {
    let result = [];
  
    for (let i = 0; i < this.length; i++) {
      const value = cb(this[i], i, this);
      result.push(value);
    }
  
    return result;
  };

  const arrr = [1,2,3,4,5,6];
  console.log(arrr.myMap(x => x*2));
  console.log(arrr.myMap(x => x*2 === 4));
  console.log(arrr.myFilter(x => x*2 === 4));

  Array.prototype.myPop = function () {
    if (this.length > 0) {
      let lastEl = this[this.length - 1];
      this.length -= 1;
      return lastEl;
    }
  };

  const acbd = [1,2,3,4,5]
  console.log(acbd.myPop());
  console.log(acbd);

  Array.prototype.myPush = function () {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
    }
    return this.length;
  };

  
  console.log(acbd.myPush(7,8,"sachin"));
  console.log(acbd);

  Array.prototype.myReduce = function (cb, initialValue) {
    let result;
    let startIndex = 0;
  
    if (arguments.length <= 1) {
      result = this[0];
      startIndex = 1;
    }
  
    if (arguments.length >= 2) {
      result = initialValue;
    }
  
    for (let i = startIndex; i < this.length; i++) {
      result = cb(result, this[i]);
    }
  
    return result;
  };

  const dataReduce = [1,2,3,4,5].myReduce(
    (accumulator, currentValue) => accumulator * currentValue + accumulator,
    10,
  );

  console.log(dataReduce);


  Array.prototype.myReduceRight = function (cb, initialValue) {
    let result;
    let startIndex = this.length - 1;
  
    if (arguments.length <= 1) {
      result = this[this.length - 1];
      startIndex = this.length - 2;
    }
  
    if (arguments.length >= 2) {
      result = initialValue;
    }
  
    for (let i = startIndex; i >= 0; i--) {
      result = cb(result, this[i]);
    }
  
    return result;
  };

  const arrayReduceRight = [[1,2,3],[4,5],[6,7,8,9],[10,11]];

  console.log(arrayReduceRight.myReduceRight((x,y)=>x.concat(y),[12,13]));

  Array.prototype.myReverse = function () {
    let start = 0,
      end = this.length - 1;
  
    while (start < end) {
      let temp = this[start];
      this[start] = this[end];
      this[end] = temp;
      start++;
      end--;
    }
  
    return this;
  };
  const arrayReverse = arrayReduceRight.myReduceRight((x,y)=>x.concat(y),[12,13]);
  console.log(arrayReverse.myReverse());

  console.log(arrayReverse);

  Array.prototype.myShift = function () {
    if (this.length > 0) {
      const firstEl = this[0];
  
      for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1];
      }
  
      this.length -= 1;
  
      return firstEl;
    }
  };

const arrayShift = [1,2,3,4,5,6];

console.log(arrayShift.myShift());
console.log(arrayShift.myShift());
console.log(arrayShift);
console.log(arrayShift.myShift());
console.log(arrayShift);

Array.prototype.mySlice = function (start = 0, end = this.length) {
    if (start < 0) {
      start = this.length + start;
    }
  
    if (end < 0) {
      end = this.length + end;
    }
  
    let arr = [];
    for (let i = start; i < end; i++) {
      arr.push(this[i]);
    }
  
    return arr;
  };

  const arraySlice = [1,2,3,4,5,6,7];

  console.log(arraySlice.mySlice(3,5));
  console.log(arraySlice);
  console.log(arraySlice.mySlice(2,6));
  console.log(arraySlice);

  //Array Some
  Array.prototype.mySome = function (cb) {
    for (let i = 0; i < this.length; i++) {
      if (cb(this[i])) {
        return true;
      }
    }
    return false;
  };

  console.log([1,2,3].mySome(x => x%3 === 0));

  function defaultComparator(a, b) {
    a = a.toString();
    b = b.toString();
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  }
  
  Array.prototype.mySort = function (cb = defaultComparator) {
    for (var i = 0; i < this.length; i++) {
      for (var j = i + 1; j < this.length; j++) {
        if (cb(this[i], this[j]) > 0) {
          var swap = this[i];
          this[i] = this[j];
          this[j] = swap;
        }
      }
    }
    return this;
  };
  
  console.log([1,12,24,35,1000,200,30].mySort());
  console.log([1,12,24,35,1000,200,30].mySort((a,b) => a-b));

  Array.prototype.mySplice = function () {
    let returnResult = [];
    let start, deleteCount;
    let items = [];
  
    if (arguments.length === 0) {
      return returnResult;
    }
  
    // start
    start = arguments[0];
    if (start >= this.length) {
      return returnResult;
    }
    if (start < 0) {
      start = this.length + start;
    }
  
    // deleteCount
    if (arguments.length === 1) {
      deleteCount = this.length - start;
    }
    if (arguments.length >= 2) {
      deleteCount = arguments[1];
  
      if (deleteCount > this.length - start) {
        deleteCount = this.length - start;
      }
    }
  
    // items
    if (arguments.length > 2) {
      for (let i = 2; i < arguments.length; i++) {
        items.push(arguments[i]);
      }
    }
  
    // delete elements if delete count > 0
    if (deleteCount > 0) {
      for (let i = 0; i < deleteCount; i++) {
        returnResult.push(this[start + i]);
      }
  
      for (let i = start, j = 0; i <= this.length - deleteCount; i++, j++) {
        this[start + j] = this[start + j + deleteCount];
      }
  
      this.length = this.length - deleteCount;
    }
  
    // add elements if items are provided
    if (items.length > 0) {
      for (let i = this.length - 1; i >= start; i--) {
        this[i + items.length] = this[i];
      }
  
      for (let i = 0; i < items.length; i++) {
        this[start + i] = items[i];
      }
    }
    return returnResult;
  };

  const arrayMySplice = [1,2,3,4,5];
  console.log(arrayMySplice.mySplice(3,4,22,33,44));
  console.log(arrayMySplice);
  console.log(arrayMySplice.mySplice(7,4,23,34));
  console.log(arrayMySplice);
  console.log(arrayMySplice.mySplice(3,-2,24,35,46));
  console.log(arrayMySplice);
  console.log(arrayMySplice.mySplice(3,1,25,36,47));
  console.log(arrayMySplice);

  Array.prototype.myUnshift = function () {
    if (arguments.length > 0) {
      // move elements of the array ahead
      for (let i = this.length - 1; i >= 0; i--) {
        this[i + arguments.length] = this[i];
      }
  
      // add the args elements at the start
      for (let i = 0; i < arguments.length; i++) {
        this[i] = arguments[i];
      }
    }
  
    return this.length;
  };
 const arrayUnshift = [1,2,3,4,5];
  console.log(arrayUnshift.myUnshift(22,33,44));
  console.log(arrayUnshift);
  console.log(arrayUnshift.myUnshift(24));
  console.log(arrayUnshift);
  console.log(arrayUnshift.myUnshift());
  console.log(arrayUnshift);

  Array.prototype.myValues = function () {
    let keys = [];
    for (let i = 0; i < this.length; i++) {
      keys.push(this[i]);
    }
  
    function* iterator() {
      yield* keys;
    }
  
    return iterator();
  };

  const arrayValues = [22,33,44,55].myValues();

  console.log(arrayValues.next());
  console.log(arrayValues.next());
  console.log(arrayValues.next());
  console.log(arrayValues.next());
  console.log(arrayValues.next());

