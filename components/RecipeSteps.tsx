import { Recipe } from '../models/recipe.model';

type Props = {
  recipe: Recipe
};

const RecipeSteps: React.FC<Props> = ({ recipe }) => {
  return (
    <ol>
      
        <li></li>    
      
    </ol>
  );
};

export { RecipeSteps };