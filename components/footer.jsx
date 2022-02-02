import styles from "./footer.module.scss";

const footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.center}>
        Desingned by <a href="https://github.com/joseph-m-j">Joseph M. J.</a> /
        Coded by <a href="#">Joseph M. J.</a>
      </div>
    </footer>
  );
};

export default footer;
