import React, { Component } from 'react';

import './App.css';
import { Person } from "./Component/Person";
import Complete from "./Component/Complete";


class App extends Component {

    state = {
        person: [
            {name: "Max", age: "25"},
            {name: "Victor", age: "35"},
            {name: "Mary", age: "37"},
        ],
        otherstate: "Something else"
    }

    render() {
        return (


            <div>
                <Complete/>
                <Person name={this.state.person[0].name} age={this.state.person[0].age}></Person>
                <Person name={this.state.person[1].name} age={this.state.person[1].age} click={this.switchNameHandler}></Person>
                <Person name={this.state.person[2].name} age={this.state.person[2].age}></Person>

                <button onClick={this.switchNameHandler}>Switch name</button>
            </div>
        );
    }

    switchNameHandler = () => {

        this.setState({
            person: [
                {name: "Maxium Salve", age: "25"},
                {name: "Victor", age: "35"},
                {name: "Mary", age: "37"},
            ]


        })

    }
}

export default App;
