import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './Burgeringrediant/Burgeringrediant';

const burger = (props) => {
    const transformedIngrediants = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
           return <BurgerIngredient key={igKey + i} type={igKey} />
        });
    }); //exracts objects and converts into string 
    return (
        <div className={classes.Burger}>
        <BurgerIngredient type="bread-top"/>
        {transformedIngrediants}
        <BurgerIngredient type="bread-bottom"/>
        </div>

    );
};

export default burger;