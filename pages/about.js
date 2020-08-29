import Layout, { siteTitle } from "../components/layout";
import Head from "next/head"
// import styles from "../components/layout.module.css";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>About Me</h1>
    </Layout>
  );
}
