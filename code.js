function arrayPrint(){
    let arrayData = [];
for(let i=10;i>0;i--){
let innerArray = [];
for(let j=1;j<=10;j++){
if(i%2==0)
{
innerArray.push((i-1)*10+(11-j));
}
else{
innerArray.push((i-1)*10+(j));
}
}
arrayData.push(innerArray);
}
console.log(arrayData);
}

arrayPrint();


