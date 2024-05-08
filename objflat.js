//object flat
const flattenObj = (ob) => {
    let result = {};
    for (const i in ob) {
        if ((typeof ob[i]) === 'object' && !Array.isArray(ob[i])) {
            const temp = flattenObj(ob[i]);
            for (const j in temp) {
                result[i + '.' + j] = temp[j];
            }
        }
        else {
            result[i] = ob[i];
        }
    }
    return result;
};

const obj = {
  A:"a",
  B:"b",
  C:{
    D:"d",
    E:{
      F:"f",
      G:{
        H:"h"
      }
    }
  }
};
 
console.log(flattenObj(obj));

// const findNestedObj = (ob, str) => {
//         const currentObj = str.split(".")[0];

//         const nextObj = str.split(".")[1];
//         if ((typeof ob[currentObj]) === 'object' &&  ob[currentObj].hasOwnProperty(nextObj) && !Array.isArray(ob[i])) {
//            return findNestedObj[currentObj][nextObj];
//         }
//         else {
//             return ob[i];
//         }
// };

// let arr = [1,2,[3,4, [5,6, [7, [8, 9, 10]]]]]

// function flatten(arr) {
//   return arr.reduce(function(acc, next){
//     let isArray =  Array.isArray(next)
//     return acc.concat(isArray ? flatten(next) : next)
//   }, [])
// }

// if (!Array.prototype.flatten) {
//   Array.prototype.flatten = function() {
//     return flatten(this)
//   }
// }
// console.log(arr.flatten());


// const arr1 = [{"name":"A", Chem:"20"}, 
// {"name":"A",Maths:"24"},
// {"name":"A",Eng:"24"}, 
// {"name":"B", Chem:"17"}, 
// {"name":"B",Maths:"23"},
// {name:"B","Physics":"21"},
// {name:"A","Physics":"20"},
// {name:"C","Eng":19}];

// function reduceArr(arr){
//     let result = [];
//     for(let i = 0;i < arr.length;i++)
//     {  
//         let elementIndex = result.findIndex((x) => x.name == arr[i].name);
//         if(elementIndex > -1)
//         {
//             result[elementIndex] = {...result[elementIndex],...arr[i]};
//         }
//         else
//         {
//           result.push(arr[i]);
//         }
//     }
//     return result;
// }

// const data = arr1.reduce(function(acc, next){
//     let elementIndex = acc.findIndex((x) => x.name == next.name);
//         if(elementIndex > -1)
//         {
//             acc[elementIndex] = {...acc[elementIndex],...next};
//         }
//         else
//         {
//           acc.push(next);
//         }
//     return acc;
//   }, []);

// console.log(reduceArr(arr1));
// console.log(reduceArr(data));






