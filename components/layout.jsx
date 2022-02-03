import Navbar from "./navbar/navbar";
import Footer from "./footer";
import styles from "./layout.module.scss";

const layout = ({ children }) => {
  let stars = [];
  for (let i = 0; i < 50; i++) {
    stars.push(<div className={styles.star} key={i}></div>);
  }
  return (
    <>
      <Navbar />
      <div className={styles.starsContainer}>{stars}</div>
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  );
};

export default layout;
