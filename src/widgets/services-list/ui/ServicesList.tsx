import styles from "./ServicesList.module.css";
import type { FC } from "react";
import { ServiceItem } from "./ServiceItem";
import type { Service } from "../../../ entities/services/model/ types";

type ServicesListProps = {
  services: Array<Service>;
  selectedIds: string[];
  onToggle: (id: string) => void;
};

export const ServicesList: FC<ServicesListProps> = ({ services, selectedIds, onToggle }) => {
  return (
    <div className={styles.items}>
      {services.map(({ title, id, price, available }) => (
        <ServiceItem
          key={id}
          title={title}
          price={price}
          available={available}
          id={id}
          onToggle={onToggle}
          isSelected={selectedIds.includes(id)}
        />
      ))}
    </div>
  );
};
