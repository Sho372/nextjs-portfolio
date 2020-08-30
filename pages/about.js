import Layout, { siteTitle, Divider } from "../components/layout";
import Head from "next/head";
import styles from "../components/layout.module.css";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1 className={styles.titleHeader}>About Me</h1>
      <Divider color="black" />
      <p>Hi, I'm Shohei. I'm software enginer.</p>
      <h1 className={styles.titleHeader}>Skills</h1>
      <Divider color="black" />
      <h3 className={styles.skillsHeader}>Programming Language</h3>
      <div className={styles.skillsContainer}>
        <div className={styles.skillsColmuns}>
          <li>Java</li>
          <li>PHP</li>
          <li>JavaScript(ES6)</li>
        </div>
        <div className={styles.skillsColmuns}>
          <li>Shell script</li>
          <li>Python(JupyterLab)</li>
        </div>
      </div>
      <h3 className={styles.skillsHeader}>Cloud</h3>
      <div className={styles.skillsContainer}>
        <div className={styles.skillsColmuns}>
          <li>AWS</li>
          <li>Fujitsu K5</li>
          <li>GCP</li>
        </div>
      </div>
      <h3 className={styles.skillsHeader}>Database</h3>
      <div className={styles.skillsContainer}>
        <div className={styles.skillsColmuns}>
          <li>MySQL</li>
          <li>SQL Server</li>
          <li>FireStore</li>
        </div>
      </div>
      <h3 className={styles.skillsHeader}>DevOps</h3>
      <div className={styles.skillsContainer}>
        <div className={styles.skillsColmuns}>
          <li>Vagrant</li>
          <li>Ansible</li>
          <li>Heat Orchestration Template</li>
        </div>
        <div className={styles.skillsColmuns}>
          <li>Docker</li>
        </div>
      </div>
      <h3 className={styles.skillsHeader}>Network</h3>
      <div className={styles.skillsContainer}>
        <div className={styles.skillsColmuns}>
          <li>TCP/IP</li>
        </div>
      </div>
    </Layout>
  );
}
