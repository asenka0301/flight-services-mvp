import styles from "./ServicesPage.module.css";
import { useMemo, useReducer, type FC } from "react";
import { servicesMock } from "../../../ entities/services/model/mock";
import { ServicesList } from "../../../widgets/services-list/ui/ServicesList";
import { initialCartState } from "../../../features/cart/model/cart.types";
import { cartReducer } from "../../../features/cart/model/cart.reducer";
import {
  selectSelectedServices,
  selectTotalSum,
} from "../../../features/cart/model/cart.selectors";
import CartSummary from "../../../features/cart/ui/CartSummary";

export const ServicesPage: FC = () => {
  const services = servicesMock;
  const [cart, dispatch] = useReducer(cartReducer, initialCartState);

  const selectedServices = useMemo(() => selectSelectedServices(services, cart), [services, cart]);

  const totalSum = useMemo(() => selectTotalSum(services, cart), [services, cart]);

  const handleToggle = (id: string) => {
    dispatch({ type: "TOGGLE", id });
  };

  const handleClear = () => dispatch({ type: "CLEAR" });

  // const handleCheckout = () => {
  //   console.log("Checkout:", cart.selectedIds);
  // };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Доп.услуги к перелету</h1>
      <ServicesList
        services={services}
        selectedServices={cart.selectedIds}
        onToggle={handleToggle}
      />
      <CartSummary
        selectedServices={selectedServices}
        totalSum={totalSum}
        // handleCheckout={handleCheckout}
        handleClear={handleClear}
      />
    </div>
  );
};
