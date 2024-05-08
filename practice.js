function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return 
  {
      bar: "hello"
  };
}

console.log(foo1());
console.log(foo2());

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);