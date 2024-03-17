import styles from "./Heading.module.scss";
const Heading = ({title}) => {
  return (
    <div className={styles.Heading}>
      <div className={styles.bar}>
        <div className={styles.left}></div>
        <div className={styles.right}></div>
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

Heading.defaultProps = {
    title:"Heading"
  }
export default Heading;
