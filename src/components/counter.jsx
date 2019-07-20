import React, { Component } from "react";
class Counter extends Component {
  componentDidUpdate(prevProps, PrevState) {
    console.log("prevProps", prevProps); // after clicking twice the state was updated once
    console.log("prevState", PrevState); // this is null
    //use case
    if (prevProps.counter.value !== this.props.counter.value) {
      //do an Ajax call here and get new data from the server
    }
  }

  componentWillUnmount() {
    console.log("counter unmount"); // as a result of deleting a counter the state of app component is change before the unmount is then called
  }
  render() {
    console.log("counter rendered");
    return (
      <div className="row">
        <div className="col-1">
          <span>{this.increaseCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-md m-2"
          >
            +
          </button>

          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-md"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>

          <button
            className="btn btn-danger btn-md m-2"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            x
          </button>
        </div>
      </div>
    );
  }
  increaseCount() {
    const { value } = this.props.counter;
    return value === 0 ? (
      <p className="badge badge-warning m-2">Zero</p>
    ) : (
      <p className="badge badge-primary m-2">{value}</p>
    );
  }
}

export default Counter;
