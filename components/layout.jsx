import Navbar from "./navbar/navbar";
import styles from "./layout.module.scss";

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={styles.container}>{children}</main>
    </>
  );
};

export default layout;
