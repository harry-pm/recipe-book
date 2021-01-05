import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { InferGetServerSidePropsType } from "next";
import { RecipeList } from '../components/RecipeList';

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const recipes = (await res.json() as Recipe[]);
  return {
    props: { recipes }
  };
}

export default function Home(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div  className={styles.container}>
      <Head>
        <title>Recipe Book</title>
      </Head>
        <h1>Recipes</h1>
        <RecipeList {...props}></RecipeList>
    </div>
  );
}
