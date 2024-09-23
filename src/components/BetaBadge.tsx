import React from "react";
import styles from "./BetaBadge.module.scss";

const BetaBadge: React.FC = () => {
  return (
    <div className={styles.betaBadge}>
      <span>Beta</span>
    </div>
  );
};

export default BetaBadge;
