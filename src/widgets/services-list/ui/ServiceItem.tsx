import { Button } from "../../../shared/Button/Button";
import { getServiceItemButtonProps } from "../lib/getServiceItemButtonProps";
import styles from "./ServicesList.module.css";
import type { FC } from "react";

type ServiceItemProps = {
  title: string;
  price: number;
  available: boolean;
  id: string;
  isSelected: boolean;
  onToggle: (id: string) => void;
};

export const ServiceItem: FC<ServiceItemProps> = ({
  title,
  price,
  available,
  id,
  isSelected,
  onToggle,
}) => {
  const btn = getServiceItemButtonProps({
    available,
    isSelected,
  });
  return (
    <div className={styles.item}>
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.price}>₽{price}</span>
      </div>
      <div className={styles.btnWrapper}>
        <Button
          type="button"
          variant="primary"
          disabled={btn.disabled}
          onClick={() => onToggle(id)}
          className={`${isSelected ? "bg-red" : ""}`}
        >
          {btn.text}
        </Button>
      </div>
    </div>
  );
};
