class Car {
  constructor(brand) {
    this.brand = brand;
  }
  present(){
    return 'I have a ' + this.brand;
  }
}

class Model extends Car {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }
}

const car = new Car('Toyota');
console.log(car.present()); // I have a Toyota

const model = new Model('Toyota', 'Camry');
console.log(model.present()); // I have a Toyota


//React class Component Lifecycle

//mounting

// constructor
// static getDerivedStateProps
// render()
// componentDidMount()

//updation

// getDerivedStateFromProps
// setState() Function
// shouldComponentUpdate()
// getSnapshotBeforeUpdate() Method
// componentDidUpdate()/

//unmount

//componentWillUnmount()

