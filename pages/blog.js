import Layout, { siteTitle } from "../components/layout";
import Head from "next/head"

export default function Blog() {
  return (
    <Layout>
    <Head>
      <title>{siteTitle}</title>
    </Head>
      <h1>Blog</h1>
    </Layout>
  );
}
