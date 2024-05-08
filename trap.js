var trap = function(height) {
    let max_left = [0];
    let max_left_current = 0;
    let max_right = [];
    let max_right_current = 0;
    let totalTrapped = 0;
    for(let i = 1; i < height.length; i++)
    {
       if(max_left_current < height[i-1])
       {
        max_left_current = height[i-1];
       }
       max_left[i] = max_left_current;
       if(max_right_current < height[height.length-i])
       {
        max_right_current = height[height.length-i];
       }
       max_right[height.length-i-1] = max_right_current;
    }
    max_right[height.length-1] = 0;
    for(let i=0; i < height.length; i++)
    {   const minTrap = Math.min(max_left[i],max_right[i]);
        if(height[i] < minTrap)
        totalTrapped +=  minTrap - height[i];
    }
    return totalTrapped;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(trap([4,2,0,3,2,5]));