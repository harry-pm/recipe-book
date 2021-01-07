import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { Fragment } from "react";
import { getOrCreateConnection } from "../../utils";
import { Recipe } from "../../models/recipe.model";
import { IngredientsList } from "../../components/IngredientsList";
import { RecipeSteps } from "../../components/RecipeSteps";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.params;

  const conn = await getOrCreateConnection();
  const recipeRepo = conn.getRepository<Recipe>("Recipe");
  const recipe = JSON.stringify(
    await recipeRepo.findOneOrFail(parseInt(id as string))
  );
  return {
    props: { recipe }
  };
}

export default function RecipeDetailPage({
  recipe
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const recipeObj = JSON.parse(recipe) as Recipe;
  return (
    <Fragment>
      <h1>{recipeObj.title}</h1>
      <IngredientsList recipe={recipeObj}></IngredientsList>
      <RecipeSteps recipe={recipeObj}></RecipeSteps>
    </Fragment>
  );
}