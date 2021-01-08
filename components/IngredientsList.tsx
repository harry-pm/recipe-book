import { Recipe } from '../models/recipe.model';
import { Fragment } from "react";

type Props = {
  ingredients: Recipe["ingredients"] 
};

const IngredientsList: React.FC<Props> = ({ ingredients }) => {
  const arr = []
  Object.entries(ingredients).forEach(([key, value]) => {
    arr.push([key, value])
  });

  return (
    <Fragment>
      <ul>
        {arr.map(([key, value]) =>(
          <li key={key}>{value}</li>
        ))}
      </ul>
    </Fragment>
  );
};

export { IngredientsList };