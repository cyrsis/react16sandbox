import React, { Component } from 'react';

import './App.css';
import { Person } from "./Component/Person";
import HomeScreen from "./Screen/HomeScreen";
import CountDownScreen from "./Screen/CountDownScreen";
import { Time } from "./Component/Time";

class App extends Component {

    state = {
        person: [
            {name: "Max", age: "25"},
            {name: "Victor", age: "35"},
            {name: "Mary", age: "37"},
        ]
    }

    render() {
        return (

            <div>
                <Person name={this.state.person[0].name} age={this.state.person[0].age}></Person>
                <Person name={this.state.person[1].name} age={this.state.person[1].age}></Person>
                <Person name={this.state.person[2].name} age={this.state.person[2].age}></Person>

                <button onClick={this.switchNameHandler}>Switch name</button>
            </div>
        );
    }

    switchNameHandler = () => {
        console.log(`Was Clicked`)
    }
}

export default App;
