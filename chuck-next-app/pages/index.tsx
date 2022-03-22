
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch("https://api.chucknorris.io/jokes/categories");
  const categoriesList = await response.json();

  if (categoriesList.length === 0) {
    return {
      notFound: true,
    };
  }


  return {
    props: {
      categories: categoriesList,
    },
  };
};
type CategoriesType = {
  categories: string[];
};
const Home: React.FC<CategoriesType> = ({ categories }) => {
  return (
    <div >
      <Head>
        <title>Yoh Chuck Norris App</title>

      </Head>

      <main >
        <h1 >Chuck Noris Joke</h1>

        <p >Choose a category</p>

        <div >
          {categories.map((element, index) => {
            return (
              <Link href={`/categories/${element}`} key={index}>
                <a >
                  <h2> {element} </h2>
                </a>
              </Link>
            );
          })}
        </div>
      </main>


    </div>
  );
};

export default Home;
