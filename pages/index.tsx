import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { InferGetServerSidePropsType } from "next";
import { RecipeList } from '../components/RecipeList';
import { getOrCreateConnection } from '../utils/index';
import { Recipe } from '../models/recipe.model';

export async function getServerSideProps() {
  const conn = await getOrCreateConnection();
  const recipeRepo = conn.getRepository<Recipe>("Recipe");

  const recipes = (await recipeRepo.find()).map(r => JSON.stringify(r));
  console.log(`${recipes.length} recipes fetched from db`);

  return {
    props: { recipes }
  };
}

export default function Home({ recipes }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const recipeObjs = recipes.map(r => JSON.parse(r) as Recipe);
  return (
    <div  className={styles.container}>
      <Head>
        <title>Recipe Book</title>
      </Head>
        <h1>Recipes</h1>
        <RecipeList recipes={recipeObjs}></RecipeList>
    </div>
  );
}
