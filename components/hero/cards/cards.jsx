import Card from "./card"
import styles from "./cards.module.scss"

const cards = () => {
  return (
    <div className={styles.cardsContainer}>
      <Card image="balloon"/>
      <Card image="tower"/>
      <Card image="rocket" />
    </div>
  );
}

export default cards;