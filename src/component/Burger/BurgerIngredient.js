import React, { Component } from 'react'
import cssstyle from "./BurgerIngredient.css";
import PropTypes from 'prop-types';


class BurgerIngredient extends Component {

    render() {

        let ingredient = null;

        switch (this.props.type) {
            case('bread-bottom'):
                ingredient = <div className={cssstyle.BreadBottom}></div>
                break;
            case ('bread'):
                ingredient = <div className={cssstyle.BreadTop}></div>

                break;
            case ('bread-top'):
                ingredient = (
                    <div className={cssstyle.BreadTop}>

                        <div className={cssstyle.Seeds1}></div>
                        <div className={cssstyle.Seeds2}></div>
                    </div>);
                break;
            case ('meat'):
                ingredient = <div className={cssstyle.Meat}>

                </div>
                break;
            case ('salad'):
                ingredient = <div className={cssstyle.Salad}></div>
                break;
            case ('cheese'):
                ingredient = <div className={cssstyle.Cheese}></div>
                break;

            case ('bacon'):
                ingredient = <div className={cssstyle.Bacon}></div>
                break;

            default:
                ingredient = null;


        }
        return ingredient;

    }


}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired

}


export default BurgerIngredient;
