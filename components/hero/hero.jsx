import Cards from "./cards/cards";
import styles from "./hero.module.scss";
import Button from "./../button";

const hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1>
          <span>The next</span>
          <span>generation of</span>
          <span>NFT transactions</span>
        </h1>
        <p>The place where your tokens will be safe and</p>
        <p>you will be able to trade them quickly and efficiently.</p>
        <div className={styles.buttons}>
          <Button>Explore</Button>
          <Button outlined>Create</Button>
        </div>
      </div>
      <Cards />
    </div>
  );
};

export default hero;
