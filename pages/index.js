import Head from "next/head";
import styles from "../styles/Home.module.css";
import { CastList } from "./components/cast-list";
import Layout from "./components/layout";

export default function Home({ cast }) {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Cast Members</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="container">
          <h1>Cast Members</h1>
          <CastList cast={cast} />
        </main>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://pixelprowess.com/i/stargazers/data.json");
  const data = await res.json();

  return {
    props: {
      cast: data,
    },
  };
};
