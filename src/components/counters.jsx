import React, { Component } from "react";
import Counter from "../components/counter";
class Counters extends Component {
  render() {
    console.log("counters rendered");
    const {
      handleReset,
      counters,
      handleDelete,
      handleIncrement,
      handleDecrement
    } = this.props;
    return (
      <div>
        <button onClick={handleReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={handleDelete}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
