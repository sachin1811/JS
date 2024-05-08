let user = {
    name: "John",
    surname: "Smith",
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    },
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    }
  };
  
  let admin = {
    __proto__: user,
    isAdmin: true
  };
  
  console.log(admin.fullName); // John Smith (*)
  
  // setter triggers!
  admin.fullName = "Alice Cooper"; // (**)
  
  console.log(admin.fullName); // Alice Cooper, state of admin modified
  console.log(user.fullName);

  const obj1 = {
    func(){
      console.log(this);
    }
  }

  const a1 = obj1.func;

  a1();
  obj1.func();