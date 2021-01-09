import { Recipe } from '../models/recipe.model';
import { Fragment } from "react";

type Props = {
  steps: Recipe["steps"]
};

const RecipeSteps: React.FC<Props> = ({ steps }) => {
  const arr = []
  Object.entries(steps).forEach(([key, value]) => {
    arr.push([key, value])
  });
  
  return (
    <Fragment>
      <ol>
        {arr.map(([key, value]) =>(
          <li key={key}>{value}</li>
        ))}
      </ol>
    </Fragment>
  );
};

export { RecipeSteps };