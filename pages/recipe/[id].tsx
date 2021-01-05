import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { Fragment } from "react";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.params; 

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const recipe = (await res.json()) as Recipe;
  return {
    props: { recipe }
  };
}

export default function RecipeDetailPage({
  recipe
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Fragment>
      <h1>{recipe.title}</h1>
      <p>{recipe.body}</p>
    </Fragment>
  );
}