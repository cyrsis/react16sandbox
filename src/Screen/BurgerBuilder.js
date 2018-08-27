import React, { Component } from 'react';
import Aux from "../hoc/Util";
import { Burger } from "../component/Burger/Burger";


class BurgerBuilder extends Component {

    state = {
        ingredient: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2,

        }

    }

    render() {
        return (
            <Aux>
                <Burger ingredient={this.state.ingredient}/>
                <div>BuildControl</div>
            </Aux>
        );
    }
}


export default BurgerBuilder;