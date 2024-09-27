import styles from "../modules/card.module.css";

export function Card({ title, content }) {
  return (
    <div className={styles.card}>
      <p>
        <span>{title}</span> {content}
      </p>
    </div>
  );
}