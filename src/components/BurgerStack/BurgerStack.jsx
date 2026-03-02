// src/components/BurgerStack/BurgerStack.jsx

import Ingredient from '../Ingredient/Ingredient';

const BurgerStack = (props) => {
  return (
    <ul>
      {props.ingredients.length === 0 ? (
        <h2>No Ingredients</h2>
      ) : (
        props.ingredients.map((ingredient, index) => (
          <Ingredient
            key={index}
            ingredient={ingredient}
            type="remove"
            action={props.removeFromBurger}
            index={index}
          />
        ))
      )}
    </ul>
  );
};

export default BurgerStack;
