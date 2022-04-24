import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "./components/layout";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Cast Members</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="container">
          <h1>Cast Members</h1>
        </main>
      </div>
    </Layout>
  );
}
