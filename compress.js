var compress = function(chars) {
    let count = 1;
    let result = "";   
      for (let i = 0; i < chars.length; i++) {      
          if (chars[i] === chars[i+1]) {
            count++;
        } else {
            result += chars[i];
            if(count>1)
            result+= count;
            count = 1;
        }
    }
    return result.split("");
};

console.log(compress(["a","a","b","b","c","c","c"]));

var largestAltitude = function(gain) {
    let maxAltitude = 0;
    let currentSum = 0
    for(let i=0;i<gain.length;i++)
    {   currentSum = currentSum + gain[i];
        if(maxAltitude < currentSum)
        maxAltitude = currentSum;
    }
    return maxAltitude;
};

console.log(largestAltitude([-5,1,5,0,-7]));


var pivotIndex = function(nums) {
    let totalSum = 0;
    let leftSum = 0;
    for(let i = 0; i < nums.length; i++)
    {
       totalSum += nums[i];
    }
    for(let i = 0; i < nums.length; i++)
    {
        if(i>0)
       leftSum += nums[i-1];
       if(leftSum === (totalSum - leftSum - nums[i]))
       {
        return nums[i];
       }
    }
    return -1;
};

console.log("pivot");
console.log(pivotIndex([1,7,3,6,5,6]))