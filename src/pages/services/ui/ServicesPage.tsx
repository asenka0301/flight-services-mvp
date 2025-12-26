import { ServicesList } from "../../../widgets/services-list/ui/ServicesList";
import styles from "./ServicesPage.module.css";
import type { FC } from "react";

export const ServicesPage: FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Доп.услуги к перелету</h1>
      <ServicesList />
    </div>
  );
};
