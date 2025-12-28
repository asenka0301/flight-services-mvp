import styles from "./ServicesPage.module.css";
import { useEffect, useMemo, useReducer, useState, type FC } from "react";
import { servicesMock } from "../../../ entities/services/model/mock";
import { ServicesList } from "../../../widgets/services-list/ui/ServicesList";
import { initialCartState } from "../../../features/cart/model/cart.types";
import { cartReducer } from "../../../features/cart/model/cart.reducer";
import {
  selectSelectedServices,
  selectTotalSum,
} from "../../../features/cart/model/cart.selectors";
import CartSummary from "../../../features/cart/ui/CartSummary";
import { orderServices } from "../../../widgets/services-list/lib/orderServices";
import type { Service } from "../../../ entities/services/model/ types";

export const ServicesPage: FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<string | null>(null);
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);

  const [cart, dispatch] = useReducer(cartReducer, initialCartState);

  useEffect(() => {
    setIsLoading(true);
    setIsError(null);
    const timer = setTimeout(() => {
      try {
        setServices(servicesMock);
      } catch {
        setIsError("Не удалось загрузить услуги");
      } finally {
        setIsLoading(false);
      }
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const { selectedServices, totalSum, orderedServices } = useMemo(() => {
    const selectedServices = selectSelectedServices(services, cart);
    const totalSum = selectTotalSum(services, cart);
    const orderedServices = orderServices(services, cart.selectedIds);

    return { selectedServices, totalSum, orderedServices };
  }, [services, cart]);

  const handleToggle = (id: string) => dispatch({ type: "TOGGLE", id });

  const handleClear = () => dispatch({ type: "CLEAR" });

  const handleCheckout = () => {
    if (cart.selectedIds.length === 0 || isCheckoutLoading) return;

    setIsCheckoutLoading(true);

    setTimeout(() => {
      try {
        dispatch({ type: "CLEAR" });
      } catch {
        setIsError("Не удалось оформить заказ");
      } finally {
        setIsCheckoutLoading(false);
      }
    }, 1000);
  };

  if (isLoading) return <div className={styles.center}>Загрузка услуг…</div>;
  if (isError) return <div className={styles.center}>{isError}</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Доп.услуги к перелету</h1>
      <div className={styles.wrapper}>
        <div className={styles.listWrapper}>
          <div className={styles.list}>
            <ServicesList
              services={orderedServices}
              selectedIds={cart.selectedIds}
              onToggle={handleToggle}
            />
          </div>
        </div>
        <div className={styles.card}>
          <CartSummary
            selectedServices={selectedServices}
            totalSum={totalSum}
            handleCheckout={handleCheckout}
            handleClear={handleClear}
            isCheckoutLoading={isCheckoutLoading}
          />
        </div>
      </div>
    </div>
  );
};
