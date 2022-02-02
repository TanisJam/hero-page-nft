import Navbar from "./navbar/navbar";
import Footer from "./footer";
import styles from "./layout.module.scss";

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  );
};

export default layout;
