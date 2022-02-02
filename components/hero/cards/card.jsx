import Image from "next/image";
import styles from "./card.module.scss";

const card = ({image, title, description}) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <Image
          src={`/images/${image}.png`}
          alt="balloon"
          width={400}
          height={500}
        />
        <div className={styles.cardBody}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default card;
