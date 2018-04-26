import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import FlagCard from "./components/FlagCard/FlagCard";
import flags from "./flags.json";
import "./App.css";

import Wrapper from "./components/Wrapper/Wrapper";
import Title from "./components/Title/Title";

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    maxScore: 12,
    message: "Click on a flag to begin!",
    messageClass: "",
    flags
  };

  // shuffle = (array) => {

  // }

  render() {
    return (
      <div className="App">
        <Navbar
          score={this.state.score}
          topscore={this.state.topScore}
          message={this.state.message}
          messageClass={this.state.messageClass}
        />

        <Header />
        <Title />

        <Wrapper>
          {this.state.flags.map(flag => (
            <FlagCard
            id={flag.id}
            key={flag.id}
            image={flag.image}
          />
          ))}
        </Wrapper>
      </div>
    );
  };
};

export default App;