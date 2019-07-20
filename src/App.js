import React, { Component } from "react";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

class App extends Component {
  constructor() {
    super();
    this.handleReset = this.handleReset.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    console.log("App constructor");
  }
  state = {
    counters: [
      { id: 0, value: 4 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 }
    ]
  };
  // componentDidMount() {
  //   console.log("App mounted");
  // }
  handleDecrement(counter) {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    //create new counter object
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({
      counters
    });
  }
  handleIncrement(counter) {
    const counters = [...this.state.counters];
    //check the value of counter
    const index = counters.indexOf(counter);
    //create new counters
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  }
  handleReset() {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  }
  handleDelete(counterId) {
    const newCounterId = this.state.counters.filter(c => c.id !== counterId);
    this.setState({
      counters: newCounterId
    });
  }
  render() {
    console.log("App rendered");
    return (
      <div>
        {/* counters with value greater than zero for navbar child */}
        <Navbar counters={this.state.counters.filter(c => c.value > 0)} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            handleIncrement={this.handleIncrement}
            handleDecrement={this.handleDecrement}
            handleReset={this.handleReset}
            handleDelete={this.handleDelete}
          />
        </main>
      </div>
    );
  }
}

export default App;
