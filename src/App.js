import React, { Component } from 'react'
import "./App.css";
import Tables from './Tables';


export class App extends Component {
  state = {
    characters: [
      {
        name: "Charlie",
        job: "Doctor"
      },
      {
        name: "Bob",
        job: "Teacher"
      }, {
        name: "Ryan",
        job: "Developer"
      }
    ]
  }

  removeCharacter = (index) => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      })
    })
  }
  render() {
    const { characters } = this.state
    return (
      <div>
        <h1>Hello World</h1>
        <Tables characterData={characters} removeCharacter={this.removeCharacter} />
      </div>
    )
  }
}

export default App
