import { Fragment } from "react";
import { RecipeListItem } from "./RecipeListItem";
import { Recipe } from '../models/recipe.model';

type Props = {
  recipes: Recipe[];
};

const RecipeList: React.FC<Props> = ({ recipes }) => {
  return (
    <Fragment>
      {recipes.map(r => (
        <RecipeListItem key={r.id} recipe={r} />
      ))}
    </Fragment>
  );
};

export { RecipeList };