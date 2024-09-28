import { BeatLoader } from "react-spinners";
import styles from "./LoadingMore.module.css";

const LoadingMore = () => {
  return (
    <div className={styles.loading}>
      <BeatLoader color="#b43feb" />
    </div>
  );
};

export default LoadingMore;
