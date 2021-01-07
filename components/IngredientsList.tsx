import { Recipe } from '../models/recipe.model';

type Props = {
  recipe: Recipe
};

const IngredientsList: React.FC<Props> = ({ recipe }) => {
  return (
    <ul>
      {recipe.ingredients.map(i =>
        <li>{i}</li>    
      )}
    </ul>
  );
};

export { IngredientsList };