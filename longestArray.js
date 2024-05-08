
var longestSubarray = function(nums) {
    console.log(nums);
  let l = 0;
  let count0 = 0;
  for(let i = 0; i< nums.length; i++)
  {
      if (nums[i] == 0)
      {++count0;
    }
    if (count0 > 1 && nums[l++] == 0)
    {
        --count0;
    }
  }
 

return nums.length - l - 1;
};

console.log(longestSubarray([1,1,0,0,1,1,1,0,0,1]));