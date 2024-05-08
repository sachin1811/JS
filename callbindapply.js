
function sum(num1, num2) {
    console.log( this.num1,this.num2,num1,num2);
    }
    sum.apply({num1:4,num2:7});
    sum.call({num1:4,num2:7});
    let sumBind = sum.bind({num1:15,num2:16});
    sumBind(6,7);

    sum.apply({num1:4,num2:7},[10,20]);
    sum.call({num1:4,num2:7},100,200);
    sumBind = sum.bind({num1:15,num2:16});
    sumBind(60,70);

   var person = {
        name: "Piyush",
      age: 20,
      getAge: function(city){
        console.log(this.name,this.age,city);
      }
    }

    person.getAge("delhi");
    var person2 = {age:  24};
    var person3 = {name:"shruti",age:  28};
    person.getAge.call(person2,"kanpur");
    person.getAge.call(person3);
    const personBind = person.getAge.bind(person3);
    personBind("bangalore");
    person.getAge.apply(person2,["kanpur"]);
    person.getAge.apply(person3,["hanspuram"]);

    var personNew = {
        name: "Piyush",
      age: 20,
      getAge: function(city){
        console.log(this.name,this.age,city);
      },
      getArea: function(city){
        console.log(this.name,this.area,city);
      },
      getState: (city) => {
        console.log(this.name,this.age,city);
      }
    };

    let personAdmin = {
        __proto__: personNew,
        name: "sachin",
        age: 30,
        area: "banswara"
      };
    
    personNew.getAge("delhi");
    personNew.getAge.call(person2,"kanpur");
    personNew.getAge.call(person3);
    const person2Bind = personNew.getAge.bind(person3);
    person2Bind("bangalore");
    personNew.getAge.apply(person2,["kanpur"]);
    personNew.getAge.apply(person3,["hanspuram"]);

    personAdmin.getAge("delhi");
    personAdmin.getArea("delhi");
    personNew.getArea("delhi");
