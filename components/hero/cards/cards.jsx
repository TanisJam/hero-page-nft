import Card from "./card"
import styles from "./cards.module.scss"

const data = [
  {
    image: "balloon",
    title: "ComingSoon#9374",
    description: "Everyday Object Collection"
  },
  {
    image: "tower",
    title: "NoNewMars#6581",
    description: "Everyday Object Collection"
  },
  {
    image: "rocket",
    title: "Success#0831",
    description: "Everyday Object Collection"
  }
];

const cards = () => {
  return (
    <div className={styles.cardsContainer}>
      {data.map(item => (
        <Card key={item.title} {...item} />
      ))}
      {/* <Card image="balloon"/>
      <Card image="tower"/>
      <Card image="rocket" /> */}
    </div>
  );
}

export default cards;