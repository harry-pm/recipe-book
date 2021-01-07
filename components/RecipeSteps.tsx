import { Fragment } from "react";

function RecipeSteps({recipe}){
  return (
    <Fragment>
        <ol>
            {recipe.steps.map(s =>
            <li>{s}</li>    
            )}
        </ol>
    </Fragment>
  );
};

export { RecipeSteps };