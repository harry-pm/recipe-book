import { Fragment } from "react";

function IngredientsList({recipe}){
  return (
    <Fragment>
        <ul>
            {recipe.ingredients.map(i =>
            <li>{i}</li>    
            )}
        </ul>
    </Fragment>
  );
};

export { IngredientsList };