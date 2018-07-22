import React, { Component } from 'react';

import './App.css';
import Layout from "./component/Layout";
import BurgerBuilder from "./Screen/BurgerBuilder";

class App extends Component {

    state = {}


    render() {
        return (


            <div>
                <Layout>
                    <BurgerBuilder/>
                </Layout>

            </div>
        );
    }


}

export default App;
