import styles from "./footer.module.scss";

const footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.center}>
        Desingned by{" "}
        <a
          href="https://www.linkedin.com/in/maxicris/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Maxi Cris
        </a>{" "}
        / Coded by{" "}
        <a
          href="https://www.linkedin.com/in/mauricionromero/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mauricio Romero
        </a>
      </div>
    </footer>
  );
};

export default footer;
