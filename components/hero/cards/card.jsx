import Image from "next/image";
import styles from "./card.module.scss";

const card = () => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <Image
          src="/images/rocket.png"
          alt="balloon"
          width={400}
          height={500}
        />
        <div className={styles.cardBody}>
          <h3>Success#0831</h3>
          <p> Everyday Pbject Collection </p>
        </div>
      </div>
    </div>
  );
};

export default card;
