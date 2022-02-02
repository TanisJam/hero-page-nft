import Card from "./card"
import styles from "./cards.module.scss"

const cards = () => {
  return (
    <div className={styles.cardsContainer}>
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default cards;