import Stats from "./Stats";
import styles from "./Statistics.module.scss";
import { RiArrowUpDownFill, RiGroupFill, RiAppsFill } from "react-icons/ri";

const data = [
  {
    icon: <RiArrowUpDownFill />,
    data: "500k",
    title: "Transactions",
  },
  {
    icon: <RiAppsFill />,
    data: "1.2k",
    title: "NFT exclusives",
  },
  {
    icon: <RiGroupFill />,
    data: "1k",
    title: "Artists",
  },
];

const Statistics = () => {
  return (
    <div className={styles.container}>
      {data.map((item) => (
        <Stats key={item.title} {...item} />
      ))}
    </div>
  );
};

export default Statistics;
