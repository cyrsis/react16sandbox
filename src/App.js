import React, { Component } from 'react';

import styles from './App.css';
import Layout from "./component/Layout";
import BurgerBuilder from "./Screen/BurgerBuilder";
import { Name } from "./es6/Name";
import Person  from "./component/Person";

class App extends Component {

    state = {
        person: [
            {name: 'Max', age: 28},
            {name: 'Manu', age: 29},
            {name: 'Stephine', age: 26},
        ],
        otherstate: 'someother var'
    }

    switchHandler = (newName) => {

        this.setState({
                person: [
                    {name: newName, age: 36},
                    {name: 'Manu', age: 29},
                    {name: 'Stephine', age: 26},

                ]
            }
        )
    }

    eventHandler = (event) => {
        this.setState(

            {
                person:[
                    {name: event.target.value,age:22},
                    {name: 'Manu',age:22},
                    {name: 'Stephine',age:22},
                ]
            }


        )
    }


    render() {
        return (
            <div >

                <h1>hi, this is react</h1>
                <p>This is really working?</p>
                <button onClick={this.switchHandler.bind(this, "Victor")}> Switch name</button>
                <Person
                    name={this.state.person[0].name}
                    age={this.state.person[0].age}
                    Change={this.eventHandler}

                />

                <Person
                    name={this.state.person[1].name}
                    age={this.state.person[1].age}
                />

                <Person
                    name={this.state.person[2].name}
                    age={this.state.person[2].age}
                />

                {/*<Name></Name>*/}
                {/*<Layout>*/}
                {/*<BurgerBuilder/>*/}
                {/*</Layout>*/}

            </div>
        );


    }
}

export default App;
