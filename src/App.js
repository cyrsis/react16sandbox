import React, { Component } from 'react';
import ss from './App.css';
import Person from "./component/Person";
import ErrorBoundary from "./component/ErrorBoundary";

//Using CSS Modules

class App extends Component {
    state = {
        persons: [
            {id: '123', name: 'Max', age: 28},
            {id: '456', name: 'Manu', age: 29},
            {id: '789', name: 'Stephanie', age: 26}
        ],
        otherState: 'some other value',
        showPersons: false
    }

    switchNameHandler = (newName) => {
        // console.log('Was clicked!');
        // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
        this.setState({
            persons: [
                {name: newName, age: 28},
                {name: 'Manu', age: 29},
                {name: 'Stephanie', age: 27}
            ]
        })
    }

    nameChangedHandler = (event, id) => {

        const personIndex = this.state.persons.findIndex((p) => {
            return p.id === id;
        })

        // const changePerson = this.state.persons[personIndex]; //Dont change the object itself directly

        const changePerson = {
            ...this.state.persons[personIndex]
        }

        //Old Approach
        // const oldwayChange = Object.assign({}, this.state.persons[personIndex])

        changePerson.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = changePerson;

        this.setState({
            persons: persons
        })
    }

    togglePersonsHandler = () => {
        console.log(this.state.showPersons)
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
        console.log(this.state.showPersons)

    }
    deletePersonHandler = (personIndex) => {
        // const person = this.state.persons.slice(); //slice without arg simply call a array
        const person = [...this.state.persons] //Save as above , just more modern
        person.splice(personIndex, 1); //remove 1 person

        this.setState({
            persons: person,
        });


    }

    render() {

        let btnClass = '' ;

        let persons = null; //Create variable is more fun

        if (this.state.showPersons) {
            persons = (
                <div>
                    {
                        this.state.persons.map((person, index) => {
                            return <Person
                                key={person.id}
                                Change={(event) => this.nameChangedHandler(event, person.id)}
                                click={() => this.deletePersonHandler(index)} //alternative is .bind(index)
                                name={person.name}
                                age={person.age}/>
                        })

                    }
                </div>
            );

          btnClass = ss.red;
            //console.log(`btn Class`+ {btnClass})

        }

        // let redbold = ['red', 'bold'].join(' ');
        //console.log(redbold)

        let styleColod = []
        if (this.state.persons.length <= 2) {
            styleColod.push(ss.red)
        }
        if (this.state.persons.length <= 1) {
            styleColod.push(ss.bold)
        }


        return (
            <div>
                <ErrorBoundary>
                <div className={ss.App}>
                    <h1>Hi, I'm a React App</h1>
                    <p className={styleColod.join(' ')}>This is really working!</p>
                    <button
                        className={btnClass}
                        onClick={this.togglePersonsHandler}>Toggle Person
                    </button>
                    {persons}
                </div>
                </ErrorBoundary>
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }


}

export default App;
