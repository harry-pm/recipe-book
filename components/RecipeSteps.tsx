import { Recipe } from '../models/recipe.model';

type Props = {
  recipe: Recipe
};

const RecipeSteps: React.FC<Props> = ({ recipe }) => {
  return (
    <ol>
      {recipe.steps.map(s =>
        <li>{s}</li>    
      )}
    </ol>
  );
};

export { RecipeSteps };