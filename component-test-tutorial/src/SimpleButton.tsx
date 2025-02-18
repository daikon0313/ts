import { useState } from "react";
import styles from "./SimpleButton.module.css";

export const SimpleButton: () => JSX.Element = () => {
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState((prevState) => !prevState);
  };
  return (
    <button onClick={handleClick} className={styles.simpleButton}>
      {state ? "ON" : "OFF"}
    </button>
  );
};