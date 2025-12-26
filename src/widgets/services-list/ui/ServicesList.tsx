import styles from "./ServicesList.module.css";
import type { FC } from "react";
import { servicesMock } from "../../../ entities/services/model/mock";
import { ServiceItem } from "./ServiceItem";

export const ServicesList: FC = () => {
  return (
    <div className={styles.items}>
      {servicesMock.map(({ title, id, price, available }) => (
        <ServiceItem key={id} title={title} price={price} available={available} />
      ))}
    </div>
  );
};
