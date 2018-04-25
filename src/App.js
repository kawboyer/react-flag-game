import React, { Component } from 'react';
import FlagCard from "/FlagCard/FlagCard";
import Wrapper from "/Wrapper/Wrapper";
import Title from "/Title/Title";
import flags from "flags.json";
import "./App.css";

class App extends Component {
  state = {
    flags
  };

  render() {
    return (
      <Wrapper>
        <Title>Flag List</Title>
        {this.state.flags.map(flag => (
          <FlagCard
          id={flag.id}
          key={flag.id}
          country={flag.country}
          capital={flag.capital}
          image={flag.image}
        />
        ))}
      </Wrapper>
    );
  };
};

export default App;
