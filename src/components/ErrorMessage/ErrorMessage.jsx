import styles from "./ErrorMessage.module.css";

function ErrorMessage() {
  return (
    <p className={styles.error}>Something went wrong! Please try again.</p>
  );
}

export default ErrorMessage;
