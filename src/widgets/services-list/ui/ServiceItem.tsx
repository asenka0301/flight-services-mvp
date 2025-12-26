import { Button } from "../../../shared/Button/Button";
import { getServiceItemButtonProps } from "../lib/getServiceItemButtonProps";
import styles from "./ServicesList.module.css";
import type { FC } from "react";

type ServiceItemProps = {
  title: string;
  price: number;
  available: boolean;
};

export const ServiceItem: FC<ServiceItemProps> = ({ title, price, available }) => {
  const btn = getServiceItemButtonProps({
    available,
  });
  return (
    <div className={styles.item}>
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.price}>₽{price}</span>
      </div>
      <Button type="button" variant="primary" disabled={btn.disabled}>
        {btn.text}
      </Button>
    </div>
  );
};
