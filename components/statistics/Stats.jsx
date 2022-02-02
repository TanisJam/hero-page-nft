import styles from "./Stats.module.scss";

const Stats = ({ icon, data, title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.center}>
        {icon}
        <div className={styles.data}>
          <h3>{data}</h3>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
