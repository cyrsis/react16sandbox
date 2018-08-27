import React from 'react'
import cssstyle from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient";
//Stateless Components

export const Burger = (props) => {
    return (
        <div className={cssstyle.Burger}>
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="bacon"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}


