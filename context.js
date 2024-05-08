function scope(){
    let i;
    for(i = 0;i<5;i++)
    {
         setTimeout(()=>{console.log(i)},1000);
    }
}

function scope2(){
    for(let i = 0;i<5;i++)
    {
         setTimeout(()=>{console.log(i*2)},1000);
    }
}

function scope3(){
    for(var i = 0;i<5;i++)
    {
         ((i) => setTimeout(()=>{console.log(i*3)},1000))(i);
    }
}

scope();
scope2();
scope3();