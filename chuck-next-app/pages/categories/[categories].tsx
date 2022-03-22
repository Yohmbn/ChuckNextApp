import type { GetServerSideProps, NextPage } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {


  const response = await fetch( `https://api.chucknorris.io/jokes/random?category=${context.params.categories}`);
  const joke = await response.json();
  if (!joke) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }


  console.log(joke)
  return {
    props: {
      joke: joke.value,
    },
  };
};

type RandomJokeType = {
  joke: string;
};
const RandomJoke: React.FC<RandomJokeType> = ({ joke }) => {
  return (
    <div >
      <main >
        <h1 >Chuck Noris Joke</h1>
        <div >{joke}</div>
      </main>


    </div>
  );
};

export default RandomJoke;
